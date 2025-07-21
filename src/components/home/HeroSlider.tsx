import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const backgrounds = [
  "/Home/HeroSlider/01_IM_View_01.jpg",
  "/Home/HeroSlider/02_IM_View_02.jpg",
  "/Home/HeroSlider/03_IM_View_03.jpg",
  "/Home/HeroSlider/04_IM_View_04.jpg",
  "/Home/HeroSlider/02_IM_View_02.jpg",
  "/Home/HeroSlider/03_IM_View_03.jpg",
];

const SLIDE_DURATION = 6000; // Time slide is visible (6 seconds)
const TRANSITION_DELAY = 1000; // Delay after slide change (1 second)

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"up" | "down" | "left">("up");
  const [isPaused, setIsPaused] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  // Function to reset and trigger text animation
  const triggerTextAnimation = useCallback(() => {
    if (textRef.current) {
      const textWrapper = textRef.current;
      textWrapper.querySelectorAll(".letter").forEach((letter) => {
        letter.classList.remove("animate-pop-in");
        void (letter as HTMLElement).offsetWidth; // Trigger reflow to restart animation
        letter.classList.add("animate-pop-in");
      });
    }
  }, []);

  // Wrap each letter in a span for animation
  useEffect(() => {
    if (textRef.current) {
      const textWrapper = textRef.current;
      textWrapper.innerHTML = textWrapper.textContent!.replace(
        /\S/g,
        "<span class='letter animate-pop-in'>$&</span>"
      );
      triggerTextAnimation(); // Initial animation
    }
  }, [triggerTextAnimation]);

  // Trigger text animation on slide change
  useEffect(() => {
    triggerTextAnimation();
  }, [currentSlide, triggerTextAnimation]);

  const nextSlide = useCallback(() => {
    setIsPaused(true); // Pause auto-scroll
    setCurrentSlide((prev) => {
      const next = (prev + 1) % backgrounds.length;
      if (next === 4) setDirection("down");
      else if (next === 5) setDirection("left");
      else setDirection("up");
      return next;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setIsPaused(true); // Pause auto-scroll
    setCurrentSlide((prev) => {
      const next = prev === 0 ? backgrounds.length - 1 : prev - 1;
      if (next === 4) setDirection("down");
      else if (next === 5) setDirection("left");
      else setDirection("up");
      return next;
    });
  }, []);

  // Auto-scroll with delay
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isPaused) {
      timer = setTimeout(nextSlide, SLIDE_DURATION);
    } else {
      timer = setTimeout(() => {
        setIsPaused(false); // Resume auto-scroll after delay
      }, TRANSITION_DELAY);
    }
    return () => clearTimeout(timer);
  }, [currentSlide, isPaused, nextSlide]);

  const getSlideVariants = () => {
    if (direction === "down") {
      return {
        initial: { y: "-100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "100%", opacity: 0 },
      };
    } else if (direction === "left") {
      return {
        initial: { x: "100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "-100%", opacity: 0 },
      };
    }
    return {
      initial: { y: "100%", opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: "-100%", opacity: 0 },
    };
  };

  return (
    <div className="relative w-full h-screen overflow-hidden group">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          variants={getSlideVariants()}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={backgrounds[currentSlide]}
            alt="Background"
            fill
            className="object-cover"
            // style={{
            //   filter:
            //     currentSlide < 4
            //       ? `brightness(${1 - currentSlide * 0.2})`
            //       : "none",
            // }}
            priority
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/70" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 xl:px-12">
        <Image
          src={"/InfinityMallLogo.png"}
          width={140}
          height={80}
          alt="Infinity Mall Logo"
          className="mb-14"
        />
        <h1 className="text-[#F5F5F5] text-3xl md:text-4xl lg:text-5xl 2xl:text-[55px] font-light text-center uppercase">
          INFINITY MALL & Residence
        </h1>
        <h2
          style={{
            fontFamily: "Roboto",
          }}
          className="ml6 text-[#F5F5F5] font-black text-2xl md:text-5xl lg:text-7xl 2xl:text-[99px] text-center"
        >
          <span className="text-wrapper">
            <span className="letters" ref={textRef}>
              Where luxury meets convenience
            </span>
          </span>
        </h2>
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8">
        <button
          onClick={prevSlide}
          className="text-black text-3xl md:text-4xl z-10 bg-white p-2 rounded-full hover:bg-white/70 -translate-x-[1000px] group-hover:translate-x-0 transition-transform duration-700"
          aria-label="Previous slide"
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="text-black text-3xl md:text-4xl z-10 bg-white p-2 rounded-full hover:bg-white/70 translate-x-[1000px] group-hover:translate-x-0 transition-transform duration-700"
          aria-label="Next slide"
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
