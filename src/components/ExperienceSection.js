import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
    {
    company: "HDBank AMC",
    position: "Full-stack Developer (Internship)",
    time: "April 2023 - Aug 2023",
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

  
  // Thêm kinh nghiệm khác ở đây
];

function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-[#121212] text-white">
      <div className="container mx-auto relative">
        <h2 className="text-3xl font-bold mb-12 text-cyan-400">Experience</h2>
        
        {/* Timeline line */}
        <div className="absolute top-0 right-16 h-full w-1 bg-cyan-400/40"></div>

        {/* Now label bên phải timeline */}
        <div className="absolute top-0 right-0 text-cyan-400 font-bold text-sm text-xl">
        Now
        </div>


        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex">
              {/* Card */}
              <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg flex-1 hover:shadow-cyan-500/50 transition-shadow">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{exp.company}</h3>
                <h5 className="text-lg text-cyan-400 mb-2">{exp.position}</h5>
                <p className="text-gray-400 text-sm mt-1">{exp.time}</p> {/* Hiển thị thời gian */}
                <p className="text-gray-300 mt-2">
                  <ul className="list-disc list-inside space-y-1">
                    {exp.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </p>
              </div>

              {/* Marker */}
              <div className="absolute right-14 top-6 w-4 h-4 bg-cyan-400 rounded-full border-2 border-black">
                <span className="sr-only">{exp.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default ExperienceSection;
