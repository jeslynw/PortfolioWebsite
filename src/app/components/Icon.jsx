/**
 * Small stroke icons for the sidebar tree — one per section, so the nav reads
 * at a glance instead of repeating the same leaf. 15px, 1.5 stroke, currentColor.
 */
const paths = {
  overview: (
    <>
      <path d="M2.5 6.2 8 2.5l5.5 3.7v6.3a.8.8 0 0 1-.8.8H3.3a.8.8 0 0 1-.8-.8Z" />
      <path d="M6.3 13.3V8.8h3.4v4.5" />
    </>
  ),
  about: (
    <>
      <circle cx="8" cy="5.5" r="2.6" />
      <path d="M3 13.5c0-2.5 2.2-4 5-4s5 1.5 5 4" />
    </>
  ),
  now: (
    <>
      <circle cx="8" cy="8" r="5.5" />
      <path d="M8 4.8V8l2.4 1.6" />
    </>
  ),
  education: (
    <>
      <path d="M1.8 6.2 8 3.3l6.2 2.9L8 9.1Z" />
      <path d="M4.4 7.6v3.2c0 .9 1.6 1.8 3.6 1.8s3.6-.9 3.6-1.8V7.6" />
    </>
  ),
  experience: (
    <>
      <rect x="2.5" y="3" width="11" height="10" rx="1.2" />
      <path d="M5.8 3V1.8" />
      <path d="M10.2 3V1.8" />
      <path d="M2.5 6.2h11" />
    </>
  ),
  toolkit: (
    <>
      <path d="M5.6 5.4 2.8 8.2l2.8 2.8" />
      <path d="M10.4 5.4l2.8 2.8-2.8 2.8" />
      <path d="M9.1 3.6 6.9 12.4" />
    </>
  ),
  projects: (
    <>
      <rect x="2.4" y="2.6" width="4.6" height="4.6" rx="1" />
      <rect x="9" y="2.6" width="4.6" height="4.6" rx="1" />
      <rect x="2.4" y="9.2" width="4.6" height="4.6" rx="1" />
      <rect x="9" y="9.2" width="4.6" height="4.6" rx="1" />
    </>
  ),
  contact: (
    <>
      <rect x="2" y="3.6" width="12" height="8.8" rx="1.4" />
      <path d="M2.6 4.8 8 8.7l5.4-3.9" />
    </>
  ),
};

export default function Icon({ name, className = "" }) {
  const body = paths[name];
  if (!body) return null;

  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 h-[15px] w-[15px] ${className}`}
      aria-hidden="true"
    >
      {body}
    </svg>
  );
}
