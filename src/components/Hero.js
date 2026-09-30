import React from "react";
import { CV_URL, EMAIL, GITHUB, LINKEDIN } from "./links";

// Số liệu tác động, không phải số liệu "cho đẹp"
const IMPACT = [
  { value: "1–2h → 1 click", label: "sellers' daily customization work, automated" },
  { value: "~1 week", label: "empty repo → production, built solo" },
  { value: "190 tests", label: "plus PHPStan level 5 on a billing platform" },
  { value: "1+ yr", label: "shipping back offices & integrations for POD" },
];

const PROFILE = [
  { key: "name", value: "Xuan Danh (Danh Tran)" },
  { key: "role", value: "Full-stack Developer — Backend & Automation" },
  { key: "based_in", value: "Ho Chi Minh City, Vietnam" },
  { key: "focus", value: "back offices · APIs · automation for POD" },
  { key: "stack", value: "[php, laravel, mysql, python, javascript]", raw: true },
];

const SOCIALS = [
  { label: "GitHub", href: GITHUB, icon: "/icons/github.png" },
  { label: "LinkedIn", href: LINKEDIN, icon: "/icons/linkedin.svg" },
  { label: "Email", href: `mailto:${EMAIL}`, icon: "/icons/email.png" },
];

function Terminal() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-surface/90 shadow-2xl shadow-accent-900/30">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 font-mono text-xs text-gray-400">~/profile.yml</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-7 sm:text-sm">
        {PROFILE.map((line, i) => (
          <div
            key={line.key}
            className="flex gap-4"
          >
            <span className="w-4 shrink-0 select-none text-right text-gray-600">{i + 1}</span>
            <span className="min-w-0 break-words">
              <span className="text-accent-300">{line.key}</span>
              <span className="text-gray-500">: </span>
              <span className={line.raw ? "text-sky-300" : "text-emerald-300"}>
                {line.raw ? line.value : `"${line.value}"`}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="about" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent-600/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto grid w-full items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300">
            <span className="h-2 w-2 rounded-full bg-accent-400" />
            Ho Chi Minh City, Vietnam
          </p>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Danh Tran
          </h1>
          <p className="mt-3 font-mono text-lg text-accent-300 sm:text-xl">
            Full-stack Developer · Backend &amp; Automation
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            I build back offices, marketplace integrations and automation for POD e-commerce — in{" "}
            <strong className="font-semibold text-white">PHP / Laravel, MySQL, Python and JavaScript</strong>. I look
            for the manual, repeated task and turn it into a tool nobody has to think about again.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-lg bg-accent-500 px-5 py-3 font-semibold text-white shadow-lg shadow-accent-500/25 transition-colors hover:bg-accent-400"
            >
              View my work
            </a>
            {CV_URL ? (
              <a
                href={CV_URL}
                download
                className="rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition-colors hover:border-accent-400 hover:text-accent-300"
              >
                Download CV
              </a>
            ) : (
              <a
                href="#contact"
                className="rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition-colors hover:border-accent-400 hover:text-accent-300"
              >
                Get in touch
              </a>
            )}
            <div className="flex items-center gap-1 sm:ml-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="grid h-11 w-11 place-items-center rounded-lg transition-colors hover:bg-white/10"
                >
                  <img src={social.icon} alt="" className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Terminal />
        </div>
      </div>

      {/* Impact */}
      <div className="relative max-w-6xl mx-auto mt-16 grid grid-cols-1 gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {IMPACT.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
          >
            <p className="text-xl font-bold text-accent-300">{item.value}</p>
            <p className="mt-1 text-sm text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
