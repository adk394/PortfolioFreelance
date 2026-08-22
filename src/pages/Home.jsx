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
    <div className="bg-[url('./public/other/mesh1.png')] opacity-100 bg-cover bg-center bg-no-repeat justify-center items-center flex flex-col  pt-10">
      <Navbar/>
      <div className="flex flex-col items-center justify-center gap-y-20">
        <Main />
        <Divider/>
        <Projects />
        <Stack />
        <AboutMe />
        <Divider/>
        <Footer />
      </div>
    </div>
  );
}
