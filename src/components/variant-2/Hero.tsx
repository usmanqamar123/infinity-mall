import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center ">
      <Image
        src={"/Home/HeroSlider/01_IM_View_01.jpg"}
        width={1440}
        height={800}
        alt="Hero Background"
        loading="lazy"
        decoding="async"
        className="absolute top-0 right-0 w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-black/40 " />
      <div className="absolute bg-gray-950 w-[80%] lg:w-[500px] h-[600px] top-40 left-[10%] lg:left-[calc(50%-250px)] flex flex-col gap-7 items-center justify-center">
        <p className="text-[#008B8B] text-xl italic font-normal">Welcome to</p>
        <div className="lg:text-nowrap space-y-2 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-medium text-white">
            Infinity Mall & Residence
          </h1>
          <h2 className="text-white text-4xl font-thin">
            Where luxury meets convenience
          </h2>
        </div>

        <button className="cursor-pointer bg-[#008B8B] px-10 py-3 text-white">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
