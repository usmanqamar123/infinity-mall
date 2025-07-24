"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    "Home",
    "About Us",
    "News",
    "Our Projects",
    "Explore",
    "Blog",
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className={`fixed top-0 w-full z-40 px-10 py-6 transition-all duration-300  ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <nav
          className={`w-full max-w-[1440px] mx-auto hidden xl:flex  items-center justify-between  `}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/InfinityMallLogo.png"
              width={70}
              height={70}
              alt="Infinity Mall Logo"
            />
            <h2
              className={`text-2xl font-medium ${
                scrolled ? "text-[#4E342E]" : "text-white"
              }`}
            >
              Infinity Mall
            </h2>
          </div>

          <div className="flex gap-10">
            {navItems.map((item) => (
              <Link
                key={item}
                href="/"
                className={` ${
                  scrolled
                    ? "text-[#4E342E] hover:text-[#006994]"
                    : "text-white hover:underline hover:underline-offset-4"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="bg-gradient-to-r from-[#006994] to-[#008B8B] px-4 py-2 rounded-full text-white">
              Request a call
            </button>

            <div className="flex gap-3">
              {[FaFacebook, FaInstagram, FaYoutube, FaLinkedin].map(
                (Icon, idx) => (
                  <Icon
                    key={idx}
                    size={24}
                    className={`transition-colors duration-300 ${
                      scrolled ? "text-[#006994]" : "text-white"
                    } hover:text-[#008B8B]`}
                  />
                )
              )}
            </div>
          </div>
        </nav>
      </nav>

      {/* Mobile Nav (unchanged) */}
      <nav className="bg-white w-full fixed top-0 z-40 shadow-sm px-5 py-4 flex xl:hidden justify-between items-center">
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

      {/* Mobile Menu Overlay (unchanged) */}
      {isMobileMenuOpen && (
        <div className="fixed top-14 w-full md:w-60 h-full right-0 bg-white z-30 shadow-md px-5 py-10 xl:hidden flex flex-col gap-7 text-center">
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

          <button className="bg-gradient-to-r from-[#006994] to-[#008B8B] px-4 py-2 rounded-full text-white mx-auto">
            Request a call
          </button>

          <div className="flex justify-center gap-4 pt-7 border-t border-gray-200">
            {[FaFacebook, FaInstagram, FaYoutube, FaLinkedin].map(
              (Icon, idx) => (
                <Icon
                  key={idx}
                  size={24}
                  className="text-[#006994] hover:text-[#008B8B] transition-colors duration-300"
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
