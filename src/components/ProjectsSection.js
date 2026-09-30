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
{
  index: "03",
  eyebrow: "Back office · Integrations",
  title: "POD Back Office & Integrations",
  metric: { value: "100s", label: "pages & tables maintained and extended" },
  problem: "A POD business selling on several marketplaces needs orders, customers, designs, product customization and fulfillment in one place — with the right tools for each team.",
  built: [
    "Per-marketplace order screens, imports, supplier exports and a tracking audit.",
    "Rule-based designer assignment with design rules per SKU and KPI dashboards for the design team.",
    "Decoding of storefront personalization data so production gets the exact text & images.",
    "Marketplace & supplier integrations — storefront APIs, Shopify GraphQL, fulfillment webhooks for status, tracking & fees.",
    "A database-driven CRON scheduler, each job in its own process, for SLA, ship-by and tracking alerts; buyer messages and email threads pulled into one internal inbox.",
  ],
  result: "Orders, tracking and designs stay in sync across marketplaces and suppliers, and SLA, ship-by and tracking issues surface as alerts.",
  stack: ["PHP", "MySQL", "jQuery", "REST API", "Webhooks", "CRON", "Shopify GraphQL", "Nginx", "Docker"],
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
