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
        className={`fixed top-0 w-full z-40 px-10 transition-all duration-300 ${
          scrolled
            ? "bg-gray-950 shadow-md border-b border-gray-100/20 "
            : "bg-transparent"
        }`}
      >
        <nav
          className={`w-full max-w-[1440px] mx-auto hidden xl:flex  items-center justify-between  `}
        >
          <div className="flex items-center gap-3 py-6">
            <Image
              src="/InfinityMallLogo.png"
              width={70}
              height={70}
              alt="Infinity Mall Logo"
            />
            <h2
              className={`text-2xl font-medium ${
                scrolled ? "text-white" : "text-white"
              }`}
            >
              Infinity Mall
            </h2>
          </div>

          <div className="flex">
            {navItems.map((item) => (
              <Link
                key={item}
                href="/"
                className={` py-6 px-5 ${
                  scrolled
                    ? " hover:bg-[#008B8B] text-white"
                    : " hover:bg-[#008B8B] text-white"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="cursor-pointer bg-[#008B8B] px-4 py-2 rounded-full text-white">
              Request a call
            </button>

            <div className="flex gap-3">
              {[FaFacebook, FaInstagram, FaYoutube, FaLinkedin].map(
                (Icon, idx) => (
                  <Icon
                    key={idx}
                    size={24}
                    className={`transition-colors duration-300 cursor-pointer ${
                      scrolled
                        ? "text-white"
                        : "text-white hover:text-[#008B8B]"
                    } `}
                  />
                )
              )}
            </div>
          </div>
        </nav>
      </nav>

      {/* Mobile Nav (unchanged) */}
      <nav className="bg-gray-950 border-b border-white/15 w-full fixed top-0 z-40 shadow-md px-5 py-4 flex xl:hidden justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/InfinityMallLogo.png"
            width={50}
            height={50}
            alt="Infinity Mall Logo"
          />
          <h2 className="text-xl font-medium text-white">Infinity Mall</h2>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white"
        >
          {isMobileMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay (unchanged) */}
      {isMobileMenuOpen && (
        <div className="fixed h-full top-14 left-0 w-full bg-gray-950 z-30 shadow-md px-5 py-6 pt-10 lg:hidden flex flex-col gap-4 text-center">
          {navItems.map((item) => (
            <Link
              key={item}
              href="/"
              className="text-white hover:text-[#B87333]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          <button className="bg-[#008B8B] px-4 py-2 mt-6 rounded-full text-white mx-auto">
            Request a call
          </button>

          <div className="flex justify-center gap-4 mt-6 pt-10 border-t border-gray-200">
            {[FaFacebook, FaInstagram, FaYoutube, FaLinkedin].map(
              (Icon, idx) => (
                <Icon
                  key={idx}
                  size={24}
                  className="text-[#008B8B]  transition-colors duration-300"
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
