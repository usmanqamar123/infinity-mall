import ComplexConstruction from "@/components/variant-2/ComplexConstruction";
import Hero from "@/components/variant-2/Hero";
import ModernArchitecture from "@/components/variant-2/ModernArchitecture";
import React from "react";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ModernArchitecture />
      <ComplexConstruction />
    </div>
  );
};

export default page;
