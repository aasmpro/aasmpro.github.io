import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const pageURL = pathname.replaceAll('/', ' ').trim();
    const title = pageURL.charAt(0).toUpperCase() + pageURL.slice(1);
    document.title = title ? `Ross Amiri - ${title}` : 'Ross Amiri';
  }, [pathname]);

  return null;
}
