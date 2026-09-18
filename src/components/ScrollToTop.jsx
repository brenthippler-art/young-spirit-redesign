import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// On every route change: if the URL has a #hash, scroll to that element
// (giving the layout a tick to render first); otherwise scroll to the top.
// Needed because React Router doesn't do this automatically like a normal
// browser navigation does.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Wait a frame so the target page's elements exist before we scroll.
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}