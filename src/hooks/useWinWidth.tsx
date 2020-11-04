import { useState, useEffect } from 'react';


const useWinWidth = () => {
  const getWidth = () => {
    let width = 0;
    if (typeof document !== 'undefined') {
      width = Math.max(document.documentElement.clientWidth, window.innerWidth);
    }
    return width;
  };

  const [width, setWidth] = useState(getWidth());
  useEffect(() => {
    setWidth(getWidth());
  }, []);
  useEffect(() => {
    const handleResize = () => setWidth(getWidth());
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
};

export default useWinWidth;
