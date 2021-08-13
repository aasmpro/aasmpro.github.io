import React from "react";
import { Link } from "react-router-dom";
import { about, skills, experiences, projects } from "../data";

export const Resume = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="md:w-4/5 w-full print:w-full">
        <div className="mb-5 p-4 border-dark-0 border-b-2 print:hidden">
          <div className="flex justify-between">
            <Link
              className="px-2 bg-dark-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-dark-0"
              to="/">
              Home
            </Link>
            <a
              className="px-2 bg-yellow-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-yellow-0"
              href="/AbolfazlAmiri.pdf">
              Download
            </a>
          </div>
        </div>
        <div className="px-5 print:!p-0 divide-y-2 divide-dark-0">
          <div className="pb-4">
            <p className="text-3xl font-bold">Abolfazl Amiri</p>
            <p className="text-xl">Python & Web Developer</p>
            <div className="mt-3 flex flex-col text-sm sm:flex-row">
              <div className="sm:w-4/12">
                <p className="mb-2">
                  <a href="https://abolfazlamiri.ir">
                    <i class="fas fa-globe-americas text-blue-0" />{" "}
                    abolfazlamiri.ir
                  </a>
                </p>
                <p>
                  <a href="tel:+989217214929">
                    <i class="fas fa-phone text-blue-0" /> +989217214929
                  </a>
                </p>
              </div>
              <div>
                <p className="mb-2 mt-2 sm:mt-0">
                  <a href="mailto:aasmpro@gmail.com">
                    <i class="fas fa-at text-red-0" /> aasmpro@gmail.com
                  </a>
                </p>
                <p>
                  <a href="https://github.com/aasmpro">
                    <i class="fab fa-github-alt mr-4 text-light-5 print:text-black" />
                  </a>
                  <a href="https://stackoverflow.com/users/6484831/aasmpro">
                    <i class="fab fa-stack-overflow mr-4 text-orange-0" />
                  </a>
                  <a href="https://www.linkedin.com/in/aasmpro/">
                    <i class="fab fa-linkedin-in mr-4 text-blue-0" />
                  </a>
                  <a href="https://twitter.com/aasmpro">
                    <i class="fab fa-twitter mr-4 text-blue-0" />
                  </a>
                  <a href="https://telegram.me/aasmpro/">
                    <i class="fab fa-telegram-plane mr-4 text-blue-0" />
                  </a>
                  aasmpro
                </p>
              </div>
            </div>
          </div>
          <div className="py-4 text-sm">
            <p className="text-xl mb-4 font-bold">About Me</p>
            {about.map((line) => (
              <p>{line}</p>
            ))}
          </div>
          <div className="py-4 text-sm">
            <p className="text-xl mb-4 font-bold">Skills</p>
            <ul class="list-disc pl-4 grid grid-cols-2 sm:grid-cols-3">
              {skills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="py-4 text-sm">
            <p className="text-xl mb-4 font-bold">Experiences</p>
            <div>
              {experiences
                .filter((exp) => exp.showExperiences)
                .map((exp) => (
                  <div className="py-2 first:pt-0">
                    <div>
                      <p className="text-lg font-semibold">{exp.title}</p>
                      <p className="text-base font-semibold">{exp.company}</p>
                      <p className="text-xs font-semibold">
                        {exp.startDate} - {exp.endDate} | {exp.type} |{" "}
                        {exp.location}
                      </p>
                    </div>
                    <div className="text-xs">
                      {exp.stack.map((stack) => (
                        <span className="text-green-1 print:text-green-0 font-semibold">
                          {stack},{" "}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 mb-2">
                      {exp.about.map((line) => (
                        <p>{line}</p>
                      ))}
                    </div>
                    {exp.links ? (
                      <div>
                        <ul class="list-disc pl-3 text-sm">
                          {exp.links.map((link) => (
                            <li className="text-blue-0 font-semibold my-0.5 first:mt-0">
                              <a href={link.href}>{link.title}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ))}
            </div>
          </div>
          <div className="py-4 text-sm">
            <p className="text-xl mb-3 font-bold">Projects</p>
            <div>
              {projects
                .filter((pro) => pro.showExperiences)
                .sort((a, b) => b.orderExperiences - a.orderExperiences)
                .map((pro) => (
                  <div className="py-2 first:pt-0">
                    <div>
                      <p className="text-lg font-semibold">{pro.title}</p>
                    </div>
                    <div className="text-xs">
                      {pro.stack.map((stack) => (
                        <span className="text-green-1 print:text-green-0 font-semibold">
                          {stack},{" "}
                        </span>
                      ))}
                    </div>
                    <div className="mt-1 mb-2">
                      {pro.about.map((line) => (
                        <p>{line}</p>
                      ))}
                    </div>
                    {pro.links ? (
                      <div>
                        <ul class="list-disc pl-3 text-sm">
                          {pro.links.map((link) => (
                            <li className="text-blue-0 font-semibold my-0.5 first:mt-0">
                              <a href={link.href}>{link.title}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
