import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import TypingText from "./TypingText";
import { CountUp, fadeUp } from "./ui/motion";

const TYPING_LINES = [
  "Full-stack Developer",
  "Backend & Automation Engineer",
  "PHP · MySQL · Python · JavaScript",
  "I build tools that kill manual work",
];

const STATS = [
  { to: 1, suffix: "+ yr", label: "experience" },
  { to: 1200, suffix: "+", label: "own commits" },
  { to: 100, suffix: "s", label: "pages & tables" },
  { to: 1, prefix: "~", suffix: " wk", label: "repo → prod" },
];

const PROFILE = [
  { key: "name", value: "Xuan Danh (Danh Tran)" },
  { key: "role", value: "Full-stack Developer — Backend & Automation" },
  { key: "based_in", value: "Ho Chi Minh City, Vietnam" },
  { key: "focus", value: "back offices · APIs · automation for POD" },
  { key: "stack", value: "[php, mysql, python, javascript]", raw: true },
  { key: "experience", value: "1+ yr", raw: true },
];

function Terminal() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-surface/90 shadow-2xl shadow-accent-900/30 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 font-mono text-xs text-gray-400">~/profile.yml</span>
        <span className="ml-auto font-mono text-xs text-gray-500">yaml</span>
      </div>
      <motion.div
        className="p-5 font-mono text-[13px] leading-7 sm:text-sm"
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } } }}
      >
        {PROFILE.map((line, i) => (
          <motion.div
            key={line.key}
            className="flex gap-4"
            variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } }}
          >
            <span className="w-4 shrink-0 select-none text-right text-gray-600">{i + 1}</span>
            <span className="min-w-0 break-words">
              <span className="text-accent-300">{line.key}</span>
              <span className="text-gray-500">: </span>
              <span className={line.raw ? "text-sky-300" : "text-emerald-300"}>
                {line.raw ? line.value : `"${line.value}"`}
              </span>
            </span>
          </motion.div>
        ))}
        <motion.div
          className="flex gap-4"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          <span className="w-4 shrink-0 select-none text-right text-gray-600">{PROFILE.length + 1}</span>
          <span className="text-gray-500">
            # I build tools that kill manual work
            <span className="caret text-accent-400" aria-hidden="true" />
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Hero() {
  const sectionRef = useRef(null);

  // Vệt sáng đi theo con trỏ chuột
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgb(var(--accent-rgb) / 0.12), transparent 70%)`;

  // Terminal trôi chậm hơn khi cuộn (parallax)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const terminalY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  function handleMouseMove(e) {
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28"
    >
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent-600/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto grid w-full items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-400" />
            Ho Chi Minh City, Vietnam
          </motion.p>

          <motion.h1 variants={fadeUp} className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
              Danh Tran
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-4 min-h-[1.75em] font-mono text-lg text-accent-300 sm:text-xl">
            <span className="text-gray-500">&gt; </span>
            <TypingText lines={TYPING_LINES} />
          </motion.p>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            1+ year building a <strong className="text-white">PHP / MySQL</strong> back office,{" "}
            <strong className="text-white">marketplace integrations</strong> and{" "}
            <strong className="text-white">automation</strong> for POD e-commerce — orders, designs,
            customization and fulfillment across several marketplaces.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-accent-500 px-5 py-3 font-semibold text-white shadow-lg shadow-accent-500/25 transition-colors hover:bg-accent-400"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition-colors hover:border-accent-400 hover:text-accent-300"
            >
              Contact me
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
                <p className="text-2xl font-bold text-accent-300">
                  <CountUp to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div style={{ y: terminalY }}>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Terminal />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
        <motion.a
          href="#information"
          aria-label="Scroll down"
          className="block text-gray-500 transition-colors hover:text-accent-300"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
