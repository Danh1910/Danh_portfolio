import React from "react";
import { TiltCard } from "./ui/motion";

function SkillCard({ icon, name, description }) {
  return (
    <TiltCard className="group h-full rounded-xl border border-white/10 bg-surface p-6 transition-colors hover:border-accent-500/50">
      {/* Hình ảnh/biểu tượng skill */}
      <img src={icon} alt="" className="h-12 w-12 rounded-lg transition-transform duration-300 group-hover:scale-110" />

      {/* Nội dung skill */}
      <h3 className="mt-5 text-lg font-semibold text-white transition-colors group-hover:text-accent-300">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
    </TiltCard>
  );
}

export default SkillCard;
