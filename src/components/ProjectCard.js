import React from "react";

function ProjectCard({ title, description, technologies, github }) {
  return (
    <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-shadow flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold mb-2 text-cyan-400">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded text-sm"
            >
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
          className="inline-block mt-2 text-cyan-400 hover:underline"
        >
          View on GitHub
        </a>
      ) : null}
    </div>
  );
}

export default ProjectCard;
