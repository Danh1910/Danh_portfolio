import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Section from "./ui/Section";

const experiences = [
    {
    company: "POD E-commerce Company",
    position: "Full-stack Developer — Backend & Automation",
    time: "Aug 2025 - Present",
    description: [
        "Maintain and extend a large PHP/MySQL back office covering orders, customers, designs, product customization and fulfillment across several marketplaces.",
        "Built an auto-assignment pipeline that routes every new order to the right designer and reviewer every 30 minutes — replacing a manual task that took someone all day, 9 AM to 6 PM.",
        "Build marketplace & supplier integrations (REST APIs, Shopify GraphQL, fulfillment webhooks) and a database-driven CRON scheduler for SLA, ship-by and tracking alerts.",
        "Own the full slice: database design & stored procedures → business logic → admin dashboards and BI reporting (orders, earnings, advertising, designer KPIs).",
        "Automate repetitive work with a Chrome MV3 seller-dashboard extension that cut sellers' 1–2 hours of daily customization work down to one click, a Flask + Redis/RQ design rendering pipeline driving Photoshop & Illustrator, and Python bulk data-entry tools.",
        "Built a B2B website & monthly billing platform solo (Laravel, Filament) — from empty repo to live customers in about a week, with 190 tests and PHPStan level 5."
    ]
    },
    {
    company: "HDBank AMC",
    position: "Full-stack Developer (Internship)",
    time: "April 2025 - Aug 2025",
    description: [
        "Developed a fund certificate management system on the Odoo platform by customizing modules and integrating REST APIs using Python.",
        "Supported deployment, configuration, and enhancement of ERP features to meet data management and business process requirements.",
        "Contributed to an internal project on asset data processing, ensuring stable Odoo operation and effective integration with other applications."
    ]
    },
    {
    company: "HDBank AMC",
    position: "Data Analyst (Internship)",
    time: "Feb 2025 - April 2025",
    description: [
        "Assisted in collecting, cleaning, and processing real estate data using Python and Excel to support analysis and decision-making.",
        "Built scripts to compare raw data with percentage-based reference tables, optimizing data entry and reporting processes.",
        "Created data visualizations and supported business teams in analyzing trends and providing recommendations to improve efficiency."
    ]
    },

  // Thêm kinh nghiệm khác ở đây (mới nhất để trên cùng)
];

function ExperienceSection() {
  const listRef = useRef(null);

  // Đường timeline tự vẽ dài dần theo tiến độ cuộn qua danh sách
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <Section id="experience" index="02" title="Experience">
      <div ref={listRef} className="relative pl-12">
        {/* Timeline line */}
        <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-white/10" aria-hidden="true" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute bottom-0 left-4 top-0 w-0.5 origin-top bg-gradient-to-b from-accent-300 to-accent-600"
          aria-hidden="true"
        />

        <div className="space-y-10">
          {experiences.map((exp) => {
            const isCurrent = exp.time.includes("Present");
            return (
              <div key={`${exp.company}-${exp.time}`} className="relative">
                {/* Marker: sáng lên khi đường timeline chạy tới */}
                <span
                  className="absolute -left-[38px] top-7 grid h-3.5 w-3.5 place-items-center rounded-full border border-accent-500/60 bg-darkbg"
                  aria-hidden="true"
                >
                  <motion.span
                    className="h-2 w-2 rounded-full bg-accent-400 shadow-[0_0_12px_rgb(var(--accent-rgb)/0.9)]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "0px 0px -40% 0px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  />
                </span>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-xl border border-white/10 bg-surface p-6 transition-colors hover:border-accent-500/40"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                      <p className="mt-1 font-medium text-accent-300">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                          Now
                        </span>
                      )}
                      <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-gray-400">{exp.time}</span>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-gray-300">
                    {exp.description.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="text-accent-400" aria-hidden="true">›</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}


export default ExperienceSection;
