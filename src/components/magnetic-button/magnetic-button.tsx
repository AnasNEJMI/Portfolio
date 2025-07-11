import React from 'react'
import Magnetic from '../basic_magnetic_item/index';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface MagneticButtonProps{
    className? : string,
    children : React.ReactNode,
    variant? : "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined,
}
const MagneticButton = ({className, children, variant = 'default'} : MagneticButtonProps) => {
  return (
    <Magnetic>
        <Button variant={variant} className={cn('font-primary', className)}>
            {children}
        </Button>
    </Magnetic>
  )
}

export default MagneticButton