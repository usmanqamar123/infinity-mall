import React from "react";
import Image from "next/image";
import Link from "next/link";

interface GridItem {
  id: number;
  image: string;
  text: string;
}

const gridItems: GridItem[] = [
  {
    id: 1,
    image: "/Home/ImageGrid/brand-1.png",
    text: "Cool & Chic Brands Live the Unusual",
  },
  {
    id: 2,
    image: "/Home/ImageGrid/brand-2.jpg",
    text: "Lifestyle at its Best",
  },
  {
    id: 3,
    image: "/Home/ImageGrid/brand-3.jpg",
    text: "Enticing Courtyard Terraces",
  },
  {
    id: 4,
    image: "/Home/ImageGrid/brand-4.png",
    text: "Ultra-modern Cinema",
  },
  {
    id: 5,
    image: "/Home/ImageGrid/brand-5.png",
    text: "Classy Restaurants",
  },
  {
    id: 6,
    image: "/Home/ImageGrid/brand-6.png",
    text: "Infinity Swimming Pools",
  },
];

const ImageGrid: React.FC = () => {
  return (
    <div className="bg-[#F5F5F5] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-4">
      {gridItems.map((item) => (
        <div
          key={item.id}
          className={`group overflow-hidden relative h-64 md:h-96 group `}
        >
          <Image
            src={item.image}
            alt={item.text}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            priority={item.id === 1}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-[#0699FF]/40 flex flex-col items-center justify-center">
            <h2 className="text-white text-xl md:text-[22px] !font-medium text-center">
              {item.text}
            </h2>
            <Link href={"#"}>
              <span className="text-white text-center text-xs hover:underline !font-medium uppercase">
                View More
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
