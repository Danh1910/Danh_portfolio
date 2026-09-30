import React from "react";
import { motion } from "motion/react";
import { Reveal } from "./ui/motion";

const LIFECYCLE = ["Draft", "Sent", "Pending verification", "Paid"];

// Các bước hóa đơn sáng lần lượt khi cuộn tới
function InvoiceLifecycle() {
  return (
    <div className="mt-8">
      <p className="mb-4 font-mono text-xs text-gray-500">{"// invoice lifecycle"}</p>
      <motion.ol
        className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.3, delayChildren: 0.2 } } }}
      >
        {LIFECYCLE.map((step, i) => (
          <React.Fragment key={step}>
            {i > 0 && (
              <motion.li
                aria-hidden="true"
                className="mx-2 hidden h-px flex-1 origin-left bg-accent-400/70 sm:block"
                variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.3 } } }}
              />
            )}
            <motion.li
              className={`w-fit whitespace-nowrap rounded-full border px-3 py-1.5 text-sm ${
                i === LIFECYCLE.length - 1
                  ? "border-emerald-400/60 bg-emerald-400/10 text-emerald-300"
                  : "border-accent-400/50 bg-accent-500/10 text-accent-200"
              }`}
              variants={{ hidden: { opacity: 0.2, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
            >
              {step}
            </motion.li>
          </React.Fragment>
        ))}
      </motion.ol>
      <p className="mt-3 text-xs text-gray-500">
        Side states: <span className="text-red-300">Rejected</span> ·{" "}
        <span className="text-gray-300">Void</span> — always with a reason, never deleted.
      </p>
    </div>
  );
}

function FeaturedProject({ title, description, technologies, badge, highlights, points }) {
  return (
    <Reveal>
      <article className="relative overflow-hidden rounded-2xl border border-accent-500/30 bg-gradient-to-br from-accent-500/10 via-surface to-surface p-6 sm:p-8">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-accent-300">01 · Featured · Billing platform</span>
            {badge ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                {badge}
              </span>
            ) : null}
          </div>

          <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{title}</h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-gray-300">{description}</p>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-darkbg/60 p-3">
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className="mt-1 font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <ul className="mt-6 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="text-accent-400" aria-hidden="true">›</span>
                {point}
              </li>
            ))}
          </ul>

          <InvoiceLifecycle />

          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="rounded-md bg-accent-500/10 px-2 py-1 font-mono text-xs text-accent-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default FeaturedProject;
