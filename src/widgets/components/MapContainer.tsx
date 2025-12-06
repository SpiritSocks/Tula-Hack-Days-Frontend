import { Map, YMaps, ZoomControl, GeolocationControl, FullscreenControl, RulerControl } from '@pbe/react-yandex-maps';

interface MapContainerProps {
  onMapLoad: (map: any) => void;
  onYmapsLoad: (ymaps: any) => void;
  isSidebarOpen: boolean;
}

export function MapContainer({ onMapLoad, onYmapsLoad }: MapContainerProps) {
  return (
    <div className="w-full h-full relative bg-gray-100">
      <YMaps query={{ apikey: '9bc7f175-cd72-4748-9c3e-049751a6fead', lang: 'en_RU' }}>
        <Map
          defaultState={{ center: [54.193122, 37.617348], zoom: 11 }}
          className="w-full h-full"
          onLoad={(ymaps) => onYmapsLoad(ymaps)}
          instanceRef={(map) => {
            if (map) onMapLoad(map);
          }}
          options={{
            suppressMapOpenBlock: true,
          }}
        >
          <ZoomControl options={{ position: { right: 10, top: 100 } }} />
          <GeolocationControl options={{ position: { right: 10, bottom: 100 } }} />
          <FullscreenControl options={{ position: { right: 10, top: 200 } }} />
          <RulerControl options={{ position: { left: 10, bottom: 50 } }} />
        </Map>
      </YMaps>
    </div>
  );
}