import About from "@/components/variant-1/About";
import HeroSlider from "@/components/variant-1/HeroSlider";
import Amenities from "@/components/variant-1/Amenities";
import ApartmentDetails from "@/components/variant-1/ApartmentDetails";
import Blogs from "@/components/variant-1/Blogs";
import ContactCTA from "@/components/variant-1/ContactCTA";
import Footer from "@/components/variant-1/Footer";
import Header from "@/components/variant-1/Header";
import ImageGrid from "@/components/variant-1/ImageGrid";
import Neighborhood from "@/components/variant-1/Neighborhood";
import React from "react";
import LocationMap from "@/components/variant-1/Location";
import Partners from "@/components/variant-1/Partners";

const page = () => {
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
        <LocationMap />
        <Partners />
      </main>
      <Footer />
    </>
  );
};

export default page;
