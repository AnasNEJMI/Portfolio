import MagneticButton from '@/components/magnetic-button/magnetic-button'
import PageWrapper from '@/components/page-wrapper'
import { Separator } from '@/components/ui/separator'
import useLocalTime from '@/hooks/use-localtime'
import { delay } from '@/utils/utils'
import Error from 'next/error'
import React, { FormEvent, useRef, useState } from 'react'
import { toast } from 'sonner'

const ContactPage = () => {
    const containerRef = useRef(null)
    const localTime = useLocalTime();
    const [isSending, setIsSending] = useState(false);

    async function handleSubmit(event : FormEvent){
        event.preventDefault();
        const target = event.currentTarget;
        if(target instanceof HTMLFormElement){
            const formData = new FormData(target);
            const data = Object.fromEntries(formData.entries());
            
            setIsSending(true);

            try{
                const response = await fetch('/api/send', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
    
                if(!response.ok){
                    const errorData = await response.json();
                    throw new Error(errorData?.message || "Une erreur inconnue s'est produite.");
                }
    
                const result = await response.json();
                toast.success('Votre e-mail a été envoyé avec succès !'); 
                target.reset();
            }catch(error){
                console.log("Error : ", error);
                toast.error("Envoi d'email a échoué.");
            }finally{
                setIsSending(false);
            }
        }
    }
  return (
    <PageWrapper
        links={[
            {
                label : 'Acceuil',
                href : '/',
            },
            {
                label : 'Parcours',
                href : '/about',
            },
            {
                label : 'Projets',
                href : '/projects',
            },
        ]}
        
        ref = {containerRef}
    >
        <section className='section flex flex-col items-center bg-white w-full pt-64  md:pt-48 pb-48'>
            <div className='w-full max-w-7xl px-nav'>
                <div className='w-full flex h-full items-center lg:items-end flex-row-reverse justify-end gap-4 lg:justify-between lg:flex-row'>
                    <h1 className='font-secondary font-black text-h1 h-min'><span>Contact</span></h1>
                    <div className='w-20 md:w-32 lg:w-40 aspect-square rounded-full translate-y-8 md:translate-y-12 lg:translate-y-14'>
                        <div className=" w-full ">
                            <div style={{transformStyle : 'preserve-3d', transform : "rotateX(60deg) rotateZ(-45deg)"}} className='w-full aspect-square flex items-center justify-center -translate'>
                            <div style={{transformStyle : 'preserve-3d', }} className='w-full aspect-square absolute animate-hover-and-spin'>
                                {
                                    [...Array(11)].map((item, index) => {
                                        const deg = 360/10;
                                        return <div key={index} style={{transform: `rotateX(90deg) rotateY(${deg*index}deg)`}} className='absolute w-full h-full border-2 border-zinc-700 top-1/2 origin-top rounded-full'>

                                        </div>
                                    })
                                }

                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Separator className='mt-4'/>
                <form onSubmit={handleSubmit} className='flex flex-col-reverse md:flex-row items-start justify-start gap-12 relative mt-16'>
                    <div className='flex-1 w-full'>
                        {/* name */}
                        <div className='flex gap-4 justify-between items-center border-b border-jet-600 pb-6 pr-6'>
                        <div className='flex items-start justify-center gap-12 w-full'>
                            <h5 className='text-lg  font-semibold text-jet-800'>1</h5>
                            <div className='flex-1 flex flex-col justify-start items-start gap-3'>
                                <h2 className=' font-medium text-xl'>Par quel nom aimeriez-vous être adressés ?</h2>
                                <input name='name' type="text" className='w-full text-xl py-3 bg-transparent font-semibold text-zinc-900 placeholder:text-zinc-300 outline-none' placeholder='John Doe'/>
                            </div>
                        </div>
                        
                        </div>
                        {/* email */}
                        <div className='flex gap-4 justify-between items-center border-b border-jet-600 py-6 pr-6'>
                        <div className='flex items-start justify-center gap-12 w-full'>
                            <h5 className='text-lg  font-semibold text-jet-800'>2</h5>
                            <div className='flex-1 flex flex-col justify-start items-start gap-3'>
                                <h2 className=' font-medium text-xl '>Sur quelle addresse mail puis-je vous répondre ?</h2>
                                <input name='email' type="text" className='w-full text-xl py-3 bg-transparent font-semibold text-zinc-900 placeholder:text-zinc-300 outline-none' placeholder='adresse@email.com'/>
                            </div>
                        </div>
                        </div>
                        {/* service */}
                        <div className='flex gap-4 justify-between items-center border-b border-jet-600 py-6 pr-6'>
                        <div className='flex items-start justify-center gap-12 w-full'>
                            <h5 className='text-lg  font-semibold text-jet-800'>3</h5>
                            <div className='flex-1 flex flex-col justify-start items-start gap-3'>
                                <h2 className=' font-medium text-xl '>Quel est le motif de votre prise de contact ?</h2>
                                <input name='subject' type="text" className='w-full text-xl py-3 bg-transparent font-semibold text-zinc-900 placeholder:text-zinc-300 outline-none' placeholder="Offre d'emploi, Mission, ..."/>
                            </div>
                        </div>
                        </div>
                        {/* message */}
                        <div className='flex items-start justify-center gap-12 w-full'>
                            <h5 className='text-lg  font-semibold text-jet-800'>4</h5>
                            <div className='flex-1 flex flex-col justify-start items-start gap-3'>
                                <h2 className=' font-medium text-xl '>Quel message voudriez-vous me laisser ?</h2>
                                <textarea name='message' className='w-full text-xl py-3 bg-transparent font-semibold text-zinc-900 placeholder:text-zinc-300 outline-none overflow-auto resize-none h-auto' rows={5} placeholder={`Bonjour Anas, je vous contacte au sujet de ...`}/>
                            </div>
                        </div>
                        <div className='flex w-full justify-end mt-8'>
                            <MagneticButton type='submit' className='w-60'>
                                {
                                    !isSending &&
                                    <span>Envoyer</span>    
                                }
                                {
                                    isSending &&
                                    <span className='animate-pulse text-3xl font-bold'>...</span>    
                                }
                            </MagneticButton>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 font-primary'>
                        <div className='flex flex-col gap-2'>
                        <h5 className='text-zinc-500 text-caption font-semibold'>COORDONNÉES</h5>
                        <div className='flex flex-col gap-2 mt-2'>
                            <p className='text-zinc-900 text-body font-regular'>anasnejmi@gmail.com</p>
                            <p className='text-zinc-900 text-body font-regular'>+33 7 80 12 60 77</p>
                        </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                        <h5 className='text-zinc-500 text-caption font-semibold'>TRAVAIL</h5>
                        <div className='flex flex-col gap-2'>
                            <p className='text-zinc-800 text-tiny font-bold'>Localisation : <span className='text-body text-zinc-900 font-normal ml-2'>Paris</span></p>
                            <p className='text-zinc-800 text-tiny font-bold'>Heure Locale : <span className='text-body text-zinc-900 font-normal ml-2'>{localTime}</span></p>
                            <p className='text-zinc-800 text-tiny font-bold'>Disponibilité : <span className='text-body text-zinc-900 font-normal ml-2'>Disponible</span> <span className='rounded-full ml-2 relative -translate-y-1 px-2 bg-green-500 animate-pulse'></span></p>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </PageWrapper>
  )
}

export default ContactPage