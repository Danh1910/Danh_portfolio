import React from "react";

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-3 px-4 text-sm text-gray-500 sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} Danh Trần. All rights reserved.</p>
        <p className="font-mono">
          <span className="text-accent-400">&gt;</span> I build tools that kill manual work
        </p>
      </div>
    </footer>
  );
}

export default Footer;
