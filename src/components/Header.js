import React from "react";

function Header() {
  return (
    <header className="w-full bg-black/90 backdrop-blur-md text-white sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-cyan-400">Danh Tran</div>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#information" className="hover:text-cyan-400 transition-colors">Information</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skill</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Project</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
