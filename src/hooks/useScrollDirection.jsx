// useScrollDirection.js
import { useEffect, useRef, useState } from "react";

function useScrollDirection() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // evita que tiemble con micro-scrolls (trackpads, rebote en iOS)
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false); // scrolleando hacia abajo → esconder
      } else {
        setIsVisible(true); // scrolleando hacia arriba → mostrar
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
}

export default useScrollDirection;
