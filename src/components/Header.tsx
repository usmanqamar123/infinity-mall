"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About Us",
    "News",
    "Our Projects",
    "Explore",
    "Blog",
  ];

  return (
    <>
      {/* Desktop Nav */}
      <nav className="bg-white w-full fixed top-0 z-40 shadow-md px-5 py-6 hidden xl:flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/InfinityMallLogo.png"
            width={70}
            height={70}
            alt="Infinity Mall Logo"
          />
          <h2 className="text-2xl font-medium text-[#4E342E]">Infinity Mall</h2>
        </div>

        <div className="flex gap-10">
          {navItems.map((item) => (
            <Link key={item} href="/" className="hover:text-[#B87333]">
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="bg-gradient-to-r from-[#D99464] to-[#B87333] px-4 py-2 rounded-full text-white">
            Request a call
          </button>

          <div className="flex gap-3">
            {[FaFacebook, FaInstagram, FaYoutube, FaLinkedin].map(
              (Icon, idx) => (
                <Icon
                  key={idx}
                  size={24}
                  className="text-[#B87333] hover:text-[#D99464] transition-colors duration-300"
                />
              )
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="bg-white w-full fixed top-0 z-40 shadow-md px-5 py-4 flex xl:hidden justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/InfinityMallLogo.png"
            width={50}
            height={50}
            alt="Infinity Mall Logo"
          />
          <h2 className="text-xl font-medium text-[#4E342E]">Infinity Mall</h2>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-[#B87333]"
        >
          {isMobileMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed top-20 left-0 w-full bg-white z-30 shadow-md px-5 py-6 lg:hidden flex flex-col gap-4 text-center">
          {navItems.map((item) => (
            <Link
              key={item}
              href="/"
              className="text-[#4E342E] hover:text-[#B87333]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          <button className="bg-gradient-to-r from-[#D99464] to-[#B87333] px-4 py-2 rounded-full text-white mx-auto">
            Request a call
          </button>

          <div className="flex justify-center gap-4 pt-4 border-t border-gray-200">
            {[FaFacebook, FaInstagram, FaYoutube, FaLinkedin].map(
              (Icon, idx) => (
                <Icon
                  key={idx}
                  size={24}
                  className="text-[#B87333] hover:text-[#D99464] transition-colors duration-300"
                />
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
