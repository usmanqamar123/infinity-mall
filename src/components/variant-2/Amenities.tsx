import React, { JSX } from "react";
import BusinessCenterIcon from "../../../public/variant-1/Amenities/BusinessCenter.svg";
import DoubleHeightShopsIcon from "../../../public/variant-1/Amenities/DoubleHeightShops.svg";
import FoodCourtIcon from "../../../public/variant-1/Amenities/FoodCourt.svg";
import RooftopSittingIcon from "../../../public/variant-1/Amenities/RooftopSitting.svg";
import ServicedApartmentsIcon from "../../../public/variant-1/Amenities/ServicedApartments.svg";
import KidsPlayAreaIcon from "../../../public/variant-1/Amenities/KidsPlayArea.svg";
import SmartCarParkingIcon from "../../../public/variant-1/Amenities/SmartCarParking.svg";
import SecurityIcon from "../../../public/variant-1/Amenities/Security.svg";

const Amenities = () => {
  interface Amenity {
    id: number;
    icon: JSX.Element;
    title: string;
  }

  const amenities: Amenity[] = [
    {
      id: 1,
      icon: <BusinessCenterIcon className="size-20" />,
      title: "Business Center",
    },
    {
      id: 2,
      icon: <DoubleHeightShopsIcon className="size-20" />,
      title: "Double Height Shops",
    },
    {
      id: 3,
      icon: <FoodCourtIcon className="size-20" />,
      title: "Delicious Food Courts",
    },
    {
      id: 4,
      icon: <RooftopSittingIcon className="size-20" />,
      title: "Rooftop Sitting",
    },
    {
      id: 5,
      icon: <ServicedApartmentsIcon className="size-20" />,
      title: "Serviced Apartments",
    },
    {
      id: 6,
      icon: <KidsPlayAreaIcon className="size-20" />,
      title: "Children Play Area",
    },
    {
      id: 7,
      icon: <SmartCarParkingIcon className="size-20" />,
      title: "Smart Car Parking",
    },
    {
      id: 8,
      icon: <SecurityIcon className="size-20" />,
      title: "24/7 Tight Security",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[url('/variant-2/Amenities/Amenities-Bg.jpg')] bg-fixed bg-top bg-cover bg-no-repeat w-full h-full flex flex-col items-start px-4 md:px-8 lg:px-12 py-28">
      {/* Backdrop */}
      <div className="absolute w-full h-full top-0 left-0 bg-gray-950/40" />
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-start justify-start gap-8 lg:gap-16">
        {/* Title */}
        <div className="relative z-10 text-left space-y-2 text-white">
          <p className=" text-xl italic font-normal">Apartment Plans</p>
          <h2 className="text-3xl md:text-4xl 2xl:text-[42px] uppercase">
            Inspiring Built Space <br /> Everything you need is right here
          </h2>
        </div>

        <div className="relative z-10 w-full lg:w-2/3 flex items-center flex-wrap gap-4 lg:gap-10">
          {amenities.map((amenity) => (
            <div
              key={amenity.id}
              className="size-40 flex flex-col items-start gap-3 text-white bg-gray-950 hover:bg-[#008B8B] p-6 transition-colors duration-300"
            >
              {amenity.icon}
              <h3 className="text-left text-white/70">{amenity.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
