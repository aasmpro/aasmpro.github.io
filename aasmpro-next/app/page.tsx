"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { LinkButtonName } from "@/components/LinkButton";
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
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {view === "home" && (
        <div className="overflow-x-hidden">
          <Hero />
          <div id="info" className="min-h-screen flex flex-col justify-center items-center">
            <div className="sm:w-[500px] w-screen p-5 py-20 text-lg select-none">
              <p className="mb-4">
                Hi! I&apos;m a Senior Software Engineer with 9+ years of experience, mostly focused on web development and leading technical teams.
              </p>
              <p className="mb-4">
                Here is my
                <LinkButtonName
                  name="Resume"
                  useIcon={false}
                  className="mx-2 px-2 text-dark-0 hover:text-light-0"
                  useLinkComponent={true}
                />
                and
                <LinkButtonName
                  name="Projects"
                  useIcon={false}
                  className="mx-2 px-2 text-dark-0 hover:text-light-0"
                  useLinkComponent={true}
                />
                .
              </p>
              <p className="mb-4">
                I am available to
                <LinkButtonName
                  name="Talk"
                  useIcon={false}
                  className="mx-2 px-2 text-dark-0 hover:text-light-0"
                />
                /
                <LinkButtonName
                  name="Chat"
                  useIcon={false}
                  className="mx-2 px-2 text-dark-0 hover:text-light-0"
                />
                about anything related to tech. it&apos;s always a pleasure to meet new people ;]
              </p>
              <p>
                Join me to play
                <LinkButtonName name="Chess" useIcon={false} className="mx-2 px-2" />
                or
                <LinkButtonName name="Dota2" useIcon={false} className="mx-2 px-2" />
                .
              </p>
              <div className="mt-5 flex flex-wrap gap-2 leading-snug">
                {(["GitHub", "LinkedIn", "Instagram", "Twitter", "StackOverflow", "Telegram"] as const).map((name) => (
                  <LinkButtonName key={name} name={name} useIcon={false} className="px-2" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {view === "resume" && <Resume />}
      {view === "projects" && <Projects />}
      {view === "notfound" && <NotFound />}
      {view === "home" && <div id="resume" className="scroll-mt-20" />}
      {view === "home" && <div id="projects" className="scroll-mt-20" />}
    </main>
  );
}
