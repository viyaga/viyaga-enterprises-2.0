"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import { TestimonialData } from "@/constants/learn-testimonials";

const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
        <>
            {[...Array(fullStars)].map((_, i) => (
                <Star key={`full-${i}`} className="text-yellow-500 w-5 h-5" fill="currentColor" />
            ))}
            {halfStars > 0 && <StarHalf className="text-yellow-500 w-5 h-5" />}
            {[...Array(emptyStars)].map((_, i) => (
                <Star key={`empty-${i}`} className="text-gray-300 w-5 h-5" />
            ))}
        </>
    );
};

const Testimonial = () => {
    return (
        <section id="testimonial">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TestimonialData.map((items, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className={`bg-white rounded-2xl p-5 mt-16 relative ${i % 2 ? 'shadow-testimonial-shadow2' : 'shadow-testimonial-shadow1'}`}
                        >
                            <div className="absolute -top-10 left-5">
                                <Image
                                    src={items.imgSrc}
                                    alt={items.name}
                                    width={100}
                                    height={100}
                                    className="rounded-full border"
                                />
                            </div>
                            <h4 className='text-base font-normal text-darkgray my-4'>{items.comment}</h4>
                            <div className="flex justify-between items-center pt-4">
                                <div>
                                    <h3 className='text-lg font-medium text-darkbrown'>{items.name}</h3>
                                    <h3 className='text-sm font-normal text-lightgray'>{items.profession}</h3>
                                </div>
                                <div className="flex gap-1">
                                    {renderStars(items.rating)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;