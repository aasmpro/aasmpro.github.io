export function ResumeToggleLnaguageButton({ translation }) {
  return (
    <span
      className='mr-2 py-0.5 rounded-full text-dark-0 overflow-hidden
    transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1 cursor-pointer'
      onClick={translation.toggle}
    >
      <span
        className={`text-dark-0 px-1.5 py-0.5 transition duration-300 rounded-l-full ${
          translation.isEnglish ? 'bg-light-1' : 'text-light-0 bg-dark-0'
        }`}
      >
        EN
      </span>
      <span
        className={`text-dark-0 px-1.5 py-0.5 transition duration-300 rounded-r-full ${
          translation.isGerman ? 'bg-light-1' : 'text-light-0 bg-dark-0'
        }`}
      >
        DE
      </span>
    </span>
  );
}
