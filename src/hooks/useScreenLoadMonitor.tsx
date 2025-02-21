import { useEffect, useRef } from 'react';
import { useIsFocused } from '@react-navigation/native';

export const useScreenLoadMonitor = (screenName: string) => {
  const isFocused = useIsFocused();
  const mountTime = useRef(Date.now());

  useEffect(() => {
    if (isFocused) {
      const loadTime = Date.now() - mountTime.current;
      console.log(`${screenName} Load Time: ${loadTime}ms`);
      
      // Track render completion
      requestAnimationFrame(() => {
        const renderTime = Date.now() - mountTime.current;
        console.log(`${screenName} Render Time: ${renderTime}ms`);
      });
    }
  }, [isFocused, screenName]);
};

export default useScreenLoadMonitor;