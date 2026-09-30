import React from "react";
import { EMAIL, GITHUB, LINKEDIN } from "./links";

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      {/* sm:pr-20 chừa chỗ cho nút Back to top ở góc phải; từ xl lề ngoài đã đủ rộng */}
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-3 px-4 text-sm text-gray-500 sm:flex-row sm:px-6 sm:pr-20 xl:pr-6">
        <p>© {new Date().getFullYear()} Danh Trần</p>
        <nav className="flex gap-5">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent-300">
            GitHub
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent-300">
            LinkedIn
          </a>
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-accent-300">
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
