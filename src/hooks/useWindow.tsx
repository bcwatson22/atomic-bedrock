import { useEffect, useState } from 'react';
import { debounce } from '_utils';

interface IWindowSize {
  vw?: number;
  vh?: number;
}

interface IHook {
  hasWindow: boolean;
  windowSize: IWindowSize;
}

const useWindow = (): IHook => {

  const [windowSize, setWindowSize] = useState<IWindowSize>({
    vw: undefined,
    vh: undefined
  });

  const hasWindow = typeof window !== 'undefined';

  useEffect(() => {

    if (hasWindow) {

      const handleResize = debounce((): void => {

        setWindowSize({
          vw: window.innerWidth,
          vh: window.innerHeight
        });

      }, 100);
    
      window.addEventListener('resize', handleResize);
     
      handleResize();
    
      return () => window.removeEventListener('resize', handleResize);

    }

  }, []);

  return { 
    hasWindow,
    windowSize
  };

};

export default useWindow;
