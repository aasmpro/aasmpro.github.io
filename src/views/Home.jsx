import React from "react";

import { Hero } from "../components/Hero";
import { LinkButtonName } from "../components/LinkButton";

export const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div
        id="info"
        className="min-h-screen flex flex-col justify-center items-center">
        <div className="sm:w-[500px] w-screen p-5 py-20 text-lg select-none">
          <p className="mb-4">
            Hi! I'm a Team Leader & Web Developer, currently working as
            FullStack Developer at
            <LinkButtonName
              name="CurrentCompany"
              useIcon={false}
              className="mx-2 px-2"
            />
            , the world's largest feedback platform that aims to optimize the
            travel experience from the right hotel to the perfect stay.
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
            about anything related to tech. it's always a pleasure to meet new
            people ;]
          </p>
          <p>
            Join me to play
            <LinkButtonName
              name="Chess"
              useIcon={false}
              className="mx-2 px-2"
            />
            or
            <LinkButtonName
              name="Dota2"
              useIcon={false}
              className="mx-2 px-2"
            />
            .
          </p>
          <div className="mt-5 flex flex-wrap gap-2 leading-snug">
            {[
              "GitHub",
              "LinkedIn",
              "Instagram",
              "Twitter",
              "StackOverflow",
              "Telegram",
            ].map((name) => (
              <LinkButtonName name={name} useIcon={false} className="px-2" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
