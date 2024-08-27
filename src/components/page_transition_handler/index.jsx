import React, {useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTransitionContext } from '@/contexts/transition_context';

const PageTransitionHandler = ({ children }) => {
    const [displayedChildren, setDisplayedChildren] = useState(children);
    let { timeline } = useTransitionContext();

    useGSAP(() => {
      //only play the exit animation if the next page is different from the current one
        if(displayedChildren.key !== children.key){
          timeline.play().then(() => {

            //once the exit animation is done, change the displayed page
            setDisplayedChildren(children);

            //scroll back to top of the page before page is loaded 
            //(necessary because we disable automatic scrolling to top for the Link component)
            //otherwise the page will be scrolled to the top before the exit animation is played, which is not desired
            window.scrollTo(0, 0);

            //to avoid any weird behavior, we pause the timeline and clear it
            timeline.pause().clear();
          })
        }
    }, [children])
    
  return (
    <>
      {displayedChildren}
    </>
  )
}

export default PageTransitionHandler