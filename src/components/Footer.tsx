import Image from "next/image";
import React, { useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
  const footerLinks = [
    {
      category: "Get To Know",
      links: [
        { label: "Home", link: "/" },
        { label: "Contact", link: "/contact" },
        { label: "Blogs", link: "/blogs" },
        { label: "FAQs", link: "" },
      ],
    },
  ];

  return (
    <footer className="bg-[#f1efec] overflow-x-clip relative w-full !text-black pt-10 z-10">
      <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 !text-black items-start justify-between px-6 md:px-10 xl:px-0">
        {/* Left Section */}
        <div className="w-full lg:w-[40%] flex flex-col items-start gap-8">
          <Image
            src={"/Logo.png"}
            width={200}
            height={70}
            alt="Infinity Logo"
            className="w-30 md:w-40 transition-transform duration-300 hover:scale-105"
          />
          <p className="!text-black text-sm md:text-base leading-relaxed text-justify">
            Welcome to Infinity Mall & Residence – Where luxury meets
            convenience. Enjoy a premium lifestyle with top-class amenities like
            a swimming pool, courtyard terrace, fine dining, gaming zones, and
            cafes. Perfectly located on GT Road with easy access to the
            M1-Motorway, this is your ideal home for elegant and comfortable
            living.
          </p>
        </div>

        <div className="w-full lg:w-[60%] flex justify-start lg:justify-end !text-black">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 max-w-2xl">
            {footerLinks.map((item, index) => (
              <div key={index} className="flex flex-col gap-5">
                <h4 className="!text-black text-xl font-semibold tracking-wide w-fit pb-2">
                  {item.category}
                </h4>
                <ul className="flex flex-col gap-2">
                  {item.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.link}>
                        <span className="text-black text-sm hover:text-[#B87333] hover:translate-x-1 transition-all duration-300">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col gap-5">
              <h4 className="text-black text-xl font-semibold tracking-wide w-fit pb-2">
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

            <div className="flex flex-col gap-5">
              <h4 className="text-black text-xl font-semibold tracking-wide w-fit pb-2">
                Newsletter
              </h4>
              <form className="flex flex-col gap-2">
                <div className="relative w-full">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="bg-transparent border-b border-gray-500 text-black placeholder:text-gray-400 focus:outline-none py-1 pr-8 w-full"
                  />
                  <MdOutlineArrowOutward className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-black mt-8"></div>
      <div className="flex flex-col md:flex-row gap-3 justify-between items-center max-w-6xl mx-auto">
        <div className="border-t-2 border-black"></div>
        <div className="w-full text-black text-sm mt-6 py-5">
          © {new Date().getFullYear()} Infinity Mall. All rights reserved.
        </div>
        <div className="flex gap-4">
          <Link href="" target="_blank">
            <span className="group flex items-center justify-center w-10 h-10 bg-[#B87333] rounded-full gradient-border-wrapper hover:bg-[#B87333]/20 transition-all duration-300">
              <FaLinkedinIn
                size={20}
                className="text-gray-300 group-hover:text-white"
              />
            </span>
          </Link>
          <Link href="" target="_blank">
            <span className="group flex items-center justify-center w-10 h-10 bg-[#B87333] rounded-full gradient-border-wrapper hover:bg-[#B87333]/20 transition-all duration-300">
              <FaFacebookF
                size={20}
                className="text-gray-300 group-hover:text-white"
              />
            </span>
          </Link>
          <Link href="" target="_blank">
            <span className="group flex items-center justify-center w-10 h-10 bg-[#B87333] rounded-full hover:bg-[#B87333]/20 transition-all duration-300">
              <FaInstagram
                size={20}
                className="text-gray-300 group-hover:text-white"
              />
            </span>
          </Link>
          <Link href="">
            <span className="group flex items-center justify-center w-10 h-10 bg-[#B87333] rounded-full  hover:bg-[#B87333]/20 transition-all duration-300">
              <FaXTwitter
                size={20}
                className="text-gray-300 group-hover:text-white"
              />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
