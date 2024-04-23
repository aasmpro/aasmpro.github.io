import React from 'react';
import { contactLinks } from 'data/contactLinks';
import { LinkButtonName } from './LinkButton';

export function ContactBox({ useIcon }) {
  return (
    <div className='flex flex-wrap gap-2 leading-snug'>
      {contactLinks.map((name) => (
        <LinkButtonName
          key={name}
          name={name}
          useIcon={useIcon}
          useText={!useIcon}
          iconClassName={!useIcon && 'mr-2'}
          className='px-3.5 py-0.5 font-bold print:text-light-0'
        />
      ))}
    </div>
  );
}
