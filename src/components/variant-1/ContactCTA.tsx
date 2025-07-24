"use client";
import React, { useState } from "react";
import { CiPlay1 } from "react-icons/ci";
const ContactCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <section
        style={{ backgroundImage: "url('/Home/ContactCTA/CTA-Bg.jpg')" }}
        className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat bg-fixed flex flex-col items-center justify-center gap-8 lg:gap-16"
      >
        <div className="bg-[#1A1A1A]/50 absolute top-0 right-0 w-full h-full" />
        {/* Play Button */}
        <button
          type="button"
          onClick={toggleModal}
          className="relative z-10 bg-white/20 border border-white hover:bg-white/30 text-white p-7 rounded-full cursor-pointer"
        >
          <CiPlay1 size={50} className="text-white" />
        </button>
        <h2 className="relative z-10 text-3xl md:text-4xl 2xl:text-[42px] font-medium text-white text-center">
          Have a Contact Us? <br /> We are glad to consult you!
        </h2>

        {/* Schedule Button (Optional: can keep both) */}
        <button
          type="button"
          className="relative z-10 bg-gradient-to-r from-[#006994] to-[#008B8B] cursor-pointer px-10 py-3 text-white"
        >
          Schedule a Meeting
        </button>
      </section>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-black max-w-3xl w-full rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-white text-2xl z-50"
            >
              &times;
            </button>

            {/* Video */}
            <video className="w-full h-auto" controls autoPlay>
              <source src="/Home/ContactCTA/CTA-Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactCTA;
