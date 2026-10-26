'use client'
import {useEffect,useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function Reveal({children,delay=0,className=''}:{children:React.ReactNode;delay?:number;className?:string}){
 const ref=useRef<HTMLDivElement>(null)
 useEffect(()=>{if(!ref.current)return;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){gsap.set(ref.current,{autoAlpha:1,y:0});return}
 const ctx=gsap.context(()=>{gsap.fromTo(ref.current,{autoAlpha:0,y:26},{autoAlpha:1,y:0,duration:.85,delay,ease:'power3.out',scrollTrigger:{trigger:ref.current,start:'top 88%',once:true}})},ref)
 return()=>ctx.revert()},[delay])
 return <div ref={ref} className={className}>{children}</div>
}
