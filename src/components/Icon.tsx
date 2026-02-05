type Props = {
  name: "phone" | "menu" | "close" | "check" | "spark" | "pin" | "mail" | "arrow";
  size?: number;
};

export function Icon({ name, size = 18 }: Props) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" as const };

  if (name === "menu") {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    );
  }
  if (name === "close") {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    );
  }
  if (name === "phone") {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2c-9.6-.8-17-8.2-17.8-17.8A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z"/>
      </svg>
    );
  }
  if (name === "mail") {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    );
  }
  if (name === "pin") {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11z" />
        <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </svg>
    );
  }
  if (name === "check") {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    );
  }
  if (name === "spark") {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l1.2 4.1L17 7.3l-3.8 1.2L12 12l-1.2-3.5L7 7.3l3.8-1.2L12 2z" />
        <path d="M5 14l.7 2.4L8 17l-2.3.7L5 20l-.7-2.3L2 17l2.3-.6L5 14z" />
        <path d="M19 13l.7 2.4L22 16l-2.3.7L19 19l-.7-2.3L16 16l2.3-.6L19 13z" />
      </svg>
    );
  }
  if (name === "arrow") {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    );
  }
  return null;
}
