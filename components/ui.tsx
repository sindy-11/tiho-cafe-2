'use client';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
export function Reveal({children,className=''}:{children:React.ReactNode;className?:string}) { const reduced=useReducedMotion(); return <motion.div className={className} initial={reduced?false:{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.6}}>{children}</motion.div> }
export function Photo({src,alt,className='',priority=false,sizes='(max-width: 700px) 100vw, 50vw'}:{src:string;alt:string;className?:string;priority?:boolean;sizes?:string}) {return <div className={`photo ${className}`}><Image src={src} alt={alt} fill sizes={sizes} priority={priority}/></div>}
export function Eyebrow({children}:{children:React.ReactNode}) {return <p className="eyebrow">{children}</p>}
