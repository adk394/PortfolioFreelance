import useScrollDirection from "../hooks/useScrollDirection";
import { useLanguage } from "../context/LanguageContext.jsx";
import { motion } from "framer-motion";

const Navbar = () => {
  const isVisible = useScrollDirection();
  const { lang, t, toggleLanguage } = useLanguage();

  return (
    <motion.nav
      className="font-stack-sans text-white px-4 text-[15px] items-center sticky top-5 z-[9998] flex flex-wrap gap-3 text-center bg-black/10 border shadow-2xl border-white/20 backdrop-blur-lg justify-center p-1 rounded-full"
      animate={{ y: isVisible ? 0 : -120 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <button
        type="button"
        onClick={toggleLanguage}
        aria-label={t.nav.switchTo}
        className="p-2 px-4 rounded-full hover:bg-primaryYellow-200 hover:text-black transition duration-200"
      >
        {lang.toUpperCase()}
      </button>
      <div className="bg-white w-0.5 h-4"></div>
      <a href="#projects" className="p-2 rounded-full hover:bg-primaryYellow-200 hover:text-black transition duration-200">
        <p>{t.nav.projects}</p>
      </a>
      <a href="#stack" className="p-2 rounded-full hover:bg-primaryYellow-200 hover:text-black transition duration-200">
        <p>{t.nav.stack}</p>
      </a>
      <a href="#aboutme" className="p-2 rounded-full hover:bg-primaryYellow-200 hover:text-black transition duration-200">
        <p>{t.nav.about}</p>
      </a>
      <a href="#footer" className="p-2 rounded-full hover:bg-primaryYellow-200 hover:text-black transition duration-200">
        <p>{t.nav.contact}</p>
      </a>
    </motion.nav>
  );
};

export default Navbar;