import React from "react";
import { motion } from "motion/react";

const EASE_OUT = [0.22, 1, 0.36, 1];

// Phần tử "hiện" khi đã vào màn hình được 60px
const VIEWPORT = { once: true, margin: "0px 0px -60px 0px" };

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

// Mờ dần + trượt vào khi cuộn tới
export function Reveal({ children, className, delay = 0, x = 0, y = 16 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.45, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

// Các StaggerItem bên trong sẽ hiện lần lượt
export function Stagger({ children, className, stagger = 0.06 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
