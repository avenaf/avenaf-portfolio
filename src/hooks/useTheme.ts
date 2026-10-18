import { useEffect, useState } from 'react';
export type Theme = 'light' | 'dark';
const STORAGE_KEY = 'avena-portfolio-theme';
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try { return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark'; }
    catch { return 'dark'; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try { localStorage.setItem(STORAGE_KEY, theme); } catch { /* storage unavailable */ }
  }, [theme]);
  return { theme, toggleTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark') };
}
