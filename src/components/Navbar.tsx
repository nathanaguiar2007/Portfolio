import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";

const navigation = [
  { label: "Work", to: "/#work" },
  { label: "Experience", to: "/experience" },
  { label: "Certificates", to: "/#certificates" },
  { label: "Design", to: "/design" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, []);

  return (
    <header className={`site-header${scrolled || open ? " is-scrolled" : ""}`}>
      <nav
        className="navbar"
        aria-label="Main navigation"
        onKeyDown={(event) => {
          if (event.key === "Escape" && open) {
            setOpen(false);
            toggle.current?.focus();
          }
        }}
      >
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          Nathan Aguiar<span aria-hidden="true">.</span>
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-controls="navigation-links"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}{" "}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <ul
          id="navigation-links"
          className={`navigation-links${open ? " is-open" : ""}`}
        >
          {navigation.map(({ label, to }) => (
            <li key={label}>{to.includes("#") ? (
              <Link key={label} to={to} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ) : (
              <NavLink key={label} to={to} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            )}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
