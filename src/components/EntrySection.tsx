import { useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import type { PortfolioEntry } from '../data/content';

type Props = { id: string; index: string; title: string; entries: PortfolioEntry[]; projects?: boolean };
function Entry({ entry, isProject }: { entry: PortfolioEntry; isProject: boolean }) {
  const [opened, setOpened] = useState(false);
  const hasDetails = Boolean(entry.details || entry.images?.length || entry.link);
  return <article className={`portfolio-entry ${opened ? 'entry--open' : ''}`}>
    <button type="button" className="entry-trigger" aria-expanded={opened} aria-controls={`entry-panel-${entry.id}`} onClick={() => setOpened(s => !s)}>
      <span className="entry-main"><span className="entry-title">{entry.title}</span><span className="entry-date">{entry.dates}</span></span>
      <span className="entry-icon"><Plus size={19} strokeWidth={1.25} /></span>
    </button>
    {/* Desktop hover reveals the one-line teaser. Focus and tap reveal it on mobile. */}
    <div className="entry-teaser"><p>{entry.description}</p></div>
    <div id={`entry-panel-${entry.id}`} className="entry-details" inert={!opened}>
      <div className="entry-details-inner">
        {hasDetails ? <>
          {entry.details && <p>{entry.details}</p>}
          {entry.images && <div className="entry-images">{entry.images.map(im => <img loading="lazy" key={im.src} src={im.src} alt={im.alt} />)}</div>}
          {entry.link && <a href={entry.link} rel="noopener noreferrer" target="_blank">VIEW PROJECT <ArrowUpRight size={15} /></a>}
        </> : <p className="entry-placeholder">{isProject ? 'More on this project soon.' : 'Additional details coming soon.'}</p>}
      </div>
    </div>
  </article>;
}
export function EntrySection({ id, index, title, entries, projects = false }: Props) {
  return <section id={id} className="section-shell listing-section">
    <div className="section-label"><span>{index} / {title.toUpperCase()}</span><span className="section-label-line" /></div>
    <div className="listing-grid"><div className="listing-heading"><h2>{title}<span className="heading-period">.</span></h2></div>
      <div className="entries" aria-label={`${title} list`}>{entries.map(entry => <Entry key={entry.id} entry={entry} isProject={projects} />)}<p className="entries-note">HOVER TO EXPLORE · CLICK TO EXPAND</p></div>
    </div>
  </section>;
}
