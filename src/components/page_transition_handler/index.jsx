import React, {useState } from 'react'
import { useGSAP } from '@gsap/react';
import { usePageTransition } from '@/contexts/transition_context';
import { useOverlayTitle } from '@/contexts/overlay_title_context';
import { useRouter } from 'next/router';
import { useVerticalNavState } from '@/contexts/vertical_nav_state_context';
import { useFirstLoad } from '@/contexts/first_load_context';
import { PathNames } from '@/utils/utils';

const PageTransitionHandler = ({ children }) => {
    const [displayedChildren, setDisplayedChildren] = useState(children);
    let {exitTimeline } = usePageTransition();
    let {setOverlayTitle } = useOverlayTitle();
    let {isVerticalNavOpen, setIsVerticalNavOpen} = useVerticalNavState();
    let {isOnFirstLoad} = useFirstLoad();
    let router = useRouter();

    useGSAP(() => {
      //only play the exit animation if the next page is different from the current one
      console.log('pathname : ', router.pathname)
      const currentRoute = PathNames[router.pathname];

      //change the title of the overlay depending on the current route
      setOverlayTitle(currentRoute);

      //disable vertical nav
      if(isVerticalNavOpen){
        setIsVerticalNavOpen(false);
      }

      //if first load scroll to top
      if(isOnFirstLoad){
        window.scrollTo(0, 0);
      }

      if(displayedChildren.key !== children.key){
        if(exitTimeline.getChildren().length > 0){
          exitTimeline.play().then(() => {
            //once the exit animation is done, change the displayed page
            setDisplayedChildren(children);

            window.scrollTo(0, 0);

            //to avoid any weird behavior, we pause the timeline and clear it
            exitTimeline.pause().clear();
          })
        }else{
          setDisplayedChildren(children);
          window.scrollTo(0, 0);
        }
      }
    }, [children])
    
  return (
    <>
      {displayedChildren}
    </>
  )
}

export default PageTransitionHandler