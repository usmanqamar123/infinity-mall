"use client";

import { useState } from "react";

const tabs = ["Height Duplex", "Double Height", "Penthouse", "Studio"];

const tabContent: Record<
  string,
  {
    description: string;
    details: { label: string; value: string | number }[];
  }
> = {
  "Height Duplex": {
    description:
      "The layout of an apartment floor includes a combination of individual units, corridors, stairwells, elevators, and communal areas such as lobbies or common rooms. Each apartment unit on a floor usually consists of specific rooms like bedrooms, bathrooms, a living area, a kitchen, and sometimes additional spaces like balconies or utility areas.",
    details: [
      { label: "BATHROOM", value: 10 },
      { label: "FLOOR NO", value: 100 },
      { label: "TOTAL AREA, SQ.M.", value: 350 },
      { label: "ROOMS", value: 20 },
      { label: "AMENITIES", value: "24h concierge, gym" },
    ],
  },
  "Double Height": {
    description:
      "Apartments Double Height refer to the levels or stories within a multi-storey residential building that accommodate individual living spaces or units. Each floor typically comprises a set of apartments, with the layout and number of units varying depending on the building’s design and size.",
    details: [
      { label: "BATHROOM", value: 6 },
      { label: "FLOOR NO", value: 75 },
      { label: "TOTAL AREA, SQ.M.", value: 280 },
      { label: "ROOMS", value: 15 },
      { label: "AMENITIES", value: "Balcony, concierge, pool" },
    ],
  },
  Penthouse: {
    description:
      "Welcome to our real estate agency, the place to start your new comfortable life at! We provide our clients with a great selection of luxury, modern, and unique living spaces in the best areas of New York, California and Southern regions of the country. Discover our benefits!",
    details: [
      { label: "BATHROOM", value: 8 },
      { label: "FLOOR NO", value: 120 },
      { label: "TOTAL AREA, SQ.M.", value: 500 },
      { label: "ROOMS", value: 25 },
      { label: "AMENITIES", value: "Private elevator, terrace, jacuzzi" },
    ],
  },
  Studio: {
    description:
      "Moreover, floor plans serve as valuable tools for architects, builders, and property developers, guiding the construction process and enabling precise visualization of how different units are positioned and interconnected within the overall structure of the building",
    details: [
      { label: "BATHROOM", value: 1 },
      { label: "FLOOR NO", value: 10 },
      { label: "TOTAL AREA, SQ.M.", value: 80 },
      { label: "ROOMS", value: 1 },
      { label: "AMENITIES", value: "Laundry, gym access" },
    ],
  },
};

const ApartmentDetails = () => {
  const [activeTab, setActiveTab] = useState("Height Duplex");
  const { description, details } = tabContent[activeTab];

  return (
    <section className="bg-[#F5F5F5] w-full h-full flex flex-col gap-8 2xl:gap-16 items-center justify-center px-4 md:px-8 xl:px-12 py-20 lg:py-24 2xl:py-32">
      <h2 className="text-2xl lg:text-3xl font-medium text-[#006994] max-w-xl text-center">
        Inspiring Built Space Everything you need is right here.
      </h2>
      <main
        className="
        w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start justify-center lg:justify-between gap-8 2xl:gap-16"
      >
        {/* Left Column */}
        <div className="w-full lg:w-[45%] space-y-7">
          {/* Tabs */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={` px-4 py-2 text-sm font-medium border rounded cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#006994]  text-white"
                    : "bg-white border-gray-300 hover:bg-[#006994] hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm md:text-[15px]">{description}</p>

          {/* Details */}
          <div className="space-y-4 text-sm">
            {details.map((item, index) => (
              <DetailItem key={index} label={item.label} value={item.value} />
            ))}
          </div>

          <button
            type="button"
            className=" bg-gradient-to-r from-[#006994] to-[#008B8B] px-10 py-3 text-white cursor-pointer"
          >
            Schedule a Visit
          </button>
        </div>

        {/* Right Column (Empty Placeholder) */}
        <div
          style={{
            backgroundImage:
              "url('/Home/ApartmentDetails/ApartmentDetails.png')",
          }}
          className="w-full lg:w-[43%] h-[550px] bg-center bg-cover bg-no-repeat flex items-center justify-center "
        ></div>
      </main>
    </section>
  );
};

interface DetailItemProps {
  label: string;
  value: string | number;
}

const DetailItem = ({ label, value }: DetailItemProps) => (
  <div>
    <h4 className="text-sm md:text-[15px] mb-1">{label}</h4>
    <div className="border-b border-gray-300 pb-1">{value}</div>
  </div>
);

export default ApartmentDetails;
