import React from "react";
import ProjectCard from "./ProjectCard";
import FeaturedProject from "./FeaturedProject";
import Section from "./ui/Section";
import { Reveal, Stagger, StaggerItem } from "./ui/motion";

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

const projects = [
{
  title: "POD Back Office",
  description: "Per-marketplace order screens, imports, supplier exports and a tracking audit. Rule-based designer assignment with design rules per SKU and KPI dashboards; decodes storefront personalization data so production gets the exact text & images; earnings from fulfillment webhooks plus order and advertising dashboards.",
  technologies: ["PHP", "MySQL", "jQuery", "Nginx", "Docker"],
},
{
  title: "APIs, Webhooks & CRON Scheduler",
  description: "Storefront and supplier integrations, fulfillment webhooks for status, tracking & fees. A database-driven CRON scheduler where each job runs in its own process for SLA, ship-by and tracking alerts. Buyer messages and email threads pulled into one internal inbox, plus internal APIs that extensions and tools call.",
  technologies: ["REST API", "Webhooks", "CRON", "Shopify GraphQL"],
},
{
  title: "Seller-Dashboard Chrome Extension",
  description: "Manifest V3 extension that syncs orders, fills tracking, pulls reports and runs queued jobs inside seller dashboards — only while the browser is idle.",
  technologies: ["JavaScript", "Chrome MV3", "Internal APIs"],
},
{
  title: "Design Rendering Pipeline",
  description: "Flask + Redis/RQ workers driving Photoshop & Illustrator: text swaps, face-aware crops, background removal and AI upscaling, with results delivered to Google Drive. Alongside it, Python bulk data-entry tools that turn an afternoon of product setup into a single run.",
  technologies: ["Python", "Flask", "Redis / RQ", "Photoshop scripting"],
},
];

function ProjectsSection() {
  return (
    <Section id="projects" index="03" title="Project">
      <FeaturedProject {...featuredProject} />

      <Stagger className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((proj) => (
          <StaggerItem key={proj.title} className="h-full">
            <ProjectCard
              title={proj.title}
              description={proj.description}
              technologies={proj.technologies}
              github={proj.github}
            />
          </StaggerItem>
        ))}
      </Stagger>

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
