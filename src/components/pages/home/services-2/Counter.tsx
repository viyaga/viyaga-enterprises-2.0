import { useEffect, useRef, useState } from "react";
import { useMotionValue, animate } from "framer-motion";

interface CounterProps {
  from: number;
  to: number;
  symbol?: string;
  text: string;
  className?: string;        // add optional className
}

const Counter: React.FC<CounterProps> = ({
  from,
  to,
  symbol = "+",
  text,
  className = "",            // default to empty
}) => {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    count.set(from);
    const controls = animate(count, to, {
      duration: 4,
      ease: [0, 0.71, 0.2, 1.01],
      onUpdate(latest) {
        setDisplay(Math.floor(latest));
      },
    });
    return controls.stop;
  }, [from, to, count]);

  return (
    <div
      ref={ref}
      className={`
        flex flex-col items-start gap-1 bg-white/5 p-4 rounded-xl
        backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300
        ${className}
      `}
    >
      <h1 className="text-[56px] lg:text-[64px] font-extrabold text-pink-400 drop-shadow-lg">
        {display}
        {symbol}
      </h1>
      <p className="text-sm text-neutral-700 dark:text-white/80 font-medium">{text}</p>
    </div>
  );
};

export default Counter;