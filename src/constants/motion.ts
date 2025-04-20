export const navVariants = {
  hidden: {
    opacity: 0,
    y: -30,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 12,
      delay: 0.3,
    },
  },
};

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down', type: string, delay: number, duration: number) => ({
  hidden: {
    x: direction === 'left' ? '-50%' : direction === 'right' ? '50%' : 0,
    y: direction === 'up' ? '50%' : direction === 'down' ? '50%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const staggerContainer: any = (staggerChildren: any, delayChildren: any) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay: number) => ({
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.8,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: i * 0.07 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.6,
    },
  },
};

export const fadeIn = (
  direction: 'left' | 'right' | 'up' | 'down',
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
    y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const planetVariants = (direction: 'left' | 'right') => ({
  hidden: {
    x: direction === 'left' ? '-60%' : '60%',
    rotate: 80,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 1.2,
      delay: 0.4,
    },
  },
});

export const zoomIn = (delay: number, duration: number) => ({
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 12,
      delay: 0.3,
    },
  },
};
