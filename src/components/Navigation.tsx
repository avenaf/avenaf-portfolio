import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
const links = [{ text: 'About', href: '#about' }, { text: 'Experience', href: '#experience' }, { text: 'Projects', href: '#projects' }, { text: 'Contact', href: '#contact' }];
export function Navigation() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    if (!visible) setOpen(false);
  }, [visible]);
  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, []);
  return <header className={`site-nav ${visible ? 'site-nav--visible' : ''}`} aria-hidden={!visible}>
    <a className="nav-brand" href="#home" tabIndex={visible ? 0 : -1}>AF</a>
    <nav className="nav-desktop" aria-label="Main navigation">{links.map(link => <a tabIndex={visible ? 0 : -1} href={link.href} key={link.href}>{link.text}</a>)}</nav>
    <button className="nav-mobile-toggle" tabIndex={visible ? 0 : -1} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(v => !v)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
    <nav id="mobile-menu" className={`nav-mobile-menu ${open ? 'nav-mobile-menu--open' : ''}`} aria-label="Mobile navigation" inert={!open}>{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.text}</a>)}</nav>
  </header>;
}
