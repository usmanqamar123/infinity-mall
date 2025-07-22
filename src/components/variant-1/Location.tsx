"use client";
import React from "react";
import { Map, Marker } from "pigeon-maps";

const LocationMap = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-[500px] rounded-xl overflow-hidden mb-10 md:mb-14 lg:!mb-20">
      <Map
        height={500}
        defaultCenter={[33.661849634011745, 72.86950665018998]} // J7 Mall location
        defaultZoom={16}
      >
        <Marker width={50} anchor={[33.661849634011745, 72.86950665018998]} />
      </Map>
    </div>
  );
};

export default LocationMap;
