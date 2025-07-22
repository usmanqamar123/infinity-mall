import Image from "next/image";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
  // const footerLinks = [
  //   {
  //     category: "Get To Know",
  //     links: [
  //       { label: "Home", link: "/" },
  //       { label: "Contact", link: "/contact" },
  //       { label: "Blogs", link: "/blogs" },
  //       // { label: "FAQs", link: "" },
  //     ],
  //   },
  // ];

  return (
    <footer className="bg-gray-950 overflow-x-clip relative w-full !text-white pt-14 z-10">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 !text-white items-start justify-between px-6 md:px-10 xl:px-0">
        {/* Left Section */}
        <div className="w-full lg:w-[40%] flex flex-col items-start gap-8">
          <Image
            src={"/Logo.png"}
            width={50}
            height={50}
            alt="Infinity Logo"
            className="w-24 transition-transform duration-300 hover:scale-105"
          />
          <p className="text-white text-sm md:text-base leading-relaxed text-justify">
            Welcome to Infinity Mall & Residence – Where luxury meets
            convenience. Enjoy a premium lifestyle with top-class amenities like
            a swimming pool, courtyard terrace, fine dining, gaming zones, and
            cafes. Perfectly located on GT Road with easy access to the
            M1-Motorway, this is your ideal home for elegant and comfortable
            living.
          </p>
        </div>

        <div className="w-full lg:w-[20%] flex flex-col gap-5">
          <h4 className="text-white text-xl font-semibold tracking-wide w-fit pb-2">
            Instagram
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Link
                key={num}
                href="https://www.instagram.com/infinitymallislamabad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View Instagram Image ${num}`}
              >
                <Image
                  src={`/Footer/Instagram ${num}.jpg`}
                  alt={`Instagram Image ${num}`}
                  width={150}
                  height={100}
                  className="w-full h-20 object-cover rounded"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[35%] flex flex-col col-span-2 gap-5">
          <h4 className="text-white text-xl font-semibold tracking-wide w-fit pb-2">
            Newsletter
          </h4>
          <form className="flex flex-col gap-2">
            <div className="relative w-full">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="bg-transparent border-b border-gray-500 text-white placeholder:text-gray-400 focus:outline-none py-1 pr-8 w-full"
              />
              <MdOutlineArrowOutward className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
            </div>
          </form>
        </div>
      </div>
      <div className="border-b border-black mt-8"></div>
      <div className="flex flex-col md:flex-row gap-3 justify-between items-center max-w-[1280px] mx-auto  px-6 md:px-10 xl:px-0">
        <div className="border-t-2 border-black"></div>
        <div className="w-full text-white text-sm mt-6 py-5">
          © {new Date().getFullYear()} Infinity Mall. All rights reserved.
        </div>
        <div className="flex gap-4">
          <Link href="" target="_blank">
            <span className="group flex items-center justify-center w-10 h-10 bg-white rounded-full gradient-border-wrapper hover:bg-[#008B8B] transition-all duration-300">
              <FaLinkedinIn
                size={20}
                className="text-[#008B8B] group-hover:text-white"
              />
            </span>
          </Link>
          <Link href="" target="_blank">
            <span className="group flex items-center justify-center w-10 h-10 bg-white rounded-full gradient-border-wrapper hover:bg-[#008B8B] transition-all duration-300">
              <FaFacebookF
                size={20}
                className="text-[#008B8B] group-hover:text-white"
              />
            </span>
          </Link>
          <Link href="" target="_blank">
            <span className="group flex items-center justify-center w-10 h-10 bg-white rounded-full hover:bg-[#008B8B] transition-all duration-300">
              <FaInstagram
                size={20}
                className="text-[#008B8B] group-hover:text-white"
              />
            </span>
          </Link>
          <Link href="">
            <span className="group flex items-center justify-center w-10 h-10 bg-white rounded-full hover:bg-[#008B8B] transition-all duration-300">
              <FaXTwitter
                size={20}
                className="text-[#008B8B] group-hover:text-white"
              />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
