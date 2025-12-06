import { Menu, User, MapPin } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  onProfileClick: () => void;
  mapInstance: any;
  ymaps: any;
}

export function Header({ onMenuClick, onProfileClick, mapInstance, ymaps }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm z-10 relative">
      <div className="flex items-center justify-between gap-4 max-w-full">
        {/* Left section - Logo and Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-emerald-600" />
            <span className="text-lg tracking-wide hidden sm:inline">Health Map</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            <span>About</span>
          </button>
          
          <button className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            <span>Help</span>
          </button>
          
          <button 
            onClick={onProfileClick}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <User className="w-5 h-5" />
            <span className="hidden sm:inline">Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
}