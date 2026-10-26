'use client'
import {useEffect} from 'react'
import {usePathname} from 'next/navigation'
import Lenis from 'lenis'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function SmoothScroll({children}:{children:React.ReactNode}){
 const pathname=usePathname()
 useEffect(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return
  const lenis=new Lenis({duration:1.05,smoothWheel:true,wheelMultiplier:.9,touchMultiplier:1.1})
  lenis.on('scroll',ScrollTrigger.update)
  const tick=(time:number)=>lenis.raf(time*1000)
  gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0)
  return()=>{gsap.ticker.remove(tick);lenis.destroy();ScrollTrigger.getAll().forEach(t=>t.kill())}
 },[])
 useEffect(()=>{window.scrollTo({top:0,behavior:'instant'})},[pathname])
 return <>{children}</>
}
