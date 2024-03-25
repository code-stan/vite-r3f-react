import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger);
const useLenis = () => {
  useEffect(()=>{
     const lenis = new Lenis();

     lenis.on('scroll', ScrollTrigger.update);

     gsap.ticker.add(time => {
     lenis.raf(time * 1000);
     });
  }, [])
}

export default useLenis