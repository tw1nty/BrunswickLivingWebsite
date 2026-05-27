export function Icon({ children, size = 24, strokeWidth = 1.5, style, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (props) => (
  <Icon {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Icon>
);

export const Check = (props) => (
  <Icon {...props}>
    <path d="m5 12 5 5L20 7" />
  </Icon>
);

export const Close = (props) => (
  <Icon {...props}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </Icon>
);

export const Calendar = (props) => (
  <Icon {...props}>
    <rect x="3.5" y="5" width="17" height="15" rx="1" />
    <path d="M3.5 10h17" />
    <path d="M8 3v4" />
    <path d="M16 3v4" />
  </Icon>
);

export const Phone = (props) => (
  <Icon {...props}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </Icon>
);

export const Pin = (props) => (
  <Icon {...props}>
    <path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </Icon>
);

export const Mail = (props) => (
  <Icon {...props}>
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="m4 7 8 6 8-6" />
  </Icon>
);

export const HomeIcon = (props) => (
  <Icon {...props}>
    <path d="M4 11 12 4l8 7" />
    <path d="M6 10v10h12V10" />
    <path d="M10 20v-5h4v5" />
  </Icon>
);

export const Stethoscope = (props) => (
  <Icon {...props}>
    <path d="M7 4v6a4 4 0 0 0 8 0V4" />
    <path d="M11 14v2a4 4 0 0 0 8 0v-2" />
    <circle cx="19" cy="11" r="1.5" />
  </Icon>
);

export const Building = (props) => (
  <Icon {...props}>
    <rect x="5" y="4" width="14" height="16" rx="1" />
    <path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2" />
  </Icon>
);

export const Fork = (props) => (
  <Icon {...props}>
    <path d="M7 3v8a2 2 0 0 0 4 0V3" />
    <path d="M9 11v10" />
    <path d="M16 3v18" />
    <path d="M14 3v6h4" />
  </Icon>
);

export const Briefcase = (props) => (
  <Icon {...props}>
    <rect x="3" y="7" width="18" height="13" rx="1.5" />
    <path d="M9 7V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v2" />
    <path d="M3 13h18" />
  </Icon>
);

export const Scissors = (props) => (
  <Icon {...props}>
    <circle cx="6" cy="7" r="2.5" />
    <circle cx="6" cy="17" r="2.5" />
    <path d="m8 9 12 10" />
    <path d="m8 15 12-10" />
  </Icon>
);

export const Dumbbell = (props) => (
  <Icon {...props}>
    <path d="M3 9v6M5 7v10M19 7v10M21 9v6" />
    <path d="M7 12h10" />
  </Icon>
);

export const Tag = (props) => (
  <Icon {...props}>
    <path d="M3 12V4h8l10 10-8 8L3 12Z" />
    <circle cx="8" cy="9" r="1.5" />
  </Icon>
);
