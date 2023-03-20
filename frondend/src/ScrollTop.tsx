/* import libraries */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/*
    Scroll Top Component  
*/

/*
    This function is for returning the top of the page
    every time switching the page.
    e.g.) Home to Project.
          Project to CSC317 detail page
*/
export function ScrollTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, [location]);

  return null;
}
