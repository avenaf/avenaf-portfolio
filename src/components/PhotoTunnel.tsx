import { useEffect, useRef } from 'react';
import { heroPhotos } from '../data/content';
import { useReducedMotion } from '../hooks/useReducedMotion';

/** CSS 3D scene. DOM nodes and animation state are separate to avoid React re-renders per frame. */
export function PhotoTunnel() {
  const nodes = useRef<(HTMLDivElement | null)[]>([]);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    const photoNodes = nodes.current;
    if (reducedMotion) {
      photoNodes.forEach((node, i) => {
        if (node) node.style.transform = `translate3d(calc(-50% + ${heroPhotos[i].x}vw), calc(-50% + ${heroPhotos[i].y}vh), ${heroPhotos[i].z * 0.12}px)`;
      });
      return;
    }
    const TOTAL_DEPTH = 3520;
    const positions = heroPhotos.map(p => p.z);
    let last = performance.now();
    let raf = 0;
    let impulse = 0;
    let scrollDirection = 1;
    let previousScroll = window.scrollY;
    let visible = true;
    const onScroll = () => {
      const next = window.scrollY;
      const delta = next - previousScroll;
      if (delta !== 0) {
        scrollDirection = Math.sign(delta);
        impulse = Math.min(18, impulse + Math.abs(delta) * 0.07);
      }
      previousScroll = next;
      visible = next < window.innerHeight * 1.6;
    };
    const animate = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      impulse *= Math.exp(-dt * 2.4);
      if (visible && !document.hidden) {
        positions.forEach((position, index) => {
          const photo = heroPhotos[index];
          let nextZ = position + scrollDirection * (58 + impulse * 74) * photo.speed * dt;
          if (nextZ > 400) nextZ -= TOTAL_DEPTH;
          else if (nextZ < -TOTAL_DEPTH + 400) nextZ += TOTAL_DEPTH;
          positions[index] = nextZ;
          const node = photoNodes[index];
          if (node) {
            node.style.transform = `translate3d(calc(-50% + ${photo.x}vw), calc(-50% + ${photo.y}vh), ${nextZ}px)`;
            // Invisible only far behind camera or after flying past it.
            node.style.opacity = String(Math.min(1, Math.max(0, (nextZ + 3150) / 400), Math.max(0, (480 - nextZ) / 175)));
          }
        });
      }
      raf = requestAnimationFrame(animate);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    raf = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); };
  }, [reducedMotion]);

  return <div className="photo-scene" aria-hidden="true">
    {heroPhotos.map((photo, index) => <div
      className="photo-plane"
      key={photo.src}
      ref={el => { nodes.current[index] = el; }}
      style={{ width: `min(${photo.width}px, 46vw)`, transform: `translate3d(calc(-50% + ${photo.x}vw), calc(-50% + ${photo.y}vh), ${photo.z}px)` }}
    ><img src={photo.src} alt={photo.alt} loading={index < 3 ? 'eager' : 'lazy'} decoding="async" draggable={false} /></div>)}
  </div>;
}
