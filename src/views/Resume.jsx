import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { LinkButtonName } from 'components/LinkButton';
import { DetailButton } from 'components/DetailButton';
import { aboutMeTranslations, experiencesTranslations, skillsTranslations } from 'data';
import { useTranslation } from 'utils/useTranslation';
import { ContactBox } from 'components/ContactBox';
import { ResumeDetailComponent } from 'components/ResumeDetailComponent';
import { ResumeToggleLnaguageButton } from 'components/ResumeToggleLnaguageButton';

export function Resume() {
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
    <div className='md:w-4/5 w-full print:w-full flex flex-col mx-auto print:pb-0 pb-20'>
      <div className='mb-5 p-4 border-dark-0 border-b-2 print:hidden flex justify-between flex-wrap'>
        <LinkButtonName
          name='Home'
          text={translation.get('Home')}
          title={translation.get('Home')}
          useIcon={false}
          className='px-3 py-0.5 text-dark-0 hover:text-light-0'
          useLinkComponent
        />
        <div>
          <ResumeToggleLnaguageButton translation={translation} />
          <DetailButton
            show={showDetails}
            onClick={() => setShowDetails((state) => !state)}
          />
          <Link
            className='ml-2 px-3 py-0.5 bg-yellow-0 rounded-full transition duration-300 hover:bg-black hover:ring-2 hover:ring-yellow-0'
            to={`/RossAmiri.${translation.isEnglish ? 'EN' : 'DE'}.pdf`}
            target='_blank'
          >
            Download
          </Link>
        </div>
      </div>

      <div className='px-5 print:!p-0 divide-y-2 divide-dark-0'>
        <div className='pb-4 flex flex-col justify-between md:flex-row print:flex-row'>
          <div>
            <h1 className='print:text-4xl text-4xl font-bold'>Ross Amiri</h1>
            <p className='print:text-2xl text-2xl'>{aboutMe.title}</p>
          </div>
          <div className='flex flex-col print:text-sm whitespace-nowrap mt-5 md:mt-0 print:mt-0'>
            {['Webpage', 'Email', 'Phone'].map((name) => (
              <div key={name} className='mb-2 print:mb-1.5'>
                <LinkButtonName
                  name={name}
                  className={`block max-w-[295px] px-3 py-0.5 font-bold print:text-light-0 ${
                    name === 'Webpage' ? 'print:bg-black' : ''
                  }`}
                  iconClassName='text-light-0 mr-3'
                />
              </div>
            ))}
            <ContactBox useIcon />
          </div>
        </div>
        <div className='py-4 print:text-sm'>
          <p className='mb-3 print:text-xl text-2xl font-bold'>
            {translation.get('aboutMe')}
          </p>
          <div className='text-justify'>
            {aboutMe.cover.map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </div>
        </div>
        <div className='py-4 print:text-sm'>
          <p className='mb-3 print:text-xl text-2xl font-bold'>
            {translation.get('skills')}
          </p>
          <p className='mb-2'>{skills.title}</p>
          <ul className='list-disc pl-4 grid sm:grid-cols-2 md:grid-cols-3 print:grid-cols-3'>
            {skills.data.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className='py-4 print:text-sm'>
          <p className='mb-3 print:text-xl text-2xl font-bold'>
            {translation.get('experiences')}
          </p>
          <div>
            {experiences
              .filter((exp) => exp.showExperiences)
              .map((exp, index) => (
                <div
                  key={index}
                  className={`py-2 first:pt-0 ${
                    exp.showExperiencesPrint ? '' : 'print:hidden'
                  }`}
                >
                  <div className='flex justify-between'>
                    <div>
                      <p className='print:text-lg text-lg font-semibold'>{exp.title}</p>
                      <p className='print:text-base font-semibold'>{exp.company}</p>
                      <div className='whitespace-nowrap sm:hidden print:hidden'>
                        <p className='print:text-xs text-sm font-semibold'>
                          {exp.startDate} - {exp.endDate}
                        </p>
                        <p className='print:text-xs text-sm font-semibold'>
                          {exp.location}
                        </p>
                        <p className='print:text-xs text-sm font-semibold'>{exp.type}</p>
                      </div>
                      <div className='print:text-xs text-sm'>
                        {exp.stack.map((stack, stackIndex) => (
                          <span
                            key={`${index}-${stackIndex}`}
                            className='text-green-1 print:text-green-0 font-semibold'
                          >
                            {stack},{' '}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className='text-right whitespace-nowrap hidden sm:block print:block'>
                      <p className='print:text-xs text-sm font-semibold'>
                        {exp.startDate} - {exp.endDate}
                      </p>
                      <p className='print:text-xs text-sm font-semibold'>
                        {exp.location}
                      </p>
                      <p className='print:text-xs text-sm font-semibold'>{exp.type}</p>
                    </div>
                  </div>
                  <div className='mt-2 mb-2 text-justify'>
                    {exp.about.map((line, aboutIndex) => (
                      <span key={`${index}-${aboutIndex}`}>{line}</span>
                    ))}
                  </div>

                  {showDetails && (
                    <>
                      <ResumeDetailComponent data={exp.links} isBtn />
                      <ResumeDetailComponent
                        title={exp.responsible}
                        data={exp.responsibilities}
                      />
                      <ResumeDetailComponent
                        title={exp.contribution}
                        data={exp.contributions}
                      />
                      <ResumeDetailComponent
                        title={exp.achievement}
                        data={exp.achievements}
                      />
                    </>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
