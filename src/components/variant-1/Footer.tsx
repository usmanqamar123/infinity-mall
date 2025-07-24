import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#f1efec] overflow-x-clip relative w-full !text-black pt-20 lg:pt-24 z-10 space-y-8 lg:space-y-16 xl:space-y-20">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 !text-black items-start justify-between px-6 md:px-10 xl:px-0">
        <div className="w-full lg:w-[40%] flex flex-col items-start gap-7">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-medium">
            Get in Touch
          </h2>
          <p className="!text-black text-sm md:text-base leading-relaxed text-justify">
            We would love to hear it from you! Whether you have a question about
            our services, need assistancem feel free to reach out. Our team is
            here to help and will get back to you as soon as possible.
          </p>
          <div className="flex gap-4">
            <Link href="" target="_blank">
              <span className="group flex items-center justify-center w-10 h-10 bg-[#006994] rounded-full hover:bg-[#006994]/20 transition-all duration-300">
                <FaLinkedinIn size={20} className="text-white" />
              </span>
            </Link>
            <Link href="" target="_blank">
              <span className="group flex items-center justify-center w-10 h-10 bg-[#006994] rounded-full hover:bg-[#006994]/20 transition-all duration-300">
                <FaFacebookF size={20} className="text-white" />
              </span>
            </Link>
            <Link href="" target="_blank">
              <span className="group flex items-center justify-center w-10 h-10 bg-[#006994] rounded-full hover:bg-[#006994]/20 transition-all duration-300">
                <FaInstagram size={20} className="text-white" />
              </span>
            </Link>
            <Link href="">
              <span className="group flex items-center justify-center w-10 h-10 bg-[#006994] rounded-full  hover:bg-[#006994]/20 transition-all duration-300">
                <FaXTwitter size={20} className="text-white" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[20%] flex flex-col gap-4">
          <span className="group flex items-center justify-center w-10 h-10 bg-[#006994] rounded ">
            <IoMdCall size={18} className="text-white" />
          </span>
          <h2 className="font-semibold">Our Contact Info</h2>
          <p>
            {" "}
            +923367777007
            <br />
            info@infinitymall.com.pk
          </p>
        </div>

        <div className="w-full  lg:w-[20%] flex flex-col gap-4">
          <span className="group flex items-center justify-center w-10 h-10 bg-[#006994] rounded ">
            <FaLocationDot size={18} className="text-white" />
          </span>
          <h2 className="font-semibold">Our Address</h2>
          <p>
            Main Commercial Road A, Opposite J7 Mall M.V.H.S D-17/2 Islamabad
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between py-8 border-t-1 border-gray-950  gap-7 px-6 md:px-10 xl:px-0">
        <span>© 2025 Infinity Mall. All rights reserved.</span>
        <span className="cursor-pointer hover:text-[#006994]">
          {" "}
          Terms & Conditions
        </span>
      </div>
    </footer>
  );
};

export default Footer;
