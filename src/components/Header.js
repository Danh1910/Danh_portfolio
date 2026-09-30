import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

function Header() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Section nào đang cắt ngang giữa màn hình thì sáng link đó
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled ? "border-white/10 bg-darkbg/80 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#about" className="shrink-0 font-mono text-lg font-bold text-white">
          <span className="text-accent-400">~/</span>danh
        </a>
        <nav className="no-scrollbar flex min-w-0 gap-1 overflow-x-auto text-sm">
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative whitespace-nowrap rounded-full px-3 py-1.5 transition-colors ${
                active === id ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {active === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full border border-accent-500/40 bg-accent-500/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
