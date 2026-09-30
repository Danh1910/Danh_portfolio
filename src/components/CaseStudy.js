import React from "react";
import { Reveal } from "./ui/motion";

function Label({ children }) {
  return <p className="font-mono text-xs uppercase tracking-wider text-gray-500">{children}</p>;
}

// Case study: bối cảnh/vấn đề → đã làm gì → kết quả
function CaseStudy({ index, eyebrow, title, metric, problem, built, result, also, stack }) {
  return (
    <Reveal>
      <article className="grid gap-8 rounded-2xl border border-white/10 bg-surface p-6 transition-colors hover:border-accent-500/40 sm:p-8 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <p className="font-mono text-xs text-accent-300">
            {index} · {eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-bold text-white">{title}</h3>

          <div className="mt-6 rounded-xl border border-accent-500/30 bg-accent-500/10 p-5">
            <p className="text-2xl font-bold text-accent-200">{metric.value}</p>
            <p className="mt-1 text-sm text-gray-300">{metric.label}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span key={tech} className="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Label>Problem</Label>
            <p className="mt-2 leading-relaxed text-gray-300">{problem}</p>
          </div>

          <div>
            <Label>What I built</Label>
            <ul className="mt-2 space-y-2 text-gray-300">
              {built.map((item) => (
                <li key={item} className="flex gap-2 leading-relaxed">
                  <span className="text-accent-400" aria-hidden="true">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Label>Result</Label>
            <p className="mt-2 leading-relaxed text-white">{result}</p>
          </div>

          {also ? (
            <div className="rounded-lg border border-white/10 bg-darkbg/60 p-4">
              <Label>Also built</Label>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                <span className="font-semibold text-gray-200">{also.title}</span> — {also.text}
              </p>
            </div>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}

export default CaseStudy;
