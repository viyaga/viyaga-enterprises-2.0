"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MentorData } from "@/constants/mentors";

const Mentor = () => {
    return (
        <section className="bg-deepSlate" id="mentor">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative'>
                <h2 className="text-midnight_text text-5xl font-semibold">Meet with our <br /> mentor.</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {MentorData.map((items, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className='py-14 md:my-10 text-center'
                        >
                            <div className="relative inline-block">
                                <Image
                                    src={items.imgSrc}
                                    alt="user-image"
                                    width={306}
                                    height={0}
                                    className="m-auto"
                                />
                                <div className="absolute right-[84px] bottom-[102px] bg-white rounded-full p-4">
                                    <Image src="/images/mentor/linkedin.svg" alt="linkedin-image" width={25} height={24} />
                                </div>
                            </div>
                            <div className="-mt-10">
                                <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                <h4 className='text-lg font-normal text-lightblack pt-2 opacity-50'>{items.profession}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mentor;