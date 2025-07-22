import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

const ComplexConstruction = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 pb-10 md:pb-14 lg:pb-20">
      <div className="bg-gray-950 w-full max-w-[1280px] mx-auto flex flex-col items-center justify-center gap-10 p-10">
        <h2 className="text-xl md:text-2xl 2xl:text-3xl text-white">
          Watch the construction of the complex in real time
        </h2>

        <div className="relative w-[75%] flex items-center justify-between">
          <div className="absolute top-[54%] left-[75px] w-[78%] h-[2px] bg-white" />

          {/* 2022 */}
          <div className="relative z-10  flex flex-col items-center  justify-center gap-2 text-white">
            <span className="text-3xl font-semibold">2022</span>
            <FaRegDotCircle className="bg-gray-950 text-2xl text-[#006994]" />
            <span className="font-normal">Ground Breaking</span>
          </div>

          {/* 2024 */}
          <div className="relative z-10  flex flex-col items-center  justify-center gap-2 text-white">
            <span className="text-3xl font-semibold">2024</span>
            <FaRegDotCircle className="bg-gray-950 text-2xl text-[#006994]" />
            <span className="font-normal">Under Construction</span>
          </div>

          {/* 2026 */}
          <div className="relative z-10  flex flex-col items-center  justify-center gap-2 text-white">
            <span className="text-3xl font-semibold">2026</span>
            <FaRegDotCircle className="bg-gray-950 text-2xl text-[#006994]" />
            <span className="font-normal">Project Closure & Evaluation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplexConstruction;
