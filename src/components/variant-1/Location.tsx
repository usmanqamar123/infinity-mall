"use client";
import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 33.6597, // Approximate latitude for your address
  lng: 72.8582, // Approximate longitude
};

const LocationMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.GOOGLE_CONSOLE_API_KEY!,
  });

  return (
    <section className=" w-full h-full flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
          <Marker position={center} />
        </GoogleMap>
      )}
    </section>
  );
};

export default LocationMap;
