import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
export function Contact() {
  return <footer id="contact" className="section-shell contact-section">
    <div className="section-label"><span>04 / CONTACT</span><span className="section-label-line" /></div>
    <p className="eyebrow">ALWAYS EXPLORING NEW OPPORTUNITIES</p>
    <h2>Let’s Chat<span className="heading-period">.</span></h2>
    <div className="contact-bottom"><p>Curious conversations. Exciting collaborations. Novel ideas. I'd love to meet you.</p><div className="contact-links">
      <a href="mailto:avena.fan@berkeley.edu" aria-label="Email Avena" title="avena.fan@berkeley.edu"><Mail size={24} strokeWidth={1.4} /></a>
      <a href="https://www.linkedin.com/in/avenafan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={24} strokeWidth={1.4} /></a>
      <a href="https://github.com/avenaf" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={24} strokeWidth={1.4} /></a>
      <a className="contact-email" href="mailto:avena.fan@berkeley.edu">AVENA.FAN@BERKELEY.EDU <ArrowUpRight size={15} /></a>
    </div></div>
    <div className="footer-credits"><span>© {new Date().getFullYear()} AVENA FAN</span><span>BUILT WITH CURIOSITY</span><a href="#home">BACK TO TOP ↑</a></div>
  </footer>;
}
