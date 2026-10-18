import { GraduationCap, House, MapPin } from 'lucide-react';
import { portrait } from '../data/content';
export function Introduction() {
  return <section id="about" className="section-shell about-section">
    <div className="section-label"><span>01 / INTRODUCTION</span><span className="section-label-line" /></div>
    <div className="about-grid">
      <div className="portrait-frame"><img src={portrait.src} alt={portrait.alt} loading="lazy" decoding="async" /></div>
      <div className="about-copy"><div className="about-heading"><p className="eyebrow">EXCITED TO HAVE YOU HERE.</p><h2>Hey There!</h2></div>
        <div className="about-body"><p>I’m a senior at UC Berkeley, pursuing a double degree in Data Science &amp; Molecular and Cell Biology. I’m a firm believer of learning as much as possible, while you still can — thus, on this page, you’ll find a vast spread of experience in a variety of fields, from data analytics to entrepreneurship to biotechnology.</p><p>Today, I lean into a career in product management — passionate about bringing visions to life! Beyond product, I’m curious about biotechnology and bioinformatics, and am looking for research opportunities there!</p><p>Outside of my work, I’m also an avid film-connoisseur, museum-goer, hobby-artist, tetris-gamer, and gym-rat! :)</p></div>
        <div className="about-locations">
          <span className="about-location"><MapPin size={14} aria-hidden="true" /> SAN FRANCISCO</span>
          <span className="about-location"><House size={14} aria-hidden="true" /> SEATTLE</span>
          <span className="about-location"><GraduationCap size={14} aria-hidden="true" /> UC BERKELEY</span>
        </div>
      </div>
    </div>
  </section>;
}
