"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { Resume } from "@/components/Resume";
import { Projects } from "@/components/Projects";
import { NotFound } from "@/components/NotFound";

export default function Home() {
  const [view, setView] = useState<"home" | "resume" | "projects" | "notfound">("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#resume") {
        setView("resume");
      } else if (hash === "#projects") {
        setView("projects");
      } else if (hash === "#notfound") {
        setView("notfound");
      } else {
        setView("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Check initial hash
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {view === "home" && <Hero />}
      {view === "resume" && <Resume />}
      {view === "projects" && <Projects />}
      {view === "notfound" && <NotFound />}
      {view === "home" && <div id="resume" className="scroll-mt-20" />}
      {view === "home" && <div id="projects" className="scroll-mt-20" />}
    </main>
  );
}
