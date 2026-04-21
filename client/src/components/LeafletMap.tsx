import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapMarker {
  id: number;
  lat: number;
  lng: number;
  name: string;
  city: string;
  specialization: string;
  phone: string;
}

interface LeafletMapProps {
  markers?: MapMarker[];
}

export default function LeafletMap({ markers = [] }: LeafletMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    map.current = L.map(mapContainer.current).setView([51.1657, 10.4515], 6);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map.current);

    // Apply grayscale filter to tile layer
    const style = document.createElement('style');
    style.textContent = `
      .leaflet-tile-pane {
        filter: grayscale(100%) invert(0.05) brightness(1.05) contrast(0.95);
      }
      .leaflet-container {
        background: #FFFFFF;
        font-family: 'EB Garamond', serif;
      }
      .leaflet-popup-content-wrapper {
        border-radius: 0 !important;
        border: 1px solid #000000;
        box-shadow: none;
        font-family: 'EB Garamond', serif;
      }
      .leaflet-popup-tip {
        box-shadow: none;
      }
      .leaflet-popup-close-button {
        font-family: 'Public Sans', sans-serif;
      }
    `;
    document.head.appendChild(style);

    // Add markers
    markers.forEach((marker) => {
      const popupContent = `
        <div style="font-family: 'EB Garamond', serif; padding: 8px;">
          <p style="font-weight: bold; margin: 0 0 4px 0; font-family: 'Public Sans', sans-serif;">${marker.name}</p>
          <p style="margin: 0 0 4px 0; font-size: 14px;">${marker.city}</p>
          <p style="margin: 0 0 4px 0; font-size: 13px; color: #475467;">${marker.specialization}</p>
          <p style="margin: 0; font-size: 12px; font-family: 'JetBrains Mono', monospace;">${marker.phone}</p>
        </div>
      `;

      const marker_icon = L.divIcon({
        html: '<div style="width: 24px; height: 24px; background: #0F4C81; border: 1px solid #000000; display: flex; align-items: center; justify-content: center;"><span style="color: white; font-size: 12px; font-weight: bold;">●</span></div>',
        iconSize: [24, 24],
        className: 'custom-marker',
      });

      L.marker([marker.lat, marker.lng], { icon: marker_icon })
        .bindPopup(popupContent)
        .addTo(map.current!);
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [markers]);

  return (
    <div
      ref={mapContainer}
      style={{
        width: '100%',
        height: '500px',
        border: '1px solid #000000',
        borderRadius: 0,
      }}
    />
  );
}
