import React, { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

// Gõ lần lượt từng dòng, xóa đi rồi gõ dòng tiếp theo.
// `lines` nên khai báo ngoài component để không bị tạo lại mỗi lần render.
function TypingText({ lines, typeSpeed = 60, deleteSpeed = 30, pause = 1600 }) {
  const reduce = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const full = lines[lineIndex];

    if (deleting && text === "") {
      setDeleting(false);
      setLineIndex((i) => (i + 1) % lines.length);
      return;
    }

    const timeout =
      !deleting && text === full
        ? setTimeout(() => setDeleting(true), pause)
        : setTimeout(
            () => setText(full.slice(0, text.length + (deleting ? -1 : 1))),
            deleting ? deleteSpeed : typeSpeed
          );
    return () => clearTimeout(timeout);
  }, [text, deleting, lineIndex, lines, reduce, typeSpeed, deleteSpeed, pause]);

  if (reduce) return <span>{lines[0]}</span>;

  return (
    <span aria-label={lines.join(", ")}>
      <span aria-hidden="true">{text}</span>
      <span className="caret" aria-hidden="true" />
    </span>
  );
}

export default TypingText;
