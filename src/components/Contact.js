import React, { useState } from "react";
import Section from "./ui/Section";
import { Reveal, Stagger, StaggerItem } from "./ui/motion";
import { EMAIL, GITHUB, LINKEDIN } from "./links";

const CHANNELS = [
  {
    icon: "/icons/email.png",
    label: "Email",
    value: EMAIL,
    link: `mailto:${EMAIL}`,
  },
  {
    icon: "/icons/linkedin.svg",
    label: "LinkedIn",
    value: "Say hi on LinkedIn",
    link: LINKEDIN,
  },
  {
    icon: "/icons/github.png",
    label: "GitHub",
    value: "github.com/Danh1910",
    link: GITHUB,
  },
];

function ContactForm() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <Section id="contact" index="04" title="Contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-accent-500/30 bg-gradient-to-br from-accent-500/15 via-surface to-surface p-8 sm:p-12">
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative max-w-2xl">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">Have a project in mind? Let's talk.</h3>
            <p className="mt-4 leading-relaxed text-gray-300">
              Back offices, integrations, scheduled jobs, browser extensions or a customer portal taken all the way to
              production — drop me a line and I'll get back to you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-lg bg-accent-500 px-6 py-3 font-semibold text-white shadow-lg shadow-accent-500/25 transition-colors hover:bg-accent-400"
              >
                Send me an email
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:border-accent-400 hover:text-accent-300"
              >
                {copied ? "Copied ✓" : "Copy email"}
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      <Stagger className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {CHANNELS.map((channel) => (
          <StaggerItem key={channel.label}>
            <a
              href={channel.link}
              target={channel.link.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex h-full items-center gap-4 rounded-xl border border-white/10 bg-surface p-4 transition-colors hover:border-accent-500/50"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/5 transition-colors group-hover:bg-accent-500/20">
                <img src={channel.icon} alt="" className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wider text-gray-500">{channel.label}</span>
                <span className="block truncate text-gray-200 transition-colors group-hover:text-accent-300">
                  {channel.value}
                </span>
              </span>
              <span className="ml-auto text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-accent-300" aria-hidden="true">
                →
              </span>
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export default ContactForm;
