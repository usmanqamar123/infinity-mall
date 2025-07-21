"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import About from "@/components/home/About";
import ImageGrid from "@/components/home/ImageGrid";
import ApartmentDetails from "@/components/home/ApartmentDetails";
import Amenities from "@/components/home/Amenities";
import Blogs from "@/components/home/Blogs";
import Neighborhood from "@/components/home/Neighborhood";
import ContactCTA from "@/components/home/ContactCTA";

export default function PageChild() {
  return (
    <>
      <Header />
      <main className="overflow-hidden w-full">
        <HeroSlider />
        <About />
        <ImageGrid />
        <ApartmentDetails />
        <Amenities />
        <ContactCTA />
        <Neighborhood />
        <Blogs />
      </main>
      <Footer />
    </>
  );
}
