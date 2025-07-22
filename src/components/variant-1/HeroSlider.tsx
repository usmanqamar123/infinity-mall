"use client";
import React, { useRef, useEffect } from "react";
// import Image from "next/image";

const Slider: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  // Wrap each letter in a span for animation
  useEffect(() => {
    if (textRef.current) {
      const textWrapper = textRef.current;
      textWrapper.innerHTML = textWrapper.textContent!.replace(
        /\S/g,
        "<span class='letter animate-pop-in'>$&</span>"
      );
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Home/ContactCTA/CTA-Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 xl:px-12 z-20">
        {/* <Image
          src="/InfinityMallLogo.png"
          width={140}
          height={80}
          alt="Infinity Mall Logo"
          className="mb-14"
        /> */}
        <h1 className="text-[#F5F5F5] text-3xl md:text-4xl lg:text-5xl 2xl:text-[55px] font-light text-center uppercase">
          INFINITY MALL & Residence
        </h1>
        <h2
          style={{ fontFamily: "Roboto" }}
          className="ml6 text-[#F5F5F5] font-black text-2xl md:text-5xl lg:text-7xl 2xl:text-[99px] text-center"
        >
          <span className="text-wrapper">
            <span className="letters" ref={textRef}>
              Where luxury meets convenience
            </span>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Slider;
