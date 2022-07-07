import React, { useState } from "react";

import { LinkButtonName, LinkButton } from "../components/LinkButton";
import { projects } from "../data";

export const Projects = () => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="flex flex-col items-center">
      <div className="md:w-4/5 w-full">
        <div className="mb-5 p-4 border-dark-0 border-b-2">
          <div className="flex justify-between">
            <LinkButtonName
              name="Home"
              useIcon={false}
              className="px-3 py-0.5 text-dark-0 hover:text-light-0"
              useLinkComponent={true}
            />
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
          </div>
        </div>
        <div className="px-5 pb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((pro) => pro.showProjects)
              .sort((a, b) => b.orderProjects - a.orderProjects)
              .map((pro) => (
                <div>
                  <p className="text-xl font-bold">{pro.title}</p>
                  <div className="flex flex-row">
                    {pro.links.map((link) => (
                      <LinkButton
                        className="w-[40px] h-[40px] m-0 p-0 mr-2 mt-2 flex items-center justify-center rounded-md"
                        bgColor={link.bgColor}
                        ringColor={link.ringColor}
                        icon={link.icon}
                        iconClassName="text-lg"
                        href={link.href}
                        text={link.title}
                        useText={false}
                      />
                    ))}
                  </div>
                  {showDetails ? (
                    <div>
                      <div className="text-sm mt-2">
                        {pro.stack.map((stack) => (
                          <span className="text-green-1 print:text-green-0 font-semibold">
                            {stack},{" "}
                          </span>
                        ))}
                      </div>
                      <div className="mt-1">
                        {pro.about.map((line) => (
                          <p>{line}</p>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
