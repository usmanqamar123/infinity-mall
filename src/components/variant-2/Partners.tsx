"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Image from "next/image";

const partnerImages = [
  "/variant-2/Partners/partner-1.png",
  "/variant-2/Partners/partner-2.png",
  "/variant-2/Partners/partner-3.png",
  "/variant-2/Partners/partner-4.png",
  "/variant-2/Partners/partner-5.png",
  "/variant-2/Partners/partner-6.png",
  "/variant-2/Partners/partner-7.png",
  "/variant-2/Partners/partner-8.png",
  // "/variant-2/Partners/partner-9.jpg",
  "/variant-2/Partners/partner-10.png",
  "/variant-2/Partners/partner-11.png",
  "/variant-2/Partners/partner-12.png",
  // "/variant-2/Partners/partner-13.jpeg",
];

const Partners = () => {
  return (
    <section className="w-full h-full flex flex-col gap-4 items-center justify-center px-4 md:px-8 xl:px-12 pb-10">
      <div className="text-center space-y-2">
        <p className="text-[#008B8B] text-xl italic font-normal">
          Our Partners
        </p>
        <h2 className="text-3xl md:text-4xl 2xl:text-[42px] text-gray-950 uppercase">
          We are proud to be associated with
          <br /> these esteemed partners
        </h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1440: { slidesPerView: 8 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full"
      >
        {partnerImages.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <Image
              src={src}
              width={300}
              height={300}
              alt={`Partner ${index + 1}`}
              className="h-[300px] w-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Partners;
