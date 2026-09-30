import React from "react";
import Hero from "./Hero";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import StackSection from "./StackSection";
import ContactForm from "./Contact";


function Body() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <StackSection />
      <ContactForm />
    </main>
  );
}

export default Body;
