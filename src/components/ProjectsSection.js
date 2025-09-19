import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
{
  title: "Personal Portfolio Website",
  description: "Developed a personal website to showcase profile, skills, and projects, built with modern frontend technologies for responsive design.",
  technologies: ["NodeJS","React", "Tailwind", "JavaScript"],
  github: "https://github.com/danhtran/portfolio"
},
{
  title: "ERP Module on Odoo",
  description: "Customized and integrated ERP modules for asset and fund certificate management, implementing REST APIs to ensure smooth data synchronization with external systems.",
  technologies: ["Python", "Odoo", "PostgreSQL", "REST API"],
},
{
  title: "Hospital Appointment Booking Application",
  description: "Designed and implemented a hospital appointment booking system with online scheduling, patient record management, and payment integration.",
  technologies: ["Java", "Spring Boot", "Bootstrap", "MySQL"],
  github: "https://github.com/duyKhanh026/HealthHub_J2EE"
},
{
  title: "Laptop Marketplace Mobile Application",
  description: "Built a mobile application for buying and selling laptops as a personal project, featuring product listing, authentication, and Firebase-based backend services.",
  technologies: ["Dart", "Flutter", "Firebase"],
  github: "https://github.com/Danh1910/laptop-store-personal-project" 
},


];

function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-[#121212] text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">Project</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              description={proj.description}
              technologies={proj.technologies}
              github={proj.github} // thêm prop github
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
