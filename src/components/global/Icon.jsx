function Svg({ children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

const icons = {
  inventory: (
    <Svg>
      <path d="M21 8.5 12 3 3 8.5v7L12 21l9-5.5v-7Z" />
      <path d="M3 8.5 12 14l9-5.5" />
      <path d="M12 14v7" />
    </Svg>
  ),
  employees: (
    <Svg>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3.5" />
      <path d="M22 21v-2a3.5 3.5 0 0 0-2.8-3.4" />
      <path d="M16.5 3.7a3.5 3.5 0 0 1 0 6.6" />
    </Svg>
  ),
  attendance: (
    <Svg>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </Svg>
  ),
  leave: (
    <Svg>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M8 3.5v3M16 3.5v3M3.5 10h17" />
    </Svg>
  ),
  payroll: (
    <Svg>
      <rect x="3.5" y="6" width="17" height="12.5" rx="2" />
      <path d="M3.5 10h17" />
      <path d="M8 15.2h2.2M14.2 15.2H16" />
    </Svg>
  ),
  workflow: (
    <Svg>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <circle cx="12" cy="18" r="2.4" />
      <path d="M8.2 7.4 10.4 16M15.8 7.4 13.6 16" />
    </Svg>
  ),
  custom: (
    <Svg>
      <path d="m12 3 2.1 4.3 4.7.7-3.4 3.3.8 4.7L12 13.8 7.8 16l.8-4.7-3.4-3.3 4.7-.7L12 3Z" />
    </Svg>
  ),
  simple: (
    <Svg>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.2 12.3 2.4 2.4 5.2-5.4" />
    </Svg>
  ),
  scalable: (
    <Svg>
      <path d="M4 20V10M4 20h10" />
      <path d="M8 16V7M8 16h9" />
      <path d="M13 12V4h8v8" />
    </Svg>
  ),
  sliders: (
    <Svg>
      <path d="M4 7h16M4 12h16M4 17h16" />
      <circle cx="9" cy="7" r="1.7" fill="currentColor" />
      <circle cx="15" cy="12" r="1.7" fill="currentColor" />
      <circle cx="11" cy="17" r="1.7" fill="currentColor" />
    </Svg>
  ),
  secure: (
    <Svg>
      <path d="M12 3.5 5 6.5v5.2c0 4.4 3 7.4 7 8.8 4-1.4 7-4.4 7-8.8V6.5l-7-3Z" />
      <path d="m9.2 12.2 1.9 1.9 3.8-3.9" />
    </Svg>
  ),
  web: (
    <Svg>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.6 3.6 5.5 3.6 8.5s-1.2 5.9-3.6 8.5c-2.4-2.6-3.6-5.5-3.6-8.5s1.2-5.9 3.6-8.5Z" />
    </Svg>
  ),
  operations: (
    <Svg>
      <path d="M8 7V5.8A2.8 2.8 0 0 1 10.8 3h2.4A2.8 2.8 0 0 1 16 5.8V7" />
      <rect x="4" y="7" width="16" height="13.5" rx="2" />
      <path d="M4 12h16" />
    </Svg>
  ),
  users: (
    <Svg>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="3.5" />
      <path d="M22 21v-2a3.6 3.6 0 0 0-3-3.5" />
      <path d="M16.2 3.8a3.5 3.5 0 0 1 0 6.4" />
    </Svg>
  ),
  roles: (
    <Svg>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5.5 19.2a6.5 6.5 0 0 1 13 0" />
      <path d="M17.5 11.2 20 13.7l-2.5 2.5" />
    </Svg>
  ),
  reports: (
    <Svg>
      <path d="M6 20V10M12 20V4M18 20v-7" />
    </Svg>
  ),
  notifications: (
    <Svg>
      <path d="M7 9.5a5 5 0 0 1 10 0c0 5.2 2 6.6 2 6.6H5s2-1.4 2-6.6Z" />
      <path d="M10 18.8a2 2 0 0 0 4 0" />
    </Svg>
  ),
  data: (
    <Svg>
      <ellipse cx="12" cy="6.5" rx="7.5" ry="2.8" />
      <path d="M4.5 6.5v4c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-4" />
      <path d="M4.5 10.5v4c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-4" />
    </Svg>
  ),
  modules: (
    <Svg>
      <rect x="3.5" y="3.5" width="7.4" height="7.4" rx="1.4" />
      <rect x="13.1" y="3.5" width="7.4" height="7.4" rx="1.4" />
      <rect x="3.5" y="13.1" width="7.4" height="7.4" rx="1.4" />
      <rect x="13.1" y="13.1" width="7.4" height="7.4" rx="1.4" />
    </Svg>
  ),
  subscription: (
    <Svg>
      <rect x="3.5" y="6" width="17" height="12" rx="2" />
      <path d="M3.5 10h17M8 14h4" />
    </Svg>
  ),
  architecture: (
    <Svg>
      <rect x="8.5" y="3.5" width="7" height="5.2" rx="1.2" />
      <rect x="3.5" y="15.3" width="7" height="5.2" rx="1.2" />
      <rect x="13.5" y="15.3" width="7" height="5.2" rx="1.2" />
      <path d="M12 8.7v3.2M7 15.3v-3.4h10v3.4" />
    </Svg>
  ),
}

export default function Icon({ name, className = '' }) {
  return <span className={`icon ${className}`.trim()}>{icons[name]}</span>
}
