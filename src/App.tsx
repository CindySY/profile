import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header,CustomCursor } from './components/Chrome';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Portfolio } from './sections/Portfolio';
import { Contact } from './sections/Contact';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useSmoothScroll } from './hooks/useSmoothScroll';
gsap.registerPlugin(ScrollTrigger);
export default function App(){const reduced=useReducedMotion();const root=useRef<HTMLDivElement>(null);useSmoothScroll(reduced);useLayoutEffect(()=>{if(reduced)return;const ctx=gsap.context(()=>{gsap.to('.scroll-progress',{scaleX:1,ease:'none',scrollTrigger:{start:0,end:'max',scrub:true}});gsap.utils.toArray<HTMLElement>('.hero-word').forEach((el,i)=>gsap.to(el,{x:(i-1)*100,y:-35*(i+1),opacity:.2,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}}));gsap.to('.hero-art',{scale:1.15,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});gsap.to('.hero-rule',{scaleX:1,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom center',scrub:true}});gsap.from('.flow-left',{x:-70,scrollTrigger:{trigger:'.about-title',start:'top bottom',end:'bottom center',scrub:true}});gsap.from('.flow-right',{x:70,scrollTrigger:{trigger:'.about-title',start:'top bottom',end:'bottom center',scrub:true}});gsap.utils.toArray<HTMLElement>('.reveal').forEach(el=>gsap.from(el,{y:35,opacity:0,duration:.7,scrollTrigger:{trigger:el,start:'top 94%',once:true}}));gsap.utils.toArray<HTMLElement>('.text-strip div').forEach((el,i)=>gsap.to(el,{xPercent:i===0?-15:15,scrollTrigger:{trigger:'.text-strip',start:'top bottom',end:'bottom top',scrub:true}}));gsap.to('.contact',{backgroundColor:'#f5f5f2',color:'#0a0a0a',scrollTrigger:{trigger:'.contact',start:'top 65%',end:'top 10%',scrub:true}});gsap.to('.contact-circle',{scale:1.15,scrollTrigger:{trigger:'.contact',start:'top bottom',end:'bottom bottom',scrub:true}})},root);return()=>ctx.revert()},[reduced]);return <div ref={root}><a className="skip-link" href="#main">Skip to content</a><div className="scroll-progress"/><Header/><CustomCursor reduced={reduced}/><main id="main"><Hero reduced={reduced}/><About reduced={reduced}/><Skills/><Portfolio reduced={reduced}/><Contact/></main></div>}
