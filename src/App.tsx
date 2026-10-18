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
  return <>
    <Navigation />
    <main><Hero /><Introduction /><EntrySection id="experience" title="Experience" index="02" entries={experience} /><EntrySection id="projects" title="Projects" index="03" entries={projects} projects /></main>
    <Contact />
    <ThemeToggle theme={theme} onToggle={toggleTheme} />
  </>;
}
