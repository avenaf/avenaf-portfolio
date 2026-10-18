import { Moon, Sun } from 'lucide-react';
import type { Theme } from '../hooks/useTheme';
export function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  return <button type="button" className="theme-toggle" onClick={onToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
    {theme === 'dark' ? <Sun size={18} strokeWidth={1.6} /> : <Moon size={18} strokeWidth={1.6} />}<span>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
  </button>;
}
