import React from "react";
import { motion } from "motion/react";

function ProjectCard({ title, description, technologies, github }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex h-full flex-col justify-between rounded-xl border border-white/10 bg-surface p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent-500/50 hover:shadow-lg hover:shadow-accent-900/30"
    >
      <div>
        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-accent-300">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-md bg-accent-500/10 px-2 py-1 font-mono text-xs text-accent-300">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Link GitHub */}
      {github ? (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent-300 hover:text-accent-200"
        >
          View on GitHub <span aria-hidden="true">→</span>
        </a>
      ) : (
        <p className="mt-6 inline-flex items-center gap-2 text-sm text-gray-500">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          Private repository
        </p>
      )}
    </motion.article>
  );
}

export default ProjectCard;
