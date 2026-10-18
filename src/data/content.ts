export type PortfolioEntry = {
  id: string;
  title: string;
  dates: string;
  description: string;
  /** Optional detailed content. Add it later; only rendered when the user clicks. */
  details?: string;
  images?: { src: string; alt: string }[];
  link?: string;
};

export const experience: PortfolioEntry[] = [
  { id: 'corvinus', title: 'Growth @ Corvinus Labs', dates: 'Jun 2026 - Oct 2026', description: 'VLA tools for wet-lab automation' },
  { id: 'horizon', title: 'Business Development & Design @ Horizon Healthtech', dates: 'May 2025 - Aug 2025', description: 'Healthcare interoperability' },
  { id: 'evt', title: 'Marketing @ Educational Vision Technologies (EVT.ai)', dates: 'Jan 2024 - May 2024', description: 'Accessibility technology to universities' },
  { id: 'opera', title: 'Development @ Seattle Opera', dates: 'Jun 2022 - Aug 2022', description: 'Sponsorship portfolio management and strategy' },
];

export const projects: PortfolioEntry[] = [
  { id: 'merck', title: 'Life Sciences Strategy Consulting @ Merck', dates: 'Aug 2025 - Dec 2025', description: 'LDL-C management strategy' },
  { id: 'perplexity', title: 'GTM/Product @ Perplexity', dates: 'Jan 2025 - May 2025', description: 'University engagement via product development for student workflows' },
  { id: 'cochlear', title: 'Product @ Cochlear', dates: 'Jan 2025 - May 2025', description: 'Patient management platform redesign' },
  { id: 'roche', title: 'Business Strategy @ Roche', dates: 'Jan 2025 - May 2025', description: 'Integration of population health specialists' },
  { id: 'paloma', title: 'Growth & Design @ Paloma', dates: 'Aug 2024 - Jan 2025', description: 'Startup monetization and pricing strategy' },
  { id: 'nielsen', title: 'Digital Strategy @ Nielsen', dates: 'Aug 2024 - Dec 2024', description: 'Building a centralized knowledge hub' },
  { id: 'walmart', title: 'Data Science @ Walmart', dates: 'Jan 2024 - May 2024', description: 'ML for operations optimization' },
  { id: 'synopsys', title: 'Operations @ Synopsys', dates: 'Jan 2024 - May 2024', description: 'Transitioning engineering teams to InnerSource culture' },
  { id: 'wbd', title: 'Product Strategy @ Warner Bros. Discovery', dates: 'Aug 2023 - Dec 2023', description: 'Engendering brand loyalty' },
];

/**
 * Keep each photo's original aspect ratio (no crop). Replace URLs with /photos/your-file.jpg
 * after adding images to the public/photos/ directory.
 * The widths of these images differ deliberately, creating the editorial collage.
 */
export const heroPhotos = [
  { src: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=max&w=920&q=82', alt: 'Clouds in the sky', width: 290, x: -33, y: -10, z: 0, speed: 0.9 },
  { src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=max&w=800&q=82', alt: 'Ocean surface', width: 205, x: 25, y: 14, z: -440, speed: 1.06 },
  { src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=max&w=840&q=82', alt: 'Mountain landscape', width: 220, x: -5, y: 30, z: -880, speed: 0.94 },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=max&w=900&q=82', alt: 'Woodland light', width: 245, x: 39, y: -25, z: -1320, speed: 1.04 },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=max&w=850&q=82', alt: 'Mountain under stars', width: 230, x: -40, y: 25, z: -1760, speed: 0.98 },
  { src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=max&w=760&q=82', alt: 'Flowers in sunlight', width: 190, x: 4, y: -32, z: -2200, speed: 1.1 },
  { src: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=max&w=920&q=82', alt: 'Night sky', width: 260, x: 32, y: 34, z: -2640, speed: 0.93 },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=max&w=820&q=82', alt: 'Snow-capped mountain range', width: 215, x: -16, y: -25, z: -3080, speed: 1.02 },
];

export const portrait = {
  src: '/headshot.jpg',
  alt: 'Avena smiling outdoors in a garden',
};
