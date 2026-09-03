import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../translations.js";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");
    return savedLanguage === "en" || savedLanguage === "es" ? savedLanguage : "es";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-language", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((currentLanguage) => (currentLanguage === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// The provider and its hook intentionally share this public context module.
// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider");
  }

  return context;
}
