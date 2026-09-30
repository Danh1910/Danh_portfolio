import React from "react";
import Section from "./ui/Section";
import { Stagger, StaggerItem } from "./ui/motion";

// Cùng cách nhóm với README trên GitHub
const STACK = [
  { group: "backend", items: ["PHP", "Laravel", "Filament", "Python", "Flask"] },
  { group: "frontend", items: ["JavaScript", "jQuery", "Tailwind", "Bootstrap", "React", "HTML", "CSS"] },
  { group: "data & queues", items: ["MySQL", "Redis / RQ", "SQLite"] },
  { group: "integrations", items: ["REST APIs", "Webhooks", "Shopify GraphQL", "CRON", "Chrome MV3"] },
  { group: "devops", items: ["Docker", "Nginx", "Git", "GitHub", "GitLab", "Laravel Cloud"] },
  { group: "tools", items: ["Postman", "Photoshop", "Figma"] },
];

function StackSection() {
  return (
    <Section id="stack" index="03" title="Stack">
      <Stagger className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-surface">
        {STACK.map(({ group, items }) => (
          <StaggerItem key={group} className="grid gap-3 p-5 sm:grid-cols-[10rem_1fr] sm:items-center sm:px-6">
            <p className="font-mono text-sm text-accent-300">{group}</p>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item} className="rounded-md border border-white/10 px-2.5 py-1 text-sm text-gray-200">
                  {item}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export default StackSection;
