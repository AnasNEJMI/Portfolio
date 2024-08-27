import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTransitionContext } from '@/contexts/transition_context';

const inter = Inter({ subsets: ["latin"] });

const About = () => {
  const containerRef = React.useRef(null);
  let { timeline } = useTransitionContext();

  useGSAP(() => {
    timeline.add(gsap.fromTo(containerRef.current, {
      y: 0,
      opacity: 1,
    },{
      y : -150,
      opacity : 0,
      ease : "power2.inOut",
      duration : 1,
    }));
      
  }, {scope: containerRef});

  useGSAP(() => {
    gsap.fromTo(containerRef.current, {
      y: 150,
      opacity: 0,
    },{
      y : 0,
      opacity : 1,
      ease : "power1.inOut",
      duration : 0.5,
    });
  }, []);


  return (
    <main ref = {containerRef}
      className={`flex min-h-screen flex-col items-center justify-center ${inter.className}`}
    >
        <h1 className="text-center text-4xl font-bold">About</h1>
        <p className="text-center text-md font-regular text-zinc-800 mt-1">This page is still under construction</p>
        <Link scroll = {false} href = "/" className="text-center text-white bg-slate-900  hover:bg-slate-700 p-6 mt-6 rounded-full">Go back to home</Link>
    </main>
  )
}

export default About