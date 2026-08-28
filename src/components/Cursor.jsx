import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      // centrado + posición en el mismo transform, para no pisar nada
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const checkPointer = (e) => {
      const target = e.target;
      const isClickable =
        target.closest(
          "a, button, [role='button'], input, select, textarea, .cursor-pointer",
        ) !== null;
      setIsPointer(isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", checkPointer);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", checkPointer);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-white mix-blend-difference transition-[width,height,
        background-color] duration-20 ${
        isPointer ? "h-8 w-8" : "h-4 w-4"
      }`}

      
    ></div>
  );
}

export default CustomCursor;
