import { useEffect, useState } from 'react';
import { Contact } from './components/Contact';
import { EntrySection } from './components/EntrySection';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { experience, projects } from './data/content';
import { useTheme } from './hooks/useTheme';
import './styles/global.css';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [expandedEntryId, setExpandedEntryId] = useState<string | null>(null);
  useEffect(() => {
    if (!expandedEntryId) return;
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (event.target instanceof Element && !event.target.closest('.entry--open')) {
        setExpandedEntryId(null);
      }
    };
    document.addEventListener('pointerdown', closeOnOutsidePointer);
    return () => document.removeEventListener('pointerdown', closeOnOutsidePointer);
  }, [expandedEntryId]);
  const toggleEntry = (entryId: string) => setExpandedEntryId(current => current === entryId ? null : entryId);
  return <>
    <Navigation />
    <main><Hero /><Introduction /><EntrySection id="experience" title="Experience" index="02" entries={experience} expandedEntryId={expandedEntryId} onToggleEntry={toggleEntry} /><EntrySection id="projects" title="Projects" index="03" entries={projects} expandedEntryId={expandedEntryId} onToggleEntry={toggleEntry} /></main>
    <Contact />
    <ThemeToggle theme={theme} onToggle={toggleTheme} />
  </>;
}
