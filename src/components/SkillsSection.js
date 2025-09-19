import React from "react";
import SkillCard from "./SkillCard";

const skills = [
  {
  icon: "/icons/java.png",
  name: "Java Spring Boot",
  description: "Backend development for web applications with Spring Boot."
},
{
  icon: "/icons/python.png",
  name: "Python (Odoo ERP)",
  description: "ERP module development and process automation with Odoo."
},
{
  icon: "/icons/react.png",
  name: "ReactJS / React Native / JavaScript / TypeScript",
  description: "Building interactive and responsive web and mobile interfaces with modern UI/UX standards."
},
{
  icon: "/icons/html.png",
  name: "HTML / CSS / Tailwind / Bootstrap",
  description: "Designing modern, user-friendly, and responsive interfaces."
},
{
  icon: "/icons/sql.png",
  name: "MySQL / PostgreSQL / MongoDB / Firebase",
  description: "Database design, management, and querying for applications."
},
{
  icon: "/icons/flutter.png",
  name: "Flutter / Dart",
  description: "Cross-platform mobile application development."
}

];

function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-[#121212] text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">Skill</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <SkillCard
              key={idx}
              icon={skill.icon}
              name={skill.name}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
