import React, { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

const EASE_OUT = [0.22, 1, 0.36, 1];

// Phần tử chỉ "hiện" khi đã vào màn hình được 80px
const VIEWPORT = { once: true, margin: "0px 0px -80px 0px" };

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

// Mờ dần + trượt vào khi cuộn tới
export function Reveal({ children, className, delay = 0, x = 0, y = 24 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.6, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

// Các StaggerItem bên trong sẽ hiện lần lượt
export function Stagger({ children, className, stagger = 0.08 }) {
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

// Thẻ nghiêng 3D nhẹ theo vị trí chuột; dùng được như một StaggerItem
export function TiltCard({ children, className, max = 6 }) {
  const reduce = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  function handleMouseMove(e) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * max * 2);
    rotateX.set(-py * max * 2);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

// Số tự đếm từ 0 lên khi cuộn tới
export function CountUp({ to, prefix = "", suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    const format = (value) => `${prefix}${Math.round(value).toLocaleString("en-US")}${suffix}`;
    if (reduce) {
      ref.current.textContent = format(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (value) => {
        if (ref.current) ref.current.textContent = format(value);
      },
    });
    return () => controls.stop();
  }, [inView, reduce, to, prefix, suffix, duration]);

  return <span ref={ref}>{`${prefix}0${suffix}`}</span>;
}
