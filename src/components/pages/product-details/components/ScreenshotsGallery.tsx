"use client";

import Image from "next/image";

type Screenshot = {
  image: {
    url: string;
    // add other properties if needed
  };
};

const ScreenshotsGallery = ({ screenshots }: { screenshots: Screenshot[] }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {screenshots.map((shot, index) => (
          <Image
            key={index}
            src={shot.image.url}
            alt={`Screenshot ${index + 1}`}
            width={400}
            height={250}
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default ScreenshotsGallery;
