/** Shared layout + surface for About → Projects (navy band). */
export const navySectionShell =
  "py-24 lg:py-32 px-6 lg:px-0 bg-navy-50 dark:bg-navy-950/50";

export const navySectionStart =
  `${navySectionShell} border-t border-navy-100/90 dark:border-navy-800/60`;

export const navySectionEnd =
  `${navySectionShell} border-b border-navy-100/90 dark:border-navy-800/60`;

export const navyHeading =
  "font-display text-h2 font-bold tracking-tight text-navy-800 dark:text-navy-100";

export const navySubheading =
  "text-label uppercase tracking-wide text-navy-600 dark:text-navy-300 font-medium";

/** Focus ring inside About → Projects (not global accent focus-ring). */
export const navyFocusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-50 dark:focus-visible:ring-offset-navy-950/80 rounded";
