import { easeIn } from "framer-motion";

const easings = [0.6, -0.05, 0.01, 0.99];

export const fadeUpAnimate = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easings,
    },
  },
  exit: {
    y: 0,
    opacity: 0,
    scale: 0,
  },
};

const easings2 = [0.25, 1, 0.5, 1];

export const fadeOutRight = {
  hidden: {
    x: -30,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easings,
    },
  },
  exit: {
    x: 30,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: easings,
    },
  },
};

export const fadeInAnimate = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easeIn,
    },
  },
};

export const fadeLeftAnimate = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: "0%",
    transition: {
      duration: 0.3,
      ease: easings2,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
  exit: {
    x: "100%",
  },
};
