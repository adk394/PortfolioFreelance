import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Main from "../components/Main.jsx";
import Footer from "../components/Footer.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Stack from "../components/Stack/Stack.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Divider from "../components/Divider.jsx";
import CustomCursor from "../components/Cursor.jsx";

export default function Home() {
  return (
    <div className="relative justify-center items-center flex flex-col  pt-10">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      ></a>
      <CustomCursor />
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-28 backdrop-blur-md  [mask-image:linear-gradient(to_top,white,transparent)] z-40" />
      {/* Background con opacidad */}
      <div className="absolute inset-0 bg-[url('/other/mesh-5.png')] bg-[length:100%_115%] bg-center bg-no-repeat opacity-80 -z-10" />
      <Navbar />
      <main className="flex flex-col items-center justify-center gap-y-25">
        <section
          id="main"
          aria-labelledby="intro-title"
          className="flex w-full justify-center scroll-mt-25"
        >
          <Main />
        </section>

        <Divider />

        <section
          id="projects"
          aria-labelledby="projects-title"
          className="flex w-full justify-center scroll-mt-25"
        >
          <Projects />
        </section>

        <section
          id="stack"
          aria-labelledby="stack-title"
          className="flex w-full justify-center  scroll-mt-10"
        >
          <Stack />
        </section>

        <section
          id="aboutme"
          aria-labelledby="about-title"
          className="flex w-full justify-center scroll-mt-25"
        >
          <AboutMe />
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
