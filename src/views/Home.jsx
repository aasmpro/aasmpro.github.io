import React from "react";
import { Link } from "react-router-dom";

import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <div>
      <Hero />
      <div
        id="info"
        className="min-h-screen flex flex-col justify-center items-center">
        <div className="sm:w-[500px] w-screen p-5 py-20 text-lg select-none">
          <p className="mb-4">
            Hi! I'm a Team Leader & Web Developer, currently working as CTO at
            <a
              className="mx-2 px-2 bg-aqua-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-aqua-0"
              href="https://snappcarfix.com">
              SnappCarFix
            </a>
            , the largest online platform for car parts and services in Iran.
          </p>
          <p className="mb-4">
            Here is my
            <Link
              className="mx-2 px-2 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
              to="/#resume"
              title="Resume">
              Resume
            </Link>
            and
            <Link
              className="mx-2 px-2 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
              to="/#projects"
              title="Projects">
              Projects
            </Link>
            .
            {/* also sometimes i write about things on my
            <Link
              className="mx-2 px-2 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
              to="blog/">
              Blog
            </Link>
            . */}
          </p>
          <p className="mb-4">
            I am available to
            <a
              className="mx-2 px-2 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
              href="tel:+989217214929"
              title="Phone">
              Talk
            </a>
            /
            <a
              className="mx-2 px-2 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
              href="mailto:aasmpro@gmail.com"
              title="Email">
              Chat
            </a>
            about anything related to tech. it's always a pleasure to meet new
            people ;]
          </p>
          <p>
            Join me to play
            <a
              className="mx-2 px-2 bg-green-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-green-0"
              href="https://www.chess.com/member/aasmpro"
              title="Chess">
              Chess
            </a>
            or
            <a
              className="mx-2 px-2 bg-red-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-red-0"
              href="https://steamcommunity.com/id/aasmpro/"
              title="Dota2">
              Dota2
            </a>
            .
          </p>
          <div className="mt-5 flex flex-wrap gap-2 leading-snug">
            <a
              className="px-2 bg-dark-3 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-dark-3"
              href="https://github.com/aasmpro"
              title="Github">
              Github
            </a>
            <a
              className="px-2 bg-orange-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-orange-0"
              href="https://stackoverflow.com/users/6484831/aasmpro"
              title="Stackoverflow">
              StackOverflow
            </a>
            <a
              className="px-2 bg-blue-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-blue-0"
              href="https://www.linkedin.com/in/aasmpro/"
              title="Linkedin">
              LinkedIn
            </a>
            <a
              className="px-2 bg-blue-1 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-blue-1"
              href="https://twitter.com/aasmpro"
              title="Twitter">
              Twitter
            </a>
            <a
              className="px-2 bg-blue-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-blue-0"
              href="https://telegram.me/aasmpro/"
              title="Telegram">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
