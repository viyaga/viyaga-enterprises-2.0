"use client";

import { Canvas } from "@react-three/fiber";
import { ComputerModel } from "./ComputerModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const ComputerModelContainer = () => {
  return (
    <Canvas>
      <Stage environment="night" intensity={0.5}>
        <ComputerModel />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
      <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
    </Canvas>
  );
};

export default ComputerModelContainer;
