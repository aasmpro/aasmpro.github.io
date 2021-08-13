import React from "react";
import { Link } from "react-router-dom";

import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <div>
      <Hero />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="sm:w-[500px] w-screen p-5 py-20 text-lg select-none">
          <p className="mb-4">
            Hi! I'm Team Leader, Web Developer & Free/Open-Source software
            advocate.
          </p>
          <p className="mb-4">
            Currently working as CTO at
            <a
              className="mx-2 px-2 bg-aqua-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-aqua-0"
              href="https://snappcarfix.com">
              SnappCarFix
            </a>
            , an online platform for car parts and services.
          </p>
          <p className="mb-4">
            Here is my
            <Link
              className="mx-2 px-2 bg-dark-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-dark-0"
              to="resume/">
              Resume
            </Link>
            and
            <Link
              className="mx-2 px-2 bg-dark-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-dark-0"
              to="projects/">
              Projects
            </Link>
            . also sometimes i write about things on my
            <Link
              className="mx-2 px-2 bg-dark-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-dark-0"
              to="blog/">
              Blog
            </Link>
            .
          </p>
          <p className="mb-4">
            I am available to
            <a
              className="mx-2 px-2 bg-dark-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-dark-0"
              href="tel:+989217214929">
              Talk
            </a>
            /
            <a
              className="mx-2 px-2 bg-dark-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-dark-0"
              href="mailto:aasmpro@gmail.com">
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
              href="https://www.chess.com/member/aasmpro">
              Chess
            </a>
            or
            <a
              className="mx-2 px-2 bg-red-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-red-0"
              href="https://steamcommunity.com/id/aasmpro/">
              Dota2
            </a>
            .
          </p>
          <div className="mt-5 flex flex-wrap gap-2 leading-snug">
            <a
              className="px-2 bg-dark-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-dark-0"
              href="https://github.com/aasmpro">
              Github
            </a>
            <a
              className="px-2 bg-orange-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-orange-0"
              href="https://stackoverflow.com/users/6484831/aasmpro">
              StackOverflow
            </a>
            <a
              className="px-2 bg-blue-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-blue-0"
              href="https://www.linkedin.com/in/aasmpro/">
              LinkedIn
            </a>
            <a
              className="px-2 bg-blue-1 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-blue-1"
              href="https://twitter.com/aasmpro">
              Twitter
            </a>
            <a
              className="px-2 bg-blue-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-blue-0"
              href="https://telegram.me/aasmpro/">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
