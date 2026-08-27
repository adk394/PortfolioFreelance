// CustomCursor.jsx
import { useEffect, useRef } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      // usamos transform en vez de top/left, es más fluido (no repinta layout)
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="transition-all duration-20 pointer-events-none fixed top-0 left-0 z-[9999] h-4 w-4 -translate-x-1/2 -translate-y-1/2  rounded-full bg-white mix-blend-difference"
    />
  );
}

export default CustomCursor;