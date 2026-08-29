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
      className={` pointer-events-none fixed top-0 left-0 z-[9999] rounded-full transition-all duration-30 ${
        isPointer ? " isolate h-6 w-6 bg-black/50 " : "h-3 w-3 bg-black"

      }`}
    ></div>
  );
}

export default CustomCursor;
