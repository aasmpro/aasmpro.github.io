import React from 'react';
import { LinkButton } from './LinkButton';

export function ProjectItem({ title, links = [], stack = [], about = [], details }) {
  return (
    <div>
      <h3 className='text-xl font-bold'>{title}</h3>
      <div className='flex flex-row'>
        {links.map(({ title: linkTitle, href, icon, bgColor, ringColor }, linkIndex) => (
          <LinkButton
            icon={icon}
            href={href}
            useText={false}
            text={linkTitle}
            bgColor={bgColor}
            ringColor={ringColor}
            key={linkTitle + linkIndex}
            iconClassName='text-lg'
            className='w-[40px] h-[40px] m-0 p-0 mr-2 mt-2 flex items-center justify-center rounded-md'
          />
        ))}
      </div>
      {details && (
        <div className='flex flex-col'>
          <div className='text-sm mt-2 flex flex-wrap gap-2 mb-1'>
            {stack.map((item, stackIndex) => (
              <span
                key={stackIndex}
                className='text-green-1 print:text-green-0 font-semibold'
              >
                {item},
              </span>
            ))}
          </div>
          <div>
            {about.map((line, aboutIndex) => (
              <p key={aboutIndex}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
