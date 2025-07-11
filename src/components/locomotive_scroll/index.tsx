import LocomotiveScroll from 'locomotive-scroll';
import React, { useEffect, useLayoutEffect, useRef } from 'react'

const useLocomotiveScroll = () => {
    const scrollContainerRef = useRef(null);
    const scroll = useRef<LocomotiveScroll>();
    useEffect(() => {
        if (typeof window !== 'undefined' && scrollContainerRef) {
            import('locomotive-scroll').then((LocomotiveScroll) => {
                document.body.setAttribute('data-scroll-container', 'true');

                scroll.current = new LocomotiveScroll.default() as LocomotiveScroll;

                return () => {
                  if (scroll){
                    document.body.removeAttribute('data-scroll-container');
                    scroll.current?.destroy();
                  }
                };
              });
          }
    }, [])
    
  return {scrollContainerRef}
}

export default useLocomotiveScroll