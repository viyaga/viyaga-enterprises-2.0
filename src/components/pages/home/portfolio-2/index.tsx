"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

type ItemType = {
  id: number;
  img: string;
  title: string;
  desc: string;
  link: string;
};

const items: ItemType[] = [
  { id: 1, img: "/p1.jpg", title: "Full Stack Blog Application", desc: "Lorem ipsum...", link: "/" },
  { id: 2, img: "/p2.jpg", title: "School Management System", desc: "Lorem ipsum...", link: "/" },
  { id: 3, img: "/p3.jpg", title: "Real-time Chat Application", desc: "Lorem ipsum...", link: "/" },
  { id: 4, img: "/p4.jpg", title: "Social Media Project", desc: "Lorem ipsum...", link: "/" },
  { id: 5, img: "/p5.jpg", title: "Animated Portfolio Website", desc: "Lorem ipsum...", link: "/" },
];

const imgVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const textVariants = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
  },
};

type ListItemProps = {
  item: ItemType;
  index: number;
};

const ListItem: React.FC<ListItemProps> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const gradientBackgrounds: Record<number, string> = {
    2: "linear-gradient(to right, transparent, #260622)",
    3: "linear-gradient(to right, #260622, #02222e)",
    4: "linear-gradient(to right, #02222e, #12071f)",
    5: "linear-gradient(to right, #12071f, transparent)",
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="h-screen w-screen flex items-center justify-center px-4 gap-[100px] xl:gap-[50px] lg:flex-col"
      style={{ background: gradientBackgrounds[index] || undefined }}
    >
      <motion.div variants={imgVariants} className="w-[40%] rounded-2xl overflow-hidden lg:w-[80%]">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
      </motion.div>

      <motion.div variants={textVariants} className="w-[40%] flex flex-col gap-6 lg:w-[80%]">
        <motion.h1 variants={textVariants} className="text-[56px] xl:text-[48px] font-bold">
          {item.title}
        </motion.h1>
        <motion.p variants={textVariants} className="font-light">
          {item.desc}
        </motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button className="bg-pink-300 px-4 py-3 rounded-xl font-medium cursor-pointer">
            View Project
          </button>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [containerDistance, setContainerDistance] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * (items.length)]
  );

  return (
    <div className="relative h-[600vh] max-w-6xl mt-10" ref={ref}>
      <motion.div
        className="sticky top-0 flex h-screen w-max"
        style={{ x: xTranslate }}
      >
        <div
          className="shrink-0"
          style={{ width: (window.innerWidth/5) - containerDistance }}
        />
        {items.map((item, index) => (
          <ListItem item={item} index={index} key={item.id} />
        ))}
        <div
          className="shrink-0"
          style={{ width: window.innerWidth - containerDistance }}
        />
      </motion.div>

      {[...Array(5)].map((_, i) => (
        <section key={i} />
      ))}

      <div className="sticky left-0 bottom-[80%] w-[80px] h-[80px] max-md:w-[50px] max-md:h-[50px]">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
