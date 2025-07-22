"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon
delete (L.Icon.Default as unknown as { prototype: { _getIconUrl: unknown } })
  .prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  //   iconRetinaUrl: "/marker.png",
  iconUrl: "/marker.png",
  //   shadowUrl: "/marker.png",s
});

const LocationMap = () => (
  <div className="w-full max-w-[1440px] mx-auto h-[500px] rounded-xl overflow-hidden mb-10 md:mb-14 lg:mb-20">
    <MapContainer
      center={[33.65914, 72.85826]}
      zoom={16}
      className="w-full h-full"
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[33.65914, 72.85826]}>
        <Popup>J7 Mall, D-17/2 Islamabad</Popup>
      </Marker>
    </MapContainer>
  </div>
);

export default LocationMap;
