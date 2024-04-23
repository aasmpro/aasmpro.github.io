import { LinkButton } from './LinkButton';

export function ResumeDetailComponent({ title, data = [], isBtn }) {
  if (!data?.length) return null;
  if (isBtn) {
    return (
      <div className='flex flex-row flex-wrap'>
        {data.map(({ href, title: dataTitle }, index) => (
          <LinkButton
            href={href}
            text={dataTitle}
            bgColor='bg-blue-0'
            ringColor='ring-blue-0'
            key={dataTitle + index}
            className='px-3 py-0.5 mx-1 my-1 font-bold print:text-light-0 print:text-sm print:px-2 print:py-0'
          />
        ))}
      </div>
    );
  }
  return (
    <div className='mt-2 mb-2 print:text-sm text-justify'>
      <p className='font-bold'>{title}</p>
      <ul className='list-disc pl-4'>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
