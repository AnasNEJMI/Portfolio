import React from 'react'
import Magnetic from '../basic_magnetic_item/index';
import { Button } from '../ui/button';

interface MagneticButtonProps{
    children : React.ReactNode,
    variant? : "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined,
}
const MagneticButton = ({children, variant = 'default'} : MagneticButtonProps) => {
  return (
    <Magnetic>
        <Button variant={variant} className='font-primary'>
            {children}
        </Button>
    </Magnetic>
  )
}

export default MagneticButton