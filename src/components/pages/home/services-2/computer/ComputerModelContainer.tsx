"use client";

import { Canvas } from "@react-three/fiber";
import { ComputerModel } from "./ComputerModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Suspense } from "react";

const ComputerModelContainer = () => {
  return (
    <Canvas>
      <Stage environment="night" intensity={0.5}>
        <Suspense fallback={null}>
          <ComputerModel />
        </Suspense>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
      <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
    </Canvas>
  );
};

export default ComputerModelContainer;
