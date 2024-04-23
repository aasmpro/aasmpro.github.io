import React from 'react';

import { Hero } from 'components/Hero';
import { LinkButtonName } from 'components/LinkButton';
import { ContactBox } from 'components/ContactBox';

export function Home() {
  const linkClasses = 'mx-2 px-2 text-dark-0 hover:text-light-0';
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <div id='info' className='min-h-screen flex flex-col justify-center items-center'>
        <div className='sm:w-[500px] w-screen p-5 py-20 text-lg select-none flex flex-col gap-y-2'>
          <p>
            Hi! I'm a Team Leader & Web Developer, currently working as FullStack
            Developer at
            <LinkButtonName name='CurrentCompany' useIcon={false} className='mx-2 px-2' />
            , the world's largest feedback platform that aims to optimize the travel
            experience from the right hotel to the perfect stay.
          </p>
          <p>
            Here is my
            <LinkButtonName
              name='Resume'
              useIcon={false}
              className={linkClasses}
              useLinkComponent
            />
            and
            <LinkButtonName
              name='Projects'
              useIcon={false}
              className={linkClasses}
              useLinkComponent
            />
            .
          </p>
          <p>
            I am available to
            <LinkButtonName name='Talk' useIcon={false} className={linkClasses} />
            /
            <LinkButtonName name='Chat' useIcon={false} className={linkClasses} />
            about anything related to tech. it's always a pleasure to meet new people ;]
          </p>
          <p className='mb-1'>
            Join me to play
            <LinkButtonName name='Chess' useIcon={false} className='mx-2 px-2' />
            or
            <LinkButtonName name='Dota2' useIcon={false} className='mx-2 px-2' />.
          </p>
          <ContactBox />
        </div>
      </div>
    </div>
  );
}
