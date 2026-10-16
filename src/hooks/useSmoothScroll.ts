import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export function useSmoothScroll(reduced:boolean){useEffect(()=>{if(reduced||!matchMedia('(pointer:fine)').matches)return;const lenis=new Lenis({anchors:true,duration:1.05});lenis.on('scroll',ScrollTrigger.update);const tick=(time:number)=>lenis.raf(time*1000);gsap.ticker.add(tick);return()=>{gsap.ticker.remove(tick);lenis.destroy()}},[reduced]);}
