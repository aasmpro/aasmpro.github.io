import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data";

export const Projects = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="md:w-4/5 w-full">
        <div className="mb-5 p-4 border-dark-0 border-b-2">
          <div className="flex justify-start">
            <Link
              className="px-2 bg-dark-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-dark-0"
              to="/">
              Home
            </Link>
          </div>
        </div>
        <div className="px-5 pb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects
              .filter((pro) => pro.showProjects)
              .sort((a, b) => b.orderProjects - a.orderProjects)
              .map((pro) => (
                <a
                  href={pro.link}
                  className={`block text-center p-2 py-3 rounded-lg transition duration-300 hover:bg-black hover:ring-2 ${pro.ringColor} ${pro.bgColor} overflow-hidden`}>
                  {pro.title}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
