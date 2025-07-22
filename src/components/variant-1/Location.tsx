"use client";
import React from "react";
import { Map, Marker } from "pigeon-maps";

const LocationMap = () => {
  const latitude = 33.65969441234971;
  const longitude = 72.8581800700534;

  const handleMarkerClick = () => {
    // Open Google Maps at the location
    window.open(
      `https://www.google.com/maps/place/Infinity+Mall+%26+Residence/@33.6596526,72.8575647,18.42z/data=!4m14!1m7!3m6!1s0x38dfa3dcca6cd49b:0xcd3c1961c1f84f05!2sInfinity+Mall+%26+Residence!8m2!3d33.6596354!4d72.8581767!16s%2Fg%2F11r35y0y91!3m5!1s0x38dfa3dcca6cd49b:0xcd3c1961c1f84f05!8m2!3d33.6596354!4d72.8581767!16s%2Fg%2F11r35y0y91?hl=en&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D`,
      "_blank"
    );
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto h-[500px] rounded-xl overflow-hidden mb-20 md:mb-24 lg:mb-32">
      <Map height={500} defaultCenter={[latitude, longitude]} defaultZoom={16}>
        <Marker
          width={50}
          anchor={[latitude, longitude]}
          onClick={handleMarkerClick}
        />
      </Map>
    </div>
  );
};

export default LocationMap;
