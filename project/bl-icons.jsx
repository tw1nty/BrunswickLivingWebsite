// Brunswick Living — line icons (Solar-ish, 1.5 stroke)
const Icon = ({ children, size = 24, strokeWidth = 1.5, style = {} }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
       fill="none" stroke="currentColor" strokeWidth={strokeWidth}
       strokeLinecap="round" strokeLinejoin="round" style={style}>
    {children}
  </svg>
);

const ArrowRight = (p) => <Icon {...p}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></Icon>;
const ArrowUpRight = (p) => <Icon {...p}><path d="M7 17 17 7"/><path d="M7 7h10v10"/></Icon>;
const Check = (p) => <Icon {...p}><path d="m5 12 5 5L20 7"/></Icon>;
const Close = (p) => <Icon {...p}><path d="M6 6l12 12"/><path d="M18 6 6 18"/></Icon>;
const Calendar = (p) => <Icon {...p}><rect x="3.5" y="5" width="17" height="15" rx="1"/><path d="M3.5 10h17"/><path d="M8 3v4"/><path d="M16 3v4"/></Icon>;
const Phone = (p) => <Icon {...p}><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></Icon>;
const Pin = (p) => <Icon {...p}><path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/></Icon>;
const Mail = (p) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m4 7 8 6 8-6"/></Icon>;

// industry icons — kept abstract / linear
const Home = (p) => <Icon {...p}><path d="M4 11 12 4l8 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-5h4v5"/></Icon>;
const Stethoscope = (p) => <Icon {...p}><path d="M7 4v6a4 4 0 0 0 8 0V4"/><path d="M11 14v2a4 4 0 0 0 8 0v-2"/><circle cx="19" cy="11" r="1.5"/></Icon>;
const Building = (p) => <Icon {...p}><rect x="5" y="4" width="14" height="16" rx="1"/><path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2"/></Icon>;
const Fork = (p) => <Icon {...p}><path d="M7 3v8a2 2 0 0 0 4 0V3"/><path d="M9 11v10"/><path d="M16 3v18"/><path d="M14 3v6h4"/></Icon>;
const Briefcase = (p) => <Icon {...p}><rect x="3" y="7" width="18" height="13" rx="1.5"/><path d="M9 7V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v2"/><path d="M3 13h18"/></Icon>;
const Scissors = (p) => <Icon {...p}><circle cx="6" cy="7" r="2.5"/><circle cx="6" cy="17" r="2.5"/><path d="m8 9 12 10"/><path d="m8 15 12-10"/></Icon>;
const Dumbbell = (p) => <Icon {...p}><path d="M3 9v6M5 7v10M19 7v10M21 9v6"/><path d="M7 12h10"/></Icon>;
const Tag = (p) => <Icon {...p}><path d="M3 12V4h8l10 10-8 8L3 12Z"/><circle cx="8" cy="9" r="1.5"/></Icon>;

Object.assign(window, {
  Icon, ArrowRight, ArrowUpRight, Check, Close, Calendar, Phone, Pin, Mail,
  Home, Stethoscope, Building, Fork, Briefcase, Scissors, Dumbbell, Tag
});
