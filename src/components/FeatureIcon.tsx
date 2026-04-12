type FeatureIconName =
  | "daytime"
  | "evening"
  | "fullDay"
  | "weddings"
  | "events"
  | "surprise"
  | "roaming"
  | "party"
  | "acoustic"
  | "support"
  | "venueReady"
  | "tailored"
  | "celebration"
  | "banknote";

type FeatureIconProps = {
  name: FeatureIconName;
  className?: string;
};

const baseClassName =
  "inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line-soft)] bg-[var(--page-ivory)] text-[var(--color-brand-gold)]";

export default function FeatureIcon({
  name,
  className = "",
}: FeatureIconProps) {
  const classes = `${baseClassName} ${className}`.trim();

  switch (name) {
    case "daytime":
      return (
        <span className={classes} aria-hidden="true">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2.5v2.5" />
            <path d="M12 19v2.5" />
            <path d="M4.9 4.9l1.8 1.8" />
            <path d="M17.3 17.3l1.8 1.8" />
            <path d="M2.5 12H5" />
            <path d="M19 12h2.5" />
            <path d="M4.9 19.1l1.8-1.8" />
            <path d="M17.3 6.7l1.8-1.8" />
          </svg>
        </span>
      );
    case "evening":
      return (
        <span className={classes} aria-hidden="true">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 15.5A7.5 7.5 0 0 1 8.5 5 8 8 0 1 0 19 15.5Z" />
            <path d="M16.5 4.5v2" />
            <path d="M15.5 5.5h2" />
          </svg>
        </span>
      );
    case "fullDay":
      return (
        <span className={classes} aria-hidden="true">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="8" />
            <path d="M12 7v5l3 2" />
          </svg>
        </span>
      );
    case "weddings":
      return (
        <span className={classes} aria-hidden="true">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20s-6.5-4.3-8.6-8.2A5.3 5.3 0 0 1 12 5.8a5.3 5.3 0 0 1 8.6 6C18.5 15.7 12 20 12 20Z" />
          </svg>
        </span>
      );
    case "events":
      return (
        <span className={classes} aria-hidden="true">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="7" width="20" height="13" rx="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <path d="M2 13h20" />
          </svg>
        </span>
      );
    case "surprise":
      return (
        <span className={classes} aria-hidden="true">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v4" />
            <path d="M12 18v4" />
            <path d="M4.93 4.93l2.83 2.83" />
            <path d="M16.24 16.24l2.83 2.83" />
            <path d="M2 12h4" />
            <path d="M18 12h4" />
            <path d="M4.93 19.07l2.83-2.83" />
            <path d="M16.24 7.76l2.83-2.83" />
          </svg>
        </span>
      );
    case "roaming":
      return (
        <span className={classes} aria-hidden="true">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z" />
            <path d="M19 10a7 7 0 0 1-14 0" />
            <path d="M12 17v4" />
            <path d="M8 21h8" />
          </svg>
        </span>
      );
    case "party":
      return (
        <span className={classes} aria-hidden="true">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18V9" />
            <path d="M10 18V6" />
            <path d="M14 18v-4" />
            <path d="M18 18V8" />
            <path d="M4 18h16" />
          </svg>
        </span>
      );
    case "acoustic":
      return (
        <span className={classes} aria-hidden="true">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18V6l10-2v12" />
            <circle cx="6.5" cy="18" r="2.5" />
            <circle cx="16.5" cy="16" r="2.5" />
          </svg>
        </span>
      );
    case "support":
      return (
        <span className={classes} aria-hidden="true">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 21s7-3.5 7-10V5l-7-2-7 2v6c0 6.5 7 10 7 10Z" />
            <path d="m9.5 12 1.7 1.7 3.3-3.7" />
          </svg>
        </span>
      );
    case "venueReady":
      return (
        <span className={classes} aria-hidden="true">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 20h16" />
            <path d="M6 20V9l6-4 6 4v11" />
            <path d="M9 20v-5h6v5" />
          </svg>
        </span>
      );
    case "tailored":
      return (
        <span className={classes} aria-hidden="true">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
            <circle cx="9" cy="6" r="2" fill="var(--page-ivory)" />
            <circle cx="15" cy="12" r="2" fill="var(--page-ivory)" />
            <circle cx="10" cy="18" r="2" fill="var(--page-ivory)" />
          </svg>
        </span>
      );
    case "banknote":
      return (
        <span className={classes} aria-hidden="true">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <circle cx="12" cy="12" r="2" />
            <path d="M6 12h.01" />
            <path d="M18 12h.01" />
          </svg>
        </span>
      );
    case "celebration":
      return (
        <span className={classes} aria-hidden="true">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 22h8" />
            <path d="M12 11v11" />
            <path d="M7 2h10l-2 9H9Z" />
            <path d="M9 11a3 3 0 0 0 6 0" />
          </svg>
        </span>
      );
    default:
      return null;
  }
}
