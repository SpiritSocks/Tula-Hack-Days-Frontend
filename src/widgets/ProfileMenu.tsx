import { X, User, Award, Star, Camera, MapPin, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface ProfileDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileDropdown({ isOpen, onClose }: ProfileDropdownProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'achievements' | 'activity'>('profile');

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={onClose}
        />
      )}
      <div className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 overflow-y-auto transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="sticky top-0 bg-linear-to-r from-emerald-600 to-emerald-700 text-white p-6 z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-xl">User Name</h2>
                <div className="flex items-center gap-2 mt-1">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">Level 0</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Close profile"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 bg-white/20 rounded-lg p-3">
              <div className="text-xs opacity-90">Level</div>
              <div className="text-2xl mt-1">0</div>
            </div>
            <div className="flex-1 bg-white/20 rounded-lg p-3">
              <div className="text-xs opacity-90">Points</div>
              <div className="text-2xl mt-1">0</div>
            </div>
            <div className="flex-1 bg-white/20 rounded-lg p-3">
              <div className="text-xs opacity-90">Rank</div>
              <div className="text-2xl mt-1">-</div>
            </div>
          </div>
        </div>

        <div className="flex border-b border-gray-200 sticky top-[180px] bg-white z-10">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-3 text-sm transition-colors ${
              activeTab === 'profile'
                ? 'border-b-2 border-emerald-600 text-emerald-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Stats
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`flex-1 py-3 text-sm transition-colors ${
              activeTab === 'achievements'
                ? 'border-b-2 border-emerald-600 text-emerald-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Achievements
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`flex-1 py-3 text-sm transition-colors ${
              activeTab === 'activity'
                ? 'border-b-2 border-emerald-600 text-emerald-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Activity
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <h3 className="text-gray-900 mb-4">Your Statistics</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-blue-700 mb-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm">Objects Added</span>
                  </div>
                  <div className="text-2xl text-blue-900">0</div>
                </div>

                <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-purple-700 mb-2">
                    <Star className="w-5 h-5" />
                    <span className="text-sm">Reviews</span>
                  </div>
                  <div className="text-2xl text-purple-900">0</div>
                </div>

                <div className="bg-linear-to-br from-orange-50 to-orange-100 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-orange-700 mb-2">
                    <Camera className="w-5 h-5" />
                    <span className="text-sm">Photos</span>
                  </div>
                  <div className="text-2xl text-orange-900">0</div>
                </div>

                <div className="bg-linear-to-br from-emerald-50 to-emerald-100 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-emerald-700 mb-2">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm">Comments</span>
                  </div>
                  <div className="text-2xl text-emerald-900">0</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">Progress to Level 1</span>
                  <span className="text-sm text-gray-600">0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <p className="text-xs text-gray-600 mt-2">100 points needed</p>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-900">Achievements</h3>
                <span className="text-sm text-gray-600">0 / 6</span>
              </div>

              <p className="text-sm text-gray-500 text-center py-8">
                Complete activities to earn achievements
              </p>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="space-y-4">
              <h3 className="text-gray-900 mb-4">Recent Activity</h3>

              <p className="text-sm text-gray-500 text-center py-8">
                No activity yet
              </p>
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <button className="w-full py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
            View Leaderboard
          </button>
        </div>
      </div>
    </>
  );
}