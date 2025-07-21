import Image from "next/image";
import React from "react";

interface Amenity {
  id: number;
  icon: string;
  title: string;
}

const amenities: Amenity[] = [
  {
    id: 1,
    icon: "/Home/Amenities/BusinessCenter.svg",
    title: "Business Center",
  },
  {
    id: 2,
    icon: "/Home/Amenities/DoubleHeightShops.svg",
    title: "Double Height Shops",
  },
  {
    id: 3,
    icon: "/Home/Amenities/FoodCourt.svg",
    title: "Food Court",
  },
  {
    id: 4,
    icon: "/Home/Amenities/RooftopSitting.svg",
    title: "Rooftop Sitting",
  },
  {
    id: 5,
    icon: "/Home/Amenities/ServicedApartments.svg",
    title: "Serviced Apartments",
  },
  {
    id: 6,
    icon: "/Home/Amenities/KidsPlayArea.svg",
    title: "Kids Play Area",
  },
  {
    id: 7,
    icon: "/Home/Amenities/SmartCarParking.svg",
    title: "Smart Car Parking",
  },
  {
    id: 8,
    icon: "/Home/Amenities/Security.svg",
    title: "24/7 Security",
  },
];

const Amenities: React.FC = () => {
  return (
    <section className="bg-white w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12  xl:py-32 gap-8 lg:gap-16 xl:gap-20">
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B87333] max-w-2xl text-center"
        data-aos="fade-up"
      >
        World Class Amenities
      </h2>
      <main className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-16">
        {amenities.map((amenity) => (
          <div
            key={amenity.id}
            className="h-24 flex flex-col items-center justify-between gap-3"
          >
            <Image
              src={amenity.icon}
              alt={amenity.title}
              width={70}
              height={70}
              className="w-16 h-16 object-contain text-[#B87333]"
            />
            <h3 className="text-base sm:text-lg lg:text-xl font-medium text-[#B87333] text-center">
              {amenity.title}
            </h3>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Amenities;
