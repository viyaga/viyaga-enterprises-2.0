"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type Screenshot = {
  image: {
    url: string;
  };
};

const ScreenshotsGallery = ({ screenshots }: { screenshots: Screenshot[] }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className=" text-black dark:text-white">
      <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">App Screenshots</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
          A glimpse into our UI. Click to enlarge.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {screenshots.map((shot, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl shadow-md aspect-[4/3] cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(shot.image.url)}
            >
              <Image
                src={shot.image.url}
                alt={`Screenshot ${index + 1}`}
                fill
                className="object-cover w-full h-full transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-5xl p-4"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image container
            >
              <Image
                src={selectedImage}
                alt="Enlarged Screenshot"
                width={1200}
                height={800}
                className="rounded-xl object-contain w-full h-auto mx-auto"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 px-3 py-1 rounded cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenshotsGallery;
