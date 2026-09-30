import React from "react";
import CaseStudy from "./CaseStudy";
import FeaturedProject from "./FeaturedProject";
import Section from "./ui/Section";
import { Reveal } from "./ui/motion";

const featuredProject = {
  title: "B2B Website & Billing Platform",
  description: "A company website plus monthly client billing for a US-based e-commerce operations company — built solo, from an empty repo to live customers in about a week. Public website (VI / EN), customer portal with invoice history, and an admin panel for subscriptions — 3 surfaces, 1 codebase.",
  technologies: ["PHP 8.5", "Laravel 13", "Filament", "Tailwind v4", "Alpine.js", "MySQL 8.4", "Docker", "Laravel Cloud", "Resend"],
  badge: "Live in production",
  highlights: [
    { label: "role", value: "Solo dev" },
    { label: "repo → production", value: "~1 week" },
    { label: "tests", value: "190 passing" },
    { label: "static analysis", value: "PHPStan L5" },
  ],
  points: [
    "Issued invoices are locked; every status change recorded",
    "PDF invoices emailed via Resend from an idempotent queue",
    "Per-customer data isolation, click-wrap ToS with time & IP",
    "Login throttling, activity & email logs",
    "Isolated demo & prod databases, branch-based auto-deploys",
    "Custom domain with SPF / DKIM, runbooks & code-reading guide",
  ],
};

const caseStudies = [
{
  index: "02",
  eyebrow: "Back office · Integrations",
  title: "POD Back Office & Integrations",
  metric: { value: "~9h/day → 0", label: "of manual designer assignment — hundreds of orders a day, more in peak season" },
  problem: "A POD business selling on several marketplaces runs orders, designs, product customization and fulfillment from one back office. Every new order had to be assigned to a designer by hand — a job that took someone from 9 AM to 6 PM, every day, across hundreds of daily orders and even more in peak season.",
  built: [
    "An auto-assignment pipeline that runs every 30 minutes: routes new orders, picks the designer and the reviewer, fetches the design link and kicks off auto-design test renders — each step with its own on/off switch and in-app notifications.",
    "Rule-based design rules per SKU, plus KPI and % auto vs. manual dashboards for the design team.",
    "Per-marketplace order screens, imports, supplier exports and a tracking audit; decoding of storefront personalization data so production gets the exact text & images.",
    "Marketplace & supplier integrations — storefront APIs, Shopify GraphQL, fulfillment webhooks for status, tracking & fees.",
    "A database-driven CRON scheduler with its own admin page — no more SSH-ing into the server to edit crontab — powering SLA, ship-by and tracking alerts.",
  ],
  result: "Manual designer assignment is gone: the all-day 9 AM–6 PM task now runs on its own and keeps up when peak-season volume spikes, while SLA, ship-by and tracking issues surface as alerts.",
  stack: ["PHP", "MySQL", "jQuery", "REST API", "Webhooks", "CRON", "Shopify GraphQL", "Nginx", "Docker"],
},
{
  index: "03",
  eyebrow: "Automation",
  title: "Seller-Dashboard Automation",
  metric: { value: "1–2h → 1 click", label: "sellers' daily customization work" },
  problem: "Sellers spent 1–2 hours every day on repetitive customization work inside marketplace seller dashboards.",
  built: [
    "A Chrome Manifest V3 extension that works inside seller dashboards: syncs orders, fills tracking, pulls reports and runs queued jobs.",
    "Jobs run only while the browser is idle, so the extension never gets in the seller's way.",
    "Internal APIs on the back office that the extension calls to keep orders, tracking and reports in sync.",
  ],
  result: "The 1–2 hours of daily customization work now takes a single click.",
  also: {
    title: "Design rendering pipeline",
    text: "Flask + Redis/RQ workers driving Photoshop & Illustrator — text swaps, face-aware crops, background removal and AI upscaling, delivered to Google Drive. Plus Python bulk data-entry tools that turn an afternoon of product setup into a single run.",
  },
  stack: ["JavaScript", "Chrome MV3", "Internal APIs", "Python", "Flask", "Redis / RQ", "Photoshop scripting"],
},
];

function ProjectsSection() {
  return (
    <Section id="work" index="01" title="Selected Work">
      <div className="space-y-6">
        <FeaturedProject {...featuredProject} />
        {caseStudies.map((study) => (
          <CaseStudy key={study.title} {...study} />
        ))}
      </div>

      <Reveal>
        <p className="mt-8 text-sm text-gray-500">
          Most of my work lives in private company repositories, so these are summaries rather than code archives.
          Happy to walk through the details in a conversation.
        </p>
      </Reveal>
    </Section>
  );
}

export default ProjectsSection;
