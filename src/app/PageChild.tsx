"use client";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PageChild() {
  return (
    <>
      <Header />
      <main className="overflow-hidden w-full"></main>
      <Footer />
    </>
  );
}
