import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black/90 text-gray-400 text-center py-6 border-t border-cyan-400/20">
      <p>© {new Date().getFullYear()} Danh Trần. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
