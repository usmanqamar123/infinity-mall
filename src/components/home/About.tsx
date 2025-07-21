import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="bg-[#F5F5F5] w-full h-full flex flex-col items-center justify-center px-4 md:px-8 xl:px-12 py-20 lg:py-24 2xl:py-32">
      <main
        className="
        w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 2xl:gap-16"
      >
        <div className="w-full lg:w-[45%] h-[600px] overflow-hidden ">
          <Image
            src={"/Home/About/AboutSection.jpg"}
            width={500}
            height={500}
            alt="Infinity Mall ABout"
            className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
          />
        </div>

        <div className="w-full lg:w-[45%] flex flex-col items-start justify-start space-y-7 text-sm md:text-[15px]">
          <h2 className="text-3xl md:text-4xl 2xl:text-[42px] text-[#B87333]">
            INFINITY MALL & RESIDENCE
          </h2>
          <p>
            Infinity Mall & Residence gives you the best of both worlds private
            like a luxury resort, yet packed with everything you need. Enjoy
            high-end amenitie including:
          </p>
          <ul className="pl-4 list-disc space-y-3">
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
            className=" bg-gradient-to-r from-[#D99464] to-[#B87333] cursor-pointer px-10 py-3 text-white"
          >
            Investment for the Future!
          </button>
        </div>
      </main>
    </section>
  );
};

export default About;
