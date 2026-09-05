import { useEffect, useRef, useState } from "react";

function useScrollDirection() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateDirection = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (Math.abs(delta) > 5) {
        if (currentScrollY > 80 && delta > 0) {
          setIsVisible(false); // bajando
        } else {
          setIsVisible(true); // subiendo o cerca del top
        }
        lastScrollY.current = currentScrollY;
      }

      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateDirection);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
}

export default useScrollDirection;