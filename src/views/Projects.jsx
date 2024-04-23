import React, { useState } from 'react';

import { DetailButton } from 'components/DetailButton';
import { LinkButtonName } from 'components/LinkButton';
import { ProjectItem } from 'components/ProjectItem';
import { projects } from 'data';

export function Projects() {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className='flex flex-col items-center'>
      {/* Header */}
      <div className='md:w-4/5 w-full mb-5 p-4 border-dark-0 border-b-2 flex justify-between'>
        <LinkButtonName
          name='Home'
          useIcon={false}
          useLinkComponent
          className='px-3 py-0.5 text-dark-0 hover:text-light-0'
        />
        <DetailButton
          show={showDetails}
          onClick={() => setShowDetails((state) => !state)}
        />
      </div>

      {/* Projects */}
      <div className='md:w-4/5 w-full px-5 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects
          .filter((item) => item.showProjects)
          .sort((a, b) => b.orderProjects - a.orderProjects)
          .map(({ title, links = [], stack = [], about = [] }, index) => (
            <ProjectItem
              key={index}
              title={title}
              links={links}
              stack={stack}
              about={about}
              details={showDetails}
            />
          ))}
      </div>
    </div>
  );
}
