"use client";

import React from "react";
import Link from "next/link";
import { LinkButton, LinkButtonName } from "@/components/LinkButton";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section>
      <h2 className="mb-8 text-center text-5xl font-bold uppercase tracking-widest text-light-0">
        Projects
      </h2>
      {projects.map((project) => (
        <div
          key={project.title}
          className="mb-6 mt-2 overflow-hidden rounded-lg bg-dark-3 p-2 shadow-md"
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-light-0">{project.title}</h3>
              <p className="mt-1 text-sm text-light-3">{project.stack.join(", ")}</p>
            </div>
          </div>
          {project.links.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.bgColor} ${link.ringColor} inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium transition hover:brightness-110`}
                >
                  <i className={link.icon} />
                  {link.title}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <LinkButton name="GitHub" className="px-6 py-3 text-lg" />
      </div>
    </section>
  );
}
