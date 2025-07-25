import React from "react";
import Image from "next/image";

const blogs = [
  {
    id: 0,
    image: "/Home/Blogs/blog1.jpg",
    title: "Blog",
    desc: "Infinity Mall & Residence: The Best Real Estate...",
    date: "08",
    month: "May",
  },
  {
    id: 1,
    image: "/Home/Blogs/blog2.jpg",
    title: "Blog",
    desc: "Why Infinity Mall & Residence is the Ultimate....",
    date: "17",
    month: "June",
  },
  {
    id: 2,
    image: "/Home/Blogs/blog3.jpg",
    title: "Blog",
    desc: "Elevate Your Space on a Budget: DIY Home Decor....",
    date: "19",
    month: "July",
  },
];
const Blogs: React.FC = () => {
  return (
    <section className="bg-white w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12  xl:py-32 gap-8 lg:gap-16 xl:gap-20">
      <h2
        className="font-semibold text-3xl md:text-4xl 2xl:text-[42px] text-[#006994]"
        data-aos="fade-up"
      >
        Read Our Blog
      </h2>
      <main className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col gap-8 rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer"
          >
            <div className="relative">
              <Image
                src={blog.image}
                alt="Blogs"
                width={400}
                height={250}
                className="w-full rounded object-cover"
              />
              <div className="absolute right-10 -bottom-7 flex flex-col items-center justify-center gap-0 text-white bg-[#006994] p-2 px-4 rounded">
                <span className="text-base md:text-xl lg:text-2xl">
                  {blog.date}
                </span>
                <span className="text-xs lg:text-base -mt-1">{blog.month}</span>
              </div>
            </div>

            <div className="text-left space-y-4 p-4">
              <h3 className="text-sm md:text-base lg:text-lg font-medium text-[#006994] ">
                {blog.title}
              </h3>

              <p className="text-black text-base md:text-xl lg:text-2xl leading-relaxed pr-10">
                {blog.desc}
              </p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Blogs;
