import React from "react";
import { Link } from "react-router-dom";
import { skills, experiences } from "../data";

// Fixme
//
// must add following values too:
// birth-date / location / marriage / military / education
//
// make experiences like:
// work/comp desc / things and tasks being done with statistics
//
// make links look better
// add some shapes or backgrounds
// maybe decrease the font-size

export const Resume = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="md:w-4/5 w-full print:w-full">
        <div className="mb-5 p-4 border-dark-0 border-b-2 print:hidden">
          <div className="flex justify-between">
            <Link
              className="px-2 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
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
            <p className="print:text-3xl text-3xl font-bold">Abolfazl Amiri</p>
            <p className="print:text-xl text-xl">Python & Web Developer</p>
            <div className="mt-3 flex flex-col print:text-sm sm:flex-row">
              <div className="sm:w-4/12">
                <p className="mb-2">
                  <a href="https://abolfazlamiri.ir" title="Webpage">
                    <i class="fas fa-globe-americas text-blue-0" />{" "}
                    abolfazlamiri.ir
                  </a>
                </p>
                <p>
                  <a href="tel:+989217214929" title="Phone">
                    <i class="fas fa-phone text-blue-0" /> +989217214929
                  </a>
                </p>
              </div>
              <div>
                <p className="mb-2 mt-2 sm:mt-0">
                  <a href="mailto:aasmpro@gmail.com" title="Mail">
                    <i class="fas fa-at text-red-0" /> aasmpro@gmail.com
                  </a>
                </p>
                <p>
                  <a href="https://github.com/aasmpro" title="Github">
                    <i class="fab fa-github-alt mr-4 text-light-2 print:text-black" />
                  </a>
                  <a
                    href="https://stackoverflow.com/users/6484831/aasmpro"
                    title="StackOverflow">
                    <i class="fab fa-stack-overflow mr-4 text-orange-0" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aasmpro/"
                    title="LinkedIn">
                    <i class="fab fa-linkedin-in mr-4 text-blue-0" />
                  </a>
                  <a href="https://twitter.com/aasmpro" title="Twitter">
                    <i class="fab fa-twitter mr-4 text-blue-0" />
                  </a>
                  <a href="https://telegram.me/aasmpro/" title="Telegram">
                    <i class="fab fa-telegram-plane mr-4 text-blue-0" />
                  </a>
                  aasmpro
                </p>
              </div>
            </div>
          </div>
          <div className="py-4 print:text-sm">
            <p className="mb-4 print:text-xl text-xl font-bold">About Me</p>
            Hi! I'm a Team Leader, Web Developer & Free/Open-Source software
            advocate. Currently working as CTO at{" "}
            <a href="https://snappcarfix.com" className="text-blue-0 font-bold">
              SnappCarFix
            </a>
            , the largest online platform for car parts and services in Iran. I
            have around 5 years of experience in software development especially
            in Web Development and about 2 years on leading Tech teams. I always
            try in addition to develop a clean scalable code, by communicating
            closely with end-users, develop user experience, and create new
            values too. I can easily make strong sincere relations with my
            colleagues and team and help them to develop themselves. I'm a
            self-learner, without prejudice on tools and stacks being used and
            ready to learn and use new technologies.
          </div>
          <div className="py-4 print:text-sm">
            <p className="mb-4 print:text-xl text-xl font-bold">Skills</p>
            <ul class="list-disc pl-4 grid sm:grid-cols-2 md:grid-cols-3 print:sm:grid-cols-3">
              {skills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="py-4 print:text-sm">
            <p className="mb-4 print:text-xl text-xl font-bold">Experiences</p>
            <div>
              {experiences
                .filter((exp) => exp.showExperiences)
                .map((exp) => (
                  <div className="py-2 first:pt-0">
                    <div>
                      <p className="print:text-lg text-lg font-semibold">
                        {exp.title}
                      </p>
                      <p className="print:text-base font-semibold">
                        {exp.company}
                      </p>
                      <p className="print:text-xs text-sm font-semibold">
                        {exp.startDate} - {exp.endDate} | {exp.type} |{" "}
                        {exp.location}
                      </p>
                    </div>
                    <div className="print:text-xs text-sm">
                      {exp.stack.map((stack) => (
                        <span className="text-green-1 print:text-green-0 font-semibold">
                          {stack},{" "}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 mb-2">
                      {exp.about.map((line) => (
                        <span>{line}</span>
                      ))}
                    </div>
                    <div className="mt-2 mb-2">
                      <p>{exp.responsible}</p>
                      <ul class="list-disc pl-4">
                        {exp.responsibilities.map((line) => (
                          <li>{line}</li>
                        ))}
                      </ul>
                    </div>
                    {exp.links ? (
                      <div className="flex flex-row flex-wrap">
                        {exp.links.map((link) => (
                          <a
                            className="px-3 py-0.5 mx-1 my-1 font-bold bg-blue-0 rounded-full print:text-light-0
                            transition duration-300 hover:bg-black hover:ring-2 hover:ring-blue-0"
                            href={link.href}>
                            {link.title}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
            </div>
          </div>
          <div className="py-4 print:text-sm">
            <p className="mb-4 print:text-xl text-xl font-bold">Projects</p>
            <div>
              Check out my site & Github for projects.
              <div class="flex flex-row flex-wrap mt-2">
                <a
                  href="https://abolfazlamiri.ir/#projects"
                  className="px-3 py-0.5 mx-1 my-1 font-bold bg-blue-0 rounded-full print:text-light-0
                            transition duration-300 hover:bg-black hover:ring-2 hover:ring-blue-0">
                  abolfazlamiri.ir/#Projects
                </a>
                <a
                  href="https://github.com/aasmpro"
                  className="px-3 py-0.5 mx-1 my-1 font-bold bg-blue-0 rounded-full print:text-light-0
                            transition duration-300 hover:bg-black hover:ring-2 hover:ring-blue-0">
                  github.com/aasmpro
                </a>
              </div>
            </div>
          </div>
          {/* Note: Projects been commented instead of been removed from resume */}
          {/* <div className="py-4 text-sm">
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
          </div> */}
        </div>
        <div className="print:hidden pb-20"></div>
      </div>
    </div>
  );
};
