"use client";

import Image from 'next/image';
import { CheckCircle, Search } from 'lucide-react';

const LearnHero = () => {
  return (
    <section id="home-section" className="bg-slateGray">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1 items-center">
          <div className="col-span-6 flex flex-col gap-8">
            <div className="flex gap-2 mx-auto lg:mx-0">
              <CheckCircle className="text-success text-xl inline-block me-2" />
              <p className="text-success text-sm font-semibold text-center lg:text-start">
                Get 30% off on first enroll
              </p>
            </div>
            <h1 className="text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0">
              Advance your engineering skills with us.
            </h1>
            <h3 className="text-black/70 text-lg pt-5 lg:pt-0">
              Build skills with our courses and mentor from world-class companies.
            </h3>
            <div className="relative rounded-full pt-5 lg:pt-0">
              <input
                type="email"
                name="q"
                className="py-6 lg:py-8 pl-8 pr-20 text-lg w-full text-black rounded-full focus:outline-none shadow-input-shadow"
                placeholder="search courses..."
                autoComplete="off"
              />
              <button className="bg-secondary p-5 rounded-full absolute right-2 top-2">
                <Search className="text-white text-4xl inline-block" />
              </button>
            </div>
            <div className="flex items-center justify-between pt-10 lg:pt-4">
              <div className="flex gap-2">
                <Image
                  src="/images/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">Flexible</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/images/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">Learning path</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/images/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">Community</p>
              </div>
            </div>
          </div>
          <div className="col-span-6 flex justify-center">
            <Image
              src="/images/banner/mahila.png"
              alt="hero image"
              width={1000}
              height={805}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnHero;