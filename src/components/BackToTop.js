import React, { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";

// Nút cuộn lên đầu trang, chỉ hiện khi đã cuộn gần tới cuối trang
function BackToTop() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setVisible(progress > 0.85);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          title="Back to top"
          // scroll-behavior: smooth trong index.css lo phần cuộn mượt (và tự tắt khi người xem bật giảm chuyển động)
          onClick={() => window.scrollTo({ top: 0 })}
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-accent-500 text-white shadow-lg shadow-accent-500/30 transition-colors hover:bg-accent-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 focus-visible:ring-offset-2 focus-visible:ring-offset-darkbg"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
