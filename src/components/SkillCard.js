import React from "react";

function SkillCard({ icon, name, description }) {
  return (
    <div className="flex items-start gap-4 bg-[#1e1e1e] p-4 rounded-lg shadow-md hover:shadow-cyan-500/40 transition-shadow">
      {/* Hình ảnh/biểu tượng skill */}
      <div className="flex-shrink-0 w-1/6 md:w-2/12">
        <img src={icon} alt={name} className="w-full h-auto" />
      </div>

      {/* Nội dung skill */}
      <div className="w-5/6 md:w-10/12">
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">{name}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default SkillCard;
