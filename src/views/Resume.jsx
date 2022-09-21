import React, { useState, useEffect } from "react";

import { LinkButtonName, LinkButton } from "../components/LinkButton";
import {
  aboutMeTranslations,
  experiencesTranslations,
  skillsTranslations,
} from "../data";
import { useTranslation } from "../utils/useTranslation";

export const Resume = () => {
  const translation = useTranslation();
  const [showDetails, setShowDetails] = useState(true);
  const [aboutMe, setAboutMe] = useState(translation.get(aboutMeTranslations));
  const [experiences, setExperiences] = useState(
    translation.get(experiencesTranslations)
  );
  const [skills, setSkills] = useState(translation.get(skillsTranslations));

  useEffect(() => {
    setAboutMe(translation.get(aboutMeTranslations));
    setExperiences(translation.get(experiencesTranslations));
    setSkills(translation.get(skillsTranslations));
  }, [translation]);

  return (
    <div className="flex flex-col items-center">
      <div className="md:w-4/5 w-full print:w-full">
        <div className="mb-5 p-4 border-dark-0 border-b-2 print:hidden">
          <div className="flex justify-between flex-wrap">
            <LinkButtonName
              name="Home"
              text={translation.get("Home")}
              title={translation.get("Home")}
              useIcon={false}
              className="px-3 py-0.5 text-dark-0 hover:text-light-0"
              useLinkComponent={true}
            />
            <div>
              <span
                className="mr-2 py-0.5 rounded-full text-dark-0 overflow-hidden
            transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1 cursor-pointer"
                onClick={translation.toggle}>
                <span
                  className={`text-dark-0 px-1.5 py-0.5 transition duration-300 rounded-l-full ${
                    translation.isEnglish
                      ? "bg-light-1"
                      : "text-light-0 bg-dark-0"
                  }`}>
                  EN
                </span>
                <span
                  className={`text-dark-0 px-1.5 py-0.5 transition duration-300 rounded-r-full ${
                    translation.isGerman
                      ? "bg-light-1"
                      : "text-light-0 bg-dark-0"
                  }`}>
                  DE
                </span>
              </span>
              {showDetails ? (
                <span
                  className="px-3 py-0.5 bg-light-1 rounded-full text-dark-0 hover:text-light-0
            transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1 cursor-pointer"
                  onClick={() => setShowDetails(false)}>
                  Detail
                </span>
              ) : (
                <span
                  className="px-3 py-0.5 bg-dark-0 rounded-full text-light-0 hover:text-light-0
            transition duration-300  hover:bg-black hover:ring-2 hover:ring-dark-0 cursor-pointer"
                  onClick={() => setShowDetails(true)}>
                  Detail
                </span>
              )}
              {translation.isEnglish ? (
                <a
                  className="ml-2 px-3 py-0.5 bg-yellow-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-yellow-0"
                  href="/AbolfazlAmiri.EN.pdf"
                  target="_blank">
                  Download
                </a>
              ) : (
                <a
                  className="ml-2 px-3 py-0.5 bg-yellow-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-yellow-0"
                  href="/AbolfazlAmiri.DE.pdf"
                  target="_blank">
                  Download
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="px-5 print:!p-0 divide-y-2 divide-dark-0">
          <div className="pb-4 flex flex-col justify-between md:flex-row print:flex-row">
            <div>
              <p className="print:text-4xl text-4xl font-bold">
                Abolfazl Amiri
              </p>
              <p className="print:text-2xl text-2xl">{aboutMe.title}</p>
            </div>
            <div className="flex flex-col print:text-sm whitespace-nowrap mt-5 md:mt-0 print:mt-0">
              {["Webpage", "Email", "Phone"].map((name) => (
                <div className="mb-2 print:mb-1.5">
                  <LinkButtonName
                    name={name}
                    className={`block max-w-[243px] px-3 py-0.5 font-bold print:text-light-0 ${
                      name === "Webpage" ? "print:bg-black" : ""
                    }`}
                    iconClassName="text-light-0 mr-3"
                  />
                </div>
              ))}
              <div className="flex flex-wrap">
                {[
                  "GitHub",
                  "StackOverflow",
                  "LinkedIn",
                  "Twitter",
                  "Telegram",
                ].map((name) => (
                  <LinkButtonName
                    name={name}
                    className={`px-3.5 py-0.5 font-bold print:text-light-0 ${
                      name !== "Telegram" ? "mr-2" : ""
                    }`}
                    iconClassName={`text-light-0 ${
                      name === "Telegram" ? "text-sm" : ""
                    }`}
                    useText={false}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="py-4 print:text-sm">
            <p className="mb-3 print:text-xl text-2xl font-bold">
              {translation.get("aboutMe")}
            </p>
            <div className="text-justify">
              {aboutMe.cover.map((line) => (
                <span> {line}</span>
              ))}
              {showDetails ? (
                <ul className="print:text-xs list-disc pl-4 pt-2 grid md:grid-cols-2 print:sm:grid-cols-2">
                  {aboutMe.info.map((info) => (
                    <li>{info}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
          <div className="py-4 print:text-sm">
            <p className="mb-3 print:text-xl text-2xl font-bold">
              {translation.get("skills")}
            </p>
            <p className="mb-2">{skills.title}</p>
            <ul className="list-disc pl-4 grid sm:grid-cols-2 md:grid-cols-3 print:sm:grid-cols-3">
              {skills.data.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="py-4 print:text-sm">
            <p className="mb-3 print:text-xl text-2xl font-bold">
              {translation.get("experiences")}
            </p>
            <div>
              {experiences
                .filter((exp) => exp.showExperiences)
                .map((exp) => (
                  <div
                    className={`py-2 first:pt-0 ${
                      exp.showExperiencesPrint ? "" : "print:hidden"
                    }`}>
                    <div className="flex justify-between">
                      <div>
                        <p className="print:text-lg text-lg font-semibold">
                          {exp.title}
                        </p>
                        <p className="print:text-base font-semibold">
                          {exp.company}
                        </p>
                        <div className="whitespace-nowrap sm:hidden">
                          <p className="print:text-xs text-sm font-semibold">
                            {exp.startDate} - {exp.endDate}
                          </p>
                          <p className="print:text-xs text-sm font-semibold">
                            {exp.location}
                          </p>
                          <p className="print:text-xs text-sm font-semibold">
                            {exp.type}
                          </p>
                        </div>
                        <div className="print:text-xs text-sm">
                          {exp.stack.map((stack) => (
                            <span className="text-green-1 print:text-green-0 font-semibold">
                              {stack},{" "}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right whitespace-nowrap hidden sm:block">
                        <p className="print:text-xs text-sm font-semibold">
                          {exp.startDate} - {exp.endDate}
                        </p>
                        <p className="print:text-xs text-sm font-semibold">
                          {exp.location}
                        </p>
                        <p className="print:text-xs text-sm font-semibold">
                          {exp.type}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 mb-2 text-justify">
                      {exp.about.map((line) => (
                        <span> {line}</span>
                      ))}
                    </div>
                    {showDetails && exp.links?.length > 0 ? (
                      <div className="flex flex-row flex-wrap">
                        {exp.links.map((link) => (
                          <LinkButton
                            className="px-3 py-0.5 mx-1 my-1 font-bold print:text-light-0 print:text-sm print:px-2 print:py-0"
                            bgColor="bg-blue-0"
                            ringColor="ring-blue-0"
                            href={link.href}
                            text={link.title}
                          />
                        ))}
                      </div>
                    ) : null}
                    {showDetails && exp.responsibilities?.length > 0 ? (
                      <div className="mt-2 mb-2 print:text-sm text-justify">
                        <p className="font-bold">{exp.responsible}</p>
                        <ul className="list-disc pl-4">
                          {exp.responsibilities.map((line) => (
                            <li>{line}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {showDetails && exp.contributions?.length > 0 ? (
                      <div className="mt-2 mb-2 print:text-sm text-justify">
                        <p className="font-bold">{exp.contribution}</p>
                        <ul className="list-disc pl-4">
                          {exp.contributions?.map((line) => (
                            <li>{line}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {showDetails && exp.achievements?.length > 0 ? (
                      <div className="mt-2 mb-2 print:text-sm text-justify">
                        <p className="font-bold">{exp.achievement}</p>
                        <ul className="list-disc pl-4">
                          {exp.achievements?.map((line) => (
                            <li>{line}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="print:hidden pb-20"></div>
      </div>
    </div>
  );
};
