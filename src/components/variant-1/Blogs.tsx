import React from "react";
import Image from "next/image";

const blogs = [
  {
    id: 0,
    image: "/Home/Blogs/blog 1.png",
    title: "Blog",
    desc: "Infinity Mall & Residence: The Best Real Estate...",
  },
  {
    id: 1,
    image: "/Home/Blogs/blog 2.png",
    title: "Blog",
    desc: "Why Infinity Mall & Residence is the Ultimate....",
  },
  {
    id: 2,
    image: "/Home/Blogs/blog 3.png",
    title: "Blog",
    desc: "Elevate Your Space on a Budget: DIY Home Decor....",
  },
];
const Blogs: React.FC = () => {
  return (
    <section className="bg-white w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12  xl:py-32 gap-8 lg:gap-16 xl:gap-20">
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#006994] max-w-2xl text-center"
        data-aos="fade-up"
      >
        Read Our Blog
      </h2>
      <main className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col gap-8 outline-2 outline-[#008B8B]/25 rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer"
          >
            <div>
              <Image
                src={blog.image}
                alt="Blogs"
                width={400}
                height={250}
                className="w-full rounded object-cover"
              />
            </div>

            <div className="text-left space-y-4 p-4">
              <h3 className="text-base sm:text-lg lg:text-xl font-medium text-[#006994] ">
                {blog.title}
              </h3>

              <p className="text-black text-sm font-semibold md:text-base lg:text-xl leading-relaxed pr-10">
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
