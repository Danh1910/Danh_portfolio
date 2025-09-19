import React from "react";

function ExperienceCard({ company, position, time, description }) {
  return (
    <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg mb-6 hover:shadow-cyan-500/50 transition-shadow w-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-cyan-400">{company}</h3>
        <div className="text-gray-400 text-sm text-right">
          <p>{position}</p>
          <p>{time}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default ExperienceCard;
