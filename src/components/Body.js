import React from "react";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";



function Body() {
  return (
    <main className="bg-black text-white">
      {/* About Section */}
      <section id="about" className="py-16 bg-darkbg text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Column */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Danh Tran</h1>
            <h2 className="text-2xl font-semibold mb-4">Fresher Web Developer</h2>
            <p className="text-gray-300 text-lg">
              With experience in <strong className="text-cyan-400">Java Spring Boot</strong> and <strong className="text-cyan-400">Python (Odoo)</strong> for backend development.  
              Also exploring <strong className="text-cyan-400">frontend development</strong> using <strong className="text-cyan-400">React</strong>, aiming to become a fullstack developer.
            </p>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 flex justify-center">
            <img
                src="/image_code.jpg"
                alt="Animated illustration"
                className="w-[400px] h-[400px] rounded-lg shadow-lg object-cover"
                />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />
      <ExperienceSection />


    </main>
  );
}

export default Body;
