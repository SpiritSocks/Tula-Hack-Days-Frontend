import { X, Navigation, Star, Clock, Bookmark, MapPin } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  mapInstance: any;
  ymaps: any;
}

export function Sidebar({ isOpen, onClose, mapInstance, ymaps }: SidebarProps) {

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:absolute top-0 lg:top-auto bottom-0 lg:bottom-auto left-0 lg:left-auto right-auto lg:right-4 lg:top-4 w-80 lg:w-96 bg-white shadow-xl z-30 transform transition-transform duration-300 lg:rounded-lg overflow-hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-[420px]'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg text-gray-900">Quick Access</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="overflow-y-auto h-[calc(100%-4rem)]">
          {/* Directions Section */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <Navigation className="w-5 h-5 text-emerald-600" />
              <h3 className="text-gray-900">Directions</h3>
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Starting point"
                value={""}
                onChange={(e) => setStartPoint(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
              <input
                type="text"
                placeholder="Destination"
                value={endPoint}
                onChange={(e) => setEndPoint(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
              <button 
                onClick={calculateRoute}
                className="w-full py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm"
              >
                Get Directions
              </button>
              
              {routeInfo && (
                <div className="mt-3 p-3 bg-emerald-50 rounded-lg">
                  <div className="text-sm text-gray-700">
                    <div className="flex justify-between mb-1">
                      <span>Distance:</span>
                      <span>{routeInfo.distance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{routeInfo.duration}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Saved Places */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-emerald-600" />
              <h3 className="text-gray-900">Saved Places</h3>
            </div>
            <div className="space-y-2">
              {savedPlaces.map((place, index) => (
                <button
                  key={index}
                  onClick={() => goToPlace(place.coords, place.name)}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  {place.name}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Searches */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-emerald-600" />
              <h3 className="text-gray-900">Recent</h3>
            </div>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* Bookmarks */}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Bookmark className="w-5 h-5 text-emerald-600" />
              <h3 className="text-gray-900">Bookmarks</h3>
            </div>
            <p className="text-sm text-gray-500">No bookmarks yet</p>
          </div>
        </div>
      </div>

      {/* Toggle Button for Desktop */}
      <button
        onClick={onClose}
        className={`hidden lg:block absolute right-4 top-20 z-20 w-10 h-10 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-all ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-label="Open sidebar"
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="space-y-1">
            <div className="w-4 h-0.5 bg-gray-600"></div>
            <div className="w-4 h-0.5 bg-gray-600"></div>
            <div className="w-4 h-0.5 bg-gray-600"></div>
          </div>
        </div>
      </button>
    </>
  );
}