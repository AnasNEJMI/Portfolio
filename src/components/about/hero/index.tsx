import React from 'react'

const AboutHero = () => {
  return (
    <section className="section min-h-screen w-full flex flex-col items-center bg-white pt-48">
        <div className="w-full px-nav flex flex-col items-center max-w-7xl">
            <h1 className="font-primary font-medium text-h4 text-zinc-800">Développeur Front-end</h1>
            <h1 className="font-secondary font-black text-h1 mt-4">Anas NEJMI</h1>
            <h1 className="font-primary font-light text-h5 mt-4 text-zinc-600">Basé à Paris</h1>
            <div className="rounded-t-full bg-black max-w-sm w-full aspect-[2/3] mt-16">
            </div>
        </div>
    </section>
  )
}

export default AboutHero