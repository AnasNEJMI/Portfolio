import React, { useEffect } from 'react'

const useLocomotiveScroll = () => {
    const scrollContainerRef = React.useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && scrollContainerRef) {
            import('locomotive-scroll').then((LocomotiveScroll) => {
                document.body.setAttribute('data-scroll-container', 'true');

                let scroll = new LocomotiveScroll.default({
                    el : scrollContainerRef.current,
                    smooth: true,

                });

                return () => {
                  if (scroll){
                    document.body.removeAttribute('data-scroll-container');
                    scroll.destroy();
                    scroll = null;
                  }
                };
              });
          }
    }, [])
    
  return {scrollContainerRef}
}

export default useLocomotiveScroll