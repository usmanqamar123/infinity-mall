"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";
import clsx from "clsx";

const accordionData = [
  {
    title: "Education",
    content: "Nearby schools and universities provide quality education.",
  },
  {
    title: "Food & Drinks",
    content:
      "The area offers a wide range of culinary experiences, from local eateries serving authentic regional cuisine to upscale options.",
  },
  {
    title: "Shopping",
    content:
      "Enjoy shopping experiences from boutique stores to large retail chains, offering access to diverse products and services.",
  },
  {
    title: "Parks",
    content:
      "Proximity to local parks and recreational areas enhances convenience for outdoor activities and relaxation.",
  },
  {
    title: "Hospital",
    content:
      "Quick access to nearby hospitals, clinics, and urgent care centers ensures health needs are always within reach.",
  },
  {
    title: "Subway",
    content:
      "Having a Subway restaurant nearby provides a convenient dining choice for residents.",
  },
];

const Neighborhood = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#f1efec] w-full h-full flex flex-col gap-8 2xl:gap-16 items-center justify-center px-4 md:px-8 xl:px-12 py-20 lg:py-24 2xl:py-32">
      <h2 className="font-semibold text-3xl md:text-4xl 2xl:text-[42px] text-[#006994]">
        Neighborhoods
      </h2>

      <main className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-0">
        {/* Left Column */}
        <div className="w-full lg:w-[45%] bg-white p-4 space-y-2 h-[600px] thin-scrollbar">
          {accordionData.map((item, index) => (
            <div key={index} className="border-b border-black">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-6 text-lg lg:text-xl text-left text-[#006994] font-medium transition-colors duration-300"
              >
                <span>{item.title}</span>
                <span className="text-2xl">
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>

              <div
                className={clsx(
                  "transition-all duration-300 ease-in-out overflow-hidden text-black",
                  {
                    "max-h-[500px] opacity-100 py-2": activeIndex === index,
                    "max-h-0 opacity-0": activeIndex !== index,
                  }
                )}
              >
                <p className="text-sm sm:text-base leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[55%] h-[600px]">
          <Image
            src="/Home/Neighborhood/neighbor.png"
            alt="Neighborhood"
            width={600}
            height={550}
            className="w-full h-full object-cover"
          />
        </div>
      </main>
    </section>
  );
};

export default Neighborhood;
