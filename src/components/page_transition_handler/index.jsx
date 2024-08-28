import React, {useState } from 'react'
import { useGSAP } from '@gsap/react';
import { useTransitionContext } from '@/contexts/transition_context';
import { useOverlayTitleContext } from '@/contexts/overlay_title_context';
import { useRouter } from 'next/router';

const PageTransitionHandler = ({ children }) => {
    const [displayedChildren, setDisplayedChildren] = useState(children);
    let {exitTimeline } = useTransitionContext();
    let {overlayTitle, setOverlayTitle } = useOverlayTitleContext();
    let router = useRouter();

    useGSAP(() => {
      //only play the exit animation if the next page is different from the current one
      const currentRoute = router.pathname.slice(1) === ""? "Bienvenue !" : router.pathname.slice(1);
      setOverlayTitle(currentRoute);
      console.log(currentRoute);
      if(displayedChildren.key !== children.key){
        if(exitTimeline.getChildren().length > 0){
          exitTimeline.play().then(() => {
            //once the exit animation is done, change the displayed page
            setDisplayedChildren(children);

            //scroll back to top of the page before page is loaded 
            //(necessary because we disable automatic scrolling to top for the Link component)
            //otherwise the page will be scrolled to the top before the exit animation is played, which is not desired
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