import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

// Thanh mỏng trên cùng, dài ra theo tiến độ cuộn trang
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-accent-600 to-accent-300"
    />
  );
}

export default ScrollProgress;
