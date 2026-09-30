import React from "react";
import SkillCard from "./SkillCard";
import Section from "./ui/Section";
import { Stagger } from "./ui/motion";

const skills = [
  {
    icon: "/icons/php.svg",
    name: "PHP / Laravel / Filament",
    description: "Large back offices and admin panels: orders, customers, designs, fulfillment, billing and role-based access."
  },
  {
    icon: "/icons/mysql.svg",
    name: "MySQL / Redis / SQLite",
    description: "Database design, stored procedures, query performance tuning and BI reporting."
  },
  {
    icon: "/icons/postman.svg",
    name: "REST API / Webhooks / CRON",
    description: "Marketplace & supplier integrations, Shopify GraphQL, fulfillment webhooks and a database-driven job scheduler."
  },
  {
    icon: "/icons/python.svg",
    name: "Python / Flask / Redis RQ",
    description: "Automation pipelines and tooling: design rendering with Photoshop scripting, bulk data entry, background jobs."
  },
  {
    icon: "/icons/js.svg",
    name: "JavaScript / jQuery / Chrome MV3 / React",
    description: "Interactive admin UIs and browser extensions that sync orders, fill tracking and pull reports inside seller dashboards."
  },
  {
    icon: "/icons/docker.svg",
    name: "Docker / Nginx / Git / Laravel Cloud",
    description: "Containerized environments, branch-based auto-deploys, custom domains and SPF / DKIM email setup."
  }
];

function SkillsSection() {
  return (
    <Section id="skills" index="02" title="Skill">
      <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
            description={skill.description}
          />
        ))}
      </Stagger>
    </Section>
  );
}

export default SkillsSection;
