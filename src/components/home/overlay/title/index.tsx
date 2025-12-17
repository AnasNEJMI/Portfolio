import { useOverlayTitle } from '@/contexts/overlay_title_context';
import { cn } from '@/lib/utils';
import React from 'react'

interface OverlayTitleProps{
    className ? : string
    id : string
}
const OverlayTitle = ({className, id} : OverlayTitleProps) => {
    let {overlayTitle} = useOverlayTitle();
  return (
    <h2 style={{color:'white'}} id={id} className = {cn("will-change-transform font-secondary text-white text-h1", className)}>{overlayTitle}</h2>
  )
}

export default OverlayTitle