import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const labelRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);
  const [hoverText, setHoverText] = useState(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      // centrado + posición en el mismo transform, para no pisar nada
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;

      // el mensaje se pega arriba a la izquierda del cursor, con un pequeño margen
      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(calc(-100% - 5px), calc(-100% - 14px))`;
      }
    };

    const checkPointer = (e) => {
      const target = e.target;

      const isClickable =
        target.closest(
          "a, button, [role='button'], input, select, textarea, .cursor-pointer",
        ) !== null;
      setIsPointer(isClickable);

      // busca el elemento más cercano que tenga un mensaje personalizado
      const withText = target.closest("[data-cursor-text]");
      setHoverText(withText ? withText.dataset.cursorText : null);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", checkPointer);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", checkPointer);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full transition-all duration-10 ${
          hoverText
            ? "h-7 w-7 bg-gray-800/80"
            : isPointer
              ? "isolate h-6 w-6 bg-black/50"
              : "h-3 w-3 bg-black"
        }`}
      ></div>

      {hoverText && (
        <div
          ref={labelRef}
          className="pointer-events-none fixed top-0 left-0 z-[9999] whitespace-nowrap rounded-lg bg-gray-800/80 px-3 py-1.5 text-xs font-medium text-white shadow-lg"
        >
          {hoverText}
        </div>
      )}
    </>
  );
}

export default CustomCursor;