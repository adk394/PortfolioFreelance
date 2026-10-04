import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const labelRef = useRef(null);
  const frameRef = useRef(null);
  const pointerPositionRef = useRef({ x: 0, y: 0 });
  const hoverTargetRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);
  const [hoverText, setHoverText] = useState(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      pointerPositionRef.current = { x: e.clientX, y: e.clientY };
      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        const { x, y } = pointerPositionRef.current;
        cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

        if (labelRef.current) {
          labelRef.current.style.transform = `translate(${x}px, ${y}px) translate(calc(-100% - 5px), calc(-100% - 14px))`;
        }
        frameRef.current = null;
      });
    };

    const showCursorMessage = (e) => {
      const { message, target } = e.detail;
      if (message) {
        setHoverText(message);
      } else if (hoverTargetRef.current === target) {
        setHoverText(target.dataset.cursorText || null);
      }
    };

    const checkPointer = (e) => {
      const target = e.target;

      const isClickable =
        target.closest(
          "a, button, [role='button'], input, select, textarea, .cursor-pointer",
        ) !== null;
      setIsPointer(isClickable);

      const withText = target.closest("[data-cursor-text]");
      hoverTargetRef.current = withText;
      setHoverText(withText ? withText.dataset.cursorText : null);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", checkPointer);
    window.addEventListener("cursor-message", showCursorMessage);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", checkPointer);
      window.removeEventListener("cursor-message", showCursorMessage);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`pointer-events-none hidden md:block fixed top-0 left-0 z-9999 rounded-full transition-all duration-10 ${
          hoverText
            ? "h-7 w-7 bg-black/80"
            : isPointer
              ? "isolate h-6 w-6 bg-black/50"
              : "h-3 w-3 bg-black"
        }`}
      ></div>

      {hoverText && (
        <div
          ref={labelRef}
          className="pointer-events-none hidden md:block fixed top-0 left-0 z-9999 whitespace-nowrap rounded-lg bg-black px-3 py-1.5 text-xs font-medium text-white shadow-lg"
        >
          {hoverText}
        </div>
      )}
    </>
  );
}

export default CustomCursor;