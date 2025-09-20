import React, { useState, useEffect } from "react";

function TypingText({ text, speed = 150 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="border-r-2 border-cyan-400 pr-1">{displayedText}</span>
  );
}

export default TypingText;
