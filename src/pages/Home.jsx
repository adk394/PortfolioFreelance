import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Main from "../components/Main.jsx";
import Footer from "../components/Footer.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Stack from "../components/Stack/Stack.jsx";
import Projects from "../components/Projects.jsx";
import Divider from "../components/Divider.jsx";
import CustomCursor from "../components/Cursor.jsx";
import Reveal from "../components/Reveal.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative justify-center items-center flex flex-col  ">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-index:100, focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >{t.accessibility.skipToContent}</a>
      <CustomCursor />
      <div className="absolute inset-0 bg-[url('/other/mesh-5.png')] bg-[length:100%_100%] bg-center bg-no-repeat opacity-80 -z-10" />
      <Navbar />
      <main className="flex flex-col items-center justify-center pt-10 gap-y-25">
        <section
          id="main"
          aria-labelledby="intro-title"
          className="flex w-full justify-center scroll-mt-25"
        >
          <Main />{" "}
        </section>

        <Divider />
        <section
          id="projects"
          aria-labelledby="projects-title"
          className="flex w-full justify-center scroll-mt-25"
        >
          <Reveal >
            <Projects />
          </Reveal>
        </section>

        <section
          id="stack"
          aria-labelledby="stack-title"
          className="flex w-full justify-center  scroll-mt-10"
        >
          <Reveal >
            <Stack />
          </Reveal>
        </section>

        <section
          id="aboutme"
          aria-labelledby="about-title"
          className="flex w-full justify-center scroll-mt-25"
        >
          <Reveal >
            <AboutMe />
          </Reveal>
        </section>

        <Divider />
        <section
          id="footer"
          aria-labelledby="contact-title"
          className="flex w-full justify-center "
        >
          <Footer />
        </section>
      </main>
    </div>
  );
}
