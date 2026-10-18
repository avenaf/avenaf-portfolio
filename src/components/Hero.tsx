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
    let titleOpacity = 1;
    let previousScroll = window.scrollY;
    const update = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - previousScroll;
      const fadeDistance = window.innerHeight * 0.55;
      if (delta < 0) titleOpacity = Math.max(0, titleOpacity + delta / fadeDistance);
      else if (delta > 0) titleOpacity = Math.min(1, titleOpacity + delta / fadeDistance);
      previousScroll = scrollY;
      const progress = Math.max(0, Math.min(1, scrollY / (window.innerHeight * 0.77)));
      if (titleRef.current) {
        titleRef.current.style.opacity = String(titleOpacity);
        titleRef.current.style.transform = `translateY(${-progress * window.innerHeight * 0.65}px)`;
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
      <span className="hero-index">01 — 04</span>
    </div>
  </section>;
}
