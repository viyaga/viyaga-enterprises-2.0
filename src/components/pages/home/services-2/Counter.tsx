import { useEffect, useRef, useState } from "react";
import { useMotionValue, animate } from "framer-motion";

interface CounterProps {
  from: number;
  to: number;
  text: string;
}

const Counter: React.FC<CounterProps> = ({ from, to, text }) => {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    count.set(from);
    const controls = animate(count, to, {
      duration: 4,
      ease: [0, 0.71, 0.2, 1.01],
      onUpdate: (latest) => {
        setDisplay(Math.floor(latest));
      },
    });

    return controls.stop;
  }, [from, to]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <h1 className="text-[48px] text-[#dd4c62]">{display}+</h1>
      <p className="text-[13px] w-[120px]">{text}</p>
    </div>
  );
};

export default Counter;
