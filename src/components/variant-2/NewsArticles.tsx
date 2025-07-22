import React from "react";
import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const blogs = [
  {
    id: 0,
    date: "March 15, 2024",
    image: "/Home/Blogs/blog1.jpg",
    title: "10 tips for a productive apartment hunting",
    desc: "A very interesting, yet a bit terrifying information about real estate tricks",
  },
  {
    id: 1,
    date: "March 20, 2024",
    image: "/Home/Blogs/blog2.jpg",
    title: "Try living on top of a skyscraper in downtown",
    desc: "A new theory on how to survive in concrete jungle by renting a nice place",
  },
  {
    id: 2,
    date: "March 25, 2024",
    image: "/Home/Blogs/blog3.jpg",
    title: "Luxe apartment complex projects in 2025",
    desc: "What we can do to upgrade the situation with ecology in big complexes",
  },
];
const NewsArticles: React.FC = () => {
  return (
    <section className="bg-white w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-28 gap-8 lg:gap-16 xl:gap-20">
      {/* Title */}
      <div className="text-center space-y-2">
        <p className="text-[#008B8B] text-xl italic font-normal">
          Read Our Blog
        </p>
        <h2 className="text-3xl md:text-4xl 2xl:text-[42px] text-gray-950 uppercase">
          Latest News & Articles
        </h2>
      </div>
      <main className="w-full max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group flex flex-col gap-8 shadow-lg rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer"
          >
            <div>
              <Image
                src={blog.image}
                alt="Blogs"
                width={400}
                height={450}
                className="w-full h-[300px] rounded object-cover"
              />
            </div>

            <div className="text-left space-y-4 p-6">
              <p className="text-[#6b6e71] font-normal text-sm leading-relaxed pr-10 line-clamp-2 text-justify">
                <span className="uppercase text-black pr-4 font-medium">
                  Blog
                </span>
                {blog.date}
              </p>

              <h3 className="text-base sm:text-lg lg:text-xl font-medum uppercase">
                {blog.title}
              </h3>

              <p className="text-[#6b6e71] text-sm !font-normal leading-relaxed pr-10 line-clamp-2 text-justify">
                {blog.desc}
              </p>

              <button className="group-hover:text-[#008B8B] w-fit flex items-center justify-start">
                Read More
                <MdOutlineArrowRightAlt />
              </button>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default NewsArticles;
