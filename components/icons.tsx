/* Íconos de marca (no incluidos en lucide-react recientes). */

export function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.5 3c.3 2.1 1.6 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.6-1v6.9c0 3.5-2.8 5.6-5.7 5.6-3.1 0-5.2-2.5-5.2-5.2 0-3.1 2.6-5.1 5.6-4.8v2.7c-.4-.1-.9-.2-1.3-.1-1.2.1-2 1-2 2.2 0 1.3 1 2.2 2.3 2.2 1.4 0 2.3-1 2.3-2.6V3h3.6z" />
    </svg>
  );
}
