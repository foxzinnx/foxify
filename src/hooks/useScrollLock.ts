import { useEffect } from 'react';

function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isLocked]);
}

export default useScrollLock;
