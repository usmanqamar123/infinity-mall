import Amenities from "@/components/variant-2/Amenities";
import ApartmentDetails from "@/components/variant-2/ApartmentDetails";
import { Carousel } from "@/components/variant-2/Carousel";
import Footer from "@/components/variant-2/Footer";
import Header from "@/components/variant-2/Header";
// import ComplexConstruction from "@/components/variant-2/ComplexConstruction";
import Hero from "@/components/variant-2/Hero";
import LocationMap from "@/components/variant-2/Location";
import ModernArchitecture from "@/components/variant-2/ModernArchitecture";
import NewsArticles from "@/components/variant-2/NewsArticles";
import Partners from "@/components/variant-2/Partners";
import React from "react";

const page = () => {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/variant-2/Carousel/01_IM_View 01_Final copy F.jpg",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "/variant-2/Carousel/02_IM_View 02_Final copy.jpg",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "/variant-2/Carousel/03_IM_View 03_Final copy.jpg",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "/variant-2/Carousel/04_IM_View 04_Final copy F.jpg",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "/variant-2/Carousel/05_IM_Aerial Full_Final New F.jpg",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "/variant-2/Carousel/08_IM_Atrium inside View 002 F_Final New copy.jpg",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "/variant-2/Carousel/Appartment cam 01.jpg",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "/variant-2/Carousel/Appartment cam 02.jpg",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "/variant-2/Carousel/Appartment cam 03.jpg",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "/variant-2/Carousel/Appartment cam 04.jpg",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "/variant-2/Carousel/Appartment cam 05.jpg",
    },
  ];

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <ModernArchitecture />
        {/* <ComplexConstruction /> */}
        <div className="relative overflow-hidden w-full h-full pb-20">
          <Carousel slides={slideData} />
        </div>
        <ApartmentDetails />
        <Amenities />
        <NewsArticles />
        <Partners />
        <LocationMap />
      </main>
      <Footer />
    </>
  );
};

export default page;
