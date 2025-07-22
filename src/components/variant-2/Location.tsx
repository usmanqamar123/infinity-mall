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
    <section className="bg-[#008B8B]/15 w-full h-full flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      <div className="w-full lg:w-[55%] xl:w-[60%] h-[500px]">
        <Map
          height={500}
          defaultCenter={[latitude, longitude]}
          defaultZoom={16}
        >
          <Marker
            width={50}
            anchor={[latitude, longitude]}
            onClick={handleMarkerClick}
          />
        </Map>
      </div>

      <div className="w-full h-full lg:w-[45%] xl:w-[35%] flex flex-col gap-7 items-start justify-center p-10">
        {/* Title */}
        <div className="relative z-10 text-left space-y-2 ">
          <p className=" text-xl italic font-normal text-[#008B8B]">
            Have Questions ?
          </p>
          <h2 className="text-3xl md:text-4xl 2xl:text-[42px] uppercase text-black">
            Contact US
          </h2>
        </div>

        <form className="w-full lg:w-[85%] grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            className=" text-gray-950 placeholder:text-gray-500 border-b border-gray-500 p-2 mb-4 focus:border-[#008B8B] focus:outline-none focus:text-[#008B8B] transition ease-in-out duration-150 w-full mr-[2%]"
            placeholder="Full Name"
          />
          <input
            type="email"
            className=" text-gray-950 placeholder:text-gray-500 border-b border-gray-500 p-2 mb-4 focus:border-[#008B8B] focus:outline-none focus:text-[#008B8B] transition ease-in-out duration-150 w-full mr-[2%]"
            placeholder="Email"
          />
          <input
            type="number"
            className=" text-gray-950 placeholder:text-gray-500 border-b border-gray-500 p-2 mb-4 focus:border-[#008B8B] focus:outline-none focus:text-[#008B8B] transition ease-in-out duration-150 w-full mr-[2%]"
            placeholder="Phone Number"
          />
          <input
            type="text"
            className=" text-gray-950 placeholder:text-gray-500 border-b border-gray-500 p-2 mb-4 focus:border-[#008B8B] focus:outline-none focus:text-[#008B8B] transition ease-in-out duration-150 w-full mr-[2%]"
            placeholder="Company Name"
          />

          <div className="lg:col-span-2 flex items-center justify-start gap-3">
            <input type="checkbox" className="accent-[#008B8B]" />
            <label className="text-gray-500 text-sm">
              I agree to the{" "}
              <span className="text-[#008B8B] cursor-pointer hover:underline">
                Terms & Conditions
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="lg:col-span-2 xl:col-span-1 bg-[#008B8B] text-white py-4 px-7 mt-4 cursor-pointer transition ease-in-out duration-150 uppercase"
          >
            Get in Touch
          </button>
        </form>
      </div>
    </section>
  );
};

export default LocationMap;
