import React, { JSX } from "react";
import BusinessCenterIcon from "../../../public/variant-1/Amenities/BusinessCenter.svg";
import DoubleHeightShopsIcon from "../../../public/variant-1/Amenities/DoubleHeightShops.svg";
import FoodCourtIcon from "../../../public/variant-1/Amenities/FoodCourt.svg";
import RooftopSittingIcon from "../../../public/variant-1/Amenities/RooftopSitting.svg";
import ServicedApartmentsIcon from "../../../public/variant-1/Amenities/ServicedApartments.svg";
import KidsPlayAreaIcon from "../../../public/variant-1/Amenities/KidsPlayArea.svg";
import SmartCarParkingIcon from "../../../public/variant-1/Amenities/SmartCarParking.svg";
import SecurityIcon from "../../../public/variant-1/Amenities/Security.svg";

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
    title: "Food Court",
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
    title: "Kids Play Area",
  },
  {
    id: 7,
    icon: <SmartCarParkingIcon className="size-20" />,
    title: "Smart Car Parking",
  },
  {
    id: 8,
    icon: <SecurityIcon className="size-20" />,
    title: "24/7 Security",
  },
];

const Amenities: React.FC = () => {
  return (
    <section className="bg-white w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12  xl:py-32 gap-8 lg:gap-16 xl:gap-20">
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#006994] max-w-2xl text-center"
        data-aos="fade-up"
      >
        World Class Amenities
      </h2>
      <main className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-16">
        {amenities.map((amenity) => (
          <div
            key={amenity.id}
            className="h-28 flex flex-col items-center justify-between gap-3"
          >
            {amenity.icon}
            <h3 className="text-base sm:text-lg lg:text-xl text-center">
              {amenity.title}
            </h3>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Amenities;
