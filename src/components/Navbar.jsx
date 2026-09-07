import useScrollDirection from "../hooks/useScrollDirection";
import { useLanguage } from "../context/LanguageContext.jsx";
import { motion } from "framer-motion";

const Navbar = () => {
  const isVisible = useScrollDirection();
  const { lang, t, toggleLanguage } = useLanguage();

  return (
    <motion.nav
      className="font-stack-sans text-white text-xs sm:text-sm md:text-base px-2 sm:px-4 items-center sticky top-3 sm:top-5 z-[9998] flex flex-nowrap whitespace-nowrap gap-1 sm:gap-3 text-center bg-black/10 border shadow-2xl border-white/20 backdrop-blur-lg justify-start p-1 rounded-full w-fit mx-auto max-w-[95vw] overflow-x-auto touch-pan-x [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      animate={{ y: isVisible ? 0 : -120 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <button
        type="button"
        onClick={toggleLanguage}
        aria-label={t.nav.switchTo}
        className="shrink-0 py-1.5 px-2 sm:p-2 sm:px-4 rounded-full hover:bg-primaryYellow-200 hover:text-black transition duration-200"
      >
        {lang.toUpperCase()}
      </button>
      <div className="shrink-0 bg-white w-0.5 h-4"></div>
      <a
        href="#projects"
        className="shrink-0 py-1.5 px-2 sm:p-2 sm:px-4 rounded-full hover:bg-primaryYellow-200 hover:text-black transition duration-200"
      >
        <span>{t.nav.projects}</span>
      </a>
      <a
        href="#stack"
        className="shrink-0 py-1.5 px-2 sm:p-2 sm:px-4 rounded-full hover:bg-primaryYellow-200 hover:text-black transition duration-200"
      >
        <span>{t.nav.stack}</span>
      </a>
      <a
        href="#aboutme"
        className="shrink-0 py-1.5 px-2 sm:p-2 sm:px-4 rounded-full hover:bg-primaryYellow-200 hover:text-black transition duration-200"
      >
        <span>{t.nav.about}</span>
      </a>
      <a
        href="#footer"
        className="shrink-0 py-1.5 px-2 sm:p-2 sm:px-4 rounded-full hover:bg-primaryYellow-200 hover:text-black transition duration-200"
      >
        <span>{t.nav.contact}</span>
      </a>
    </motion.nav>
  );
};

export default Navbar;