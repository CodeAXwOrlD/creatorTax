'use client'
import Image from 'next/image'
import Link from 'next/link'
import {ArrowDown,ArrowUpRight} from 'lucide-react'
import {useEffect,useRef} from 'react'
import {gsap} from 'gsap'
export default function Hero(){
 const root=useRef<HTMLElement>(null)
 useEffect(()=>{if(!root.current||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return
 const ctx=gsap.context(()=>{gsap.from('.hero-content > *',{y:24,autoAlpha:0,duration:.9,stagger:.1,ease:'power3.out',delay:.1});gsap.from('.hero-visual',{y:55,rotate:5,autoAlpha:0,duration:1.25,ease:'power3.out',delay:.2});gsap.to('.floating-stamp',{y:-9,rotate:12,duration:3.8,repeat:-1,yoyo:true,ease:'sine.inOut'})},root)
 return()=>ctx.revert()},[])
 return <section ref={root} className="hero"><div className="hero-noise"/><div className="hero-content"><div className="hero-overline"><span className="tiny-star">✳</span> INDEPENDENT WORK, EXPLAINED</div><h1>Make money.<br/><em>Keep it clear.</em></h1><p className="hero-lede">Tax and money guides for India&apos;s independent minds — freelancers, editors, creators and people building a living on their own terms.</p><div className="hero-actions"><Link className="button button-dark" href="#story">Step into the story <ArrowUpRight size={17}/></Link><Link className="quiet-link" href="#calculator">Start with your numbers <ArrowDown size={15}/></Link></div><div className="hero-footnote"><span className="status-dot"/> Clear language. Practical steps. No financial theatre.</div></div><div className="hero-visual"><div className="visual-glow"/><Image className="hero-photo" src="/images/sunlit-workspace.png" alt="Warm sunlight falling across a calm working desk" width={1536} height={1024} priority sizes="(max-width: 640px) 88vw, 40vw"/><div className="photo-label"><span>FIELD NOTES / 2026</span><span>MADE FOR INDEPENDENT WORK</span></div><div className="floating-stamp"><span>LESS</span><span>GUESSWORK</span><b>↗</b></div></div><div className="hero-index"><span>01 — A BETTER STARTING POINT</span><span>KEEP SCROLLING ↓</span></div></section>
}
