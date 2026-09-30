import React from "react";
import { motion } from "motion/react";
import { Reveal } from "./motion";

function SectionHeading({ index, title }) {
  return (
    <Reveal className="mb-12">
      <p className="font-mono text-sm text-accent-400">{index} /</p>
      <h2 className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h2>
      <motion.div
        className="mt-4 h-px origin-left bg-gradient-to-r from-accent-500 via-accent-500/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </Reveal>
  );
}

function Section({ id, index, title, children }) {
  return (
    <section id={id} className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading index={index} title={title} />
        {children}
      </div>
    </section>
  );
}

export default Section;
