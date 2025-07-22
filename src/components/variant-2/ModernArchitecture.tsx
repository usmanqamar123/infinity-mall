import Image from "next/image";
import React from "react";

const ModernArchitecture = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 py-28">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16">
        <div className="relative w-full lg:w-[45%] h-[600px]">
          <Image
            src={"/Home/About/AboutSection.jpg"}
            width={500}
            height={500}
            alt="Infinity Mall About"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-8 lg:bottom-14 left-0 lg:-left-14 bg-[#008B8B] text-white flex flex-col items-start px-10 py-4 cursor-pointer">
            <i>More</i>
            <span className="font-medium text-2xl">Photos</span>
          </div>
        </div>

        <div className="w-full lg:w-[45%] flex flex-col items-start justify-start space-y-7 text-sm md:text-[15px]">
          <p className="text-[#008B8B] text-xl italic font-normal">
            Modern Architecture
          </p>
          <h2 className="text-3xl md:text-4xl 2xl:text-[42px] text-gray-950 uppercase">
            Introducing a new residence
          </h2>
          <p className="text-[#6b6e71]">
            Infinity Mall & Residence gives you the best of both worlds private
            like a luxury resort, yet packed with everything you need. Enjoy
            high-end amenitie including:
          </p>
          <ul className="text-[#6b6e71] pl-4 list-disc space-y-3">
            <li>A sparkling pool and sunny terrace</li>
            <li>Full gym and spa with sauna</li>
            <li>Fine dining and cozy cafes</li>
            <li>Exciting gaming areaa</li>
            <li>Easy M1 Motorway access</li>
            <li> Easy highway access</li>
            <li>24/7 Security & Smart Home Features</li>
          </ul>

          <button
            type="button"
            className=" bg-[#008B8B] cursor-pointer px-10 py-3 text-white"
          >
            Investment for the Future!
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModernArchitecture;
