"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, StarHalf, NotebookText, Users } from "lucide-react";
import { motion } from "framer-motion";
import { courseData } from "@/constants/courses";

const Courses = () => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="text-yellow-500 text-xl" fill="currentColor" />
        ))}
        {halfStars > 0 && <StarHalf className="text-yellow-500 text-xl" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="text-gray-400 text-xl" />
        ))}
      </>
    );
  };

  return (
    <section id="courses">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="sm:flex justify-between items-center mb-20">
          <h2 className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-5 sm:mb-0">
            Popular courses.
          </h2>
          <Link
            href="/"
            className="text-primary text-lg font-medium hover:tracking-widest duration-500"
          >
            Explore courses&nbsp;&gt;&nbsp;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseData.map((items, i) => (
            <motion.div
              key={i}
              className="bg-white px-3 pt-3 pb-12 shadow-course-shadow rounded-2xl h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="relative rounded-3xl">
                <Image
                  src={`/images/${items.imgSrc}`}
                  alt="course-image"
                  width={389}
                  height={262}
                  className="m-auto clipPath"
                />
                <div className="absolute right-5 -bottom-2 bg-secondary rounded-full p-6">
                  <h3 className="text-white uppercase text-center text-sm font-medium">
                    best <br /> seller
                  </h3>
                </div>
              </div>

              <div className="px-3 pt-6">
                <Link
                  href="#"
                  className="text-2xl font-bold text-black max-w-75% inline-block"
                >
                  {items.heading}
                </Link>
                <h3 className="text-base font-normal pt-6 text-black/75">
                  {items.name}
                </h3>
                <div className="flex justify-between items-center py-6 border-b">
                  <div className="flex items-center gap-4">
                    <h3 className="text-red-700 text-2xl font-medium">{items.rating}</h3>
                    <div className="flex">{renderStars(items.rating)}</div>
                  </div>
                  <h3 className="text-3xl font-medium">${items.price}</h3>
                </div>
                <div className="flex justify-between pt-6">
                  <div className="flex gap-4 items-center">
                    <NotebookText className="text-primary text-xl" />
                    <h3 className="text-base font-medium text-black opacity-75">
                      {items.classes} classes
                    </h3>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Users className="text-primary text-xl" />
                    <h3 className="text-base font-medium text-black opacity-75">
                      {items.students} students
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;