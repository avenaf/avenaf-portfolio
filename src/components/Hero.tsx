import { ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { PhotoTunnel } from './PhotoTunnel';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    let scheduled = false;
    const update = () => {
      const scrollY = window.scrollY;
      if (titleRef.current) {
        titleRef.current.style.transform = `translateY(${-scrollY * 0.65}px)`;
      }
      scheduled = false;
    };
    const onScroll = () => { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [reduced]);
  return <section id="home" className="hero-track" aria-label="Welcome">
    <div className="hero-sticky">
      <PhotoTunnel />
      <div className="hero-title-layer" ref={titleRef}><p className="hero-overline">STAY CURIOUS</p><h1>Avena Fan</h1><p className="hero-subtitle">PRODUCT <span>·</span> BIOTECHNOLOGY <span>·</span> ART <span>·</span> EVERYTHING IN BETWEEN</p></div>
      <button className="hero-arrow" aria-label="Scroll to introduction" onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' })}><ArrowDown size={25} strokeWidth={1.25} /><span>SCROLL TO EXPLORE</span></button>
    </div>
  </section>;
}
