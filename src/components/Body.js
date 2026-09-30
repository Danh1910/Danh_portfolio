import React from "react";
import Hero from "./Hero";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import MyInformationSection from "./MyInformationSection";
import ContactForm from "./Contact";


function Body() {
  return (
    <main>
      <Hero />
      <MyInformationSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactForm />
    </main>
  );
}

export default Body;
