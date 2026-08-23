"use client";

import React, { useState, useEffect, useCallback } from "react";
import { LinkButton, LinkButtonName } from "@/components/LinkButton";
import { useTranslation } from "@/utils/useTranslation";
import { skillsDE } from "@/data/skillsDE";
import { skillsEN } from "@/data/skillsEN";
import { projects } from "@/data/projects";
import { links } from "@/data/links";
import { aboutMeDE } from "@/data/aboutMeDE";
import { aboutMeEN } from "@/data/aboutMeEN";
import { experiencesDE } from "@/data/experiencesDE";
import { experiencesEN } from "@/data/experiencesEN";

export function Resume() {
  const translation = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [language, setLanguage] = useState(translation.language);

  // Language switch via localStorage + reload (matches original CRA behavior).
  const setLanguageStorage = useCallback(
    (lang: string) => {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("language", lang);
        window.location.reload();
      }
    },
    []
  );

  const isDE = language === "DE";
  const skills = isDE ? skillsDE : skillsEN;
  const experience = translation.experience as {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    type: string;
    location: string;
    about: string[];
    responsible: string;
    responsibilities: string[];
    contribution: string;
    contributions: string[];
    achievement: string;
    achievements: string[];
    stack: string[];
    links: { title: string; href: string }[];
    showExperiences: boolean;
    showExperiencesPrint: boolean;
  }[];

  const cover = isDE ? aboutMeDE.cover : aboutMeEN.cover;
  const info = isDE ? aboutMeDE.info : aboutMeEN.info;

  return (
    <section>
      <h2 className="mb-12 text-center text-5xl font-bold uppercase tracking-widest text-light-0">
        Resume
      </h2>
      {/* Header: cover text + info + language switch */}
      <div className="mb-12 text-center">
        <p className="mx-auto max-w-[900px] text-lg leading-relaxed text-light-0">
          {cover?.[0] ?? ""}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-light-2">
          {(info ?? []).map((item, i) => (
            <React.Fragment key={i}>
              <span>{item}</span>
              {i < (info?.length ?? 0) - 1 && (
                <span className="mx-2 text-light-3">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="text-sm text-light-1">Language:</span>
          <button
            onClick={() => setLanguageStorage("EN")}
            className={`rounded-md px-3 py-1 text-sm font-semibold ${
              !isDE ? "bg-light-2 text-dark-0" : "bg-dark-1 text-light-0"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguageStorage("DE")}
            className={`rounded-md px-3 py-1 text-sm font-semibold ${
              isDE ? "bg-light-2 text-dark-0" : "bg-dark-1 text-light-0"
            }`}
          >
            DE
          </button>
        </div>
      </div>

      {/* Skills section */}
      <div className="mb-12">
        <h3 className="mb-6 text-center text-2xl font-bold uppercase tracking-wider text-light-1">
          {skills.title}
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {(skills.data ?? []).map((skill, i) => (
            <span
              key={i}
              className="rounded-md bg-dark-1 px-4 py-2 text-center text-sm font-medium text-light-0 ring-1 ring-light-2 transition hover:brightness-110"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Work experience */}
      <div className="mb-12">
        <h3 className="mb-8 text-center text-2xl font-bold uppercase tracking-wider text-light-1">
          Work Experience
        </h3>
        {experience.map((exp, index) => (
          <div key={index} className="mb-8 p-6 rounded-lg bg-dark-2">
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h4 className="text-xl font-bold text-light-0">{exp.title}</h4>
                <p className="text-base text-light-1">{exp.company}</p>
              </div>
              <div className="text-right text-sm text-light-2">
                <p>{exp.startDate} - {exp.endDate}</p>
                <p>{exp.type}</p>
                <p>{exp.location}</p>
              </div>
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-light-0">
              {exp.about.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
            {exp.responsible && (
              <p className="mt-4 font-bold text-light-1">{exp.responsible}</p>
            )}
            {exp.responsibilities.length > 0 && (
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-light-0">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            )}
            {exp.contribution && (
              <p className="mt-4 font-bold text-light-1">{exp.contribution}</p>
            )}
            {exp.contributions.length > 0 && (
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-light-0">
                {exp.contributions.map((contrib, i) => (
                  <li key={i}>{contrib}</li>
                ))}
              </ul>
            )}
            {exp.achievement && (
              <p className="mt-4 font-bold text-light-1">{exp.achievement}</p>
            )}
            {exp.achievements.length > 0 && (
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-light-0">
                {exp.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            )}
            {exp.stack.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.stack.map((s, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-dark-3 px-3 py-1 text-xs font-medium text-light-2"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
            {exp.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-dark-1 px-3 py-1 text-xs font-medium text-light-0 ring-1 ring-light-2 transition hover:brightness-110"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Projects preview */}
      <div className="mb-12">
        <h3 className="mb-6 text-center text-2xl font-bold uppercase tracking-wider text-light-1">
          Selected Projects
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-lg bg-dark-3 p-4 shadow-md"
            >
          {project.links.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.bgColor} ${link.ringColor} inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs font-medium transition hover:brightness-110`}
                >
                  <i className={link.icon} />
                  {link.title}
                </a>
              ))}
            </div>
          )}
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <LinkButton name="Projects" className="px-6 py-3 text-lg" />
        </div>
      </div>

      {/* Interests */}
      <div className="mb-12">
        <h3 className="mb-6 text-center text-2xl font-bold uppercase tracking-wider text-light-1">
          Interests
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {Object.entries(links)
            .filter(([_, link]) => link.bgColor !== "bg-light-1")
            .slice(0, 8)
            .map(([name, link]) => (
              <a
                key={name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.bgColor} ${link.ringColor} inline-flex items-center gap-2 rounded-md px-4 py-2 ring-1 text-sm font-medium transition hover:brightness-110 active:scale-95`}
              >
                <i className={link.icon} />
                {link.text}
              </a>
            ))}
        </div>
      </div>

      {/* GitHub CTA */}
      <div className="mt-12 text-center">
        <LinkButton name="GitHub" className="px-8 py-4 text-xl" />
      </div>
    </section>
  );
}
