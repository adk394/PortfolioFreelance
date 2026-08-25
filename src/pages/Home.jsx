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

export default function Home() {
  return (
    <div className="relative justify-center items-center flex flex-col  pt-10">
      {/* Background con opacidad */}
      <div className="absolute inset-0 bg-[url('/other/mesh-5.png')] bg-[length:100%_115%] bg-center bg-no-repeat opacity-80 -z-10" />
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-y-25">
        <Main />
        <Divider />

        <section id="projects" className="flex w-full justify-center scroll-mt-25">
          <Projects />
        </section>

        <section id="stack" className="flex w-full justify-center  scroll-mt-10">
          <Stack />
        </section>

        <section id="aboutme" className="flex w-full justify-center scroll-mt-25">
          <AboutMe />
        </section>

        <Divider />
        <section id="footer" className="flex w-full justify-center ">
          <Footer />
        </section>
      </div>
    </div>
  );
}
