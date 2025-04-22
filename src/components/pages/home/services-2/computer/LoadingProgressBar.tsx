"use client";

import { Progress } from "@/components/ui/progress";

const LoadingProgressBar = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-50">
      <div className="w-1/2 space-y-4 text-center">
        <p className="text-lg text-black">Loading 3D Model...</p>
        <Progress value={60} className="w-full bg-white" />
      </div>
    </div>
  );
};

export default LoadingProgressBar;
