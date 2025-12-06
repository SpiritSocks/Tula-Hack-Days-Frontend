import { Header } from '../widgets/components/Header';
import { MapContainer } from '../widgets/components/MapContainer';
import { ProfileDropdown } from '../widgets/ProfileMenu';
import { useState } from 'react';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [mapInstance, setMapInstance] = useState<any>(null);
  const [ymaps, setYmaps] = useState<any>(null);

  return (
    <div className="flex flex-col h-screen">
      <Header 
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        onProfileClick={() => setIsProfileOpen(true)}
        mapInstance={mapInstance}
        ymaps={ymaps}
      />
      
      <div className="flex-1 relative overflow-hidden">
        <MapContainer 
          onMapLoad={setMapInstance}
          onYmapsLoad={setYmaps}
          isSidebarOpen={isSidebarOpen}
        />
        <ProfileDropdown 
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
        />
      </div>
    </div>
  );
}