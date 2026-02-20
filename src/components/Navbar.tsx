import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Journeys", to: "/journeys" },
    { label: "About", to: "/about" },
    { label: "Philosophy", to: "/philosophy" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-beige/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 h-16">
        {/* Logo */}
        <Link to="/" className="display-serif-italic text-foreground text-lg tracking-tight">
          PuraVida
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link ${location.pathname === l.to ? "opacity-100" : "opacity-60 hover:opacity-100"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/begin-here" className="nav-link border border-foreground px-4 py-2 hover:bg-foreground hover:text-primary-foreground transition-colors duration-200">
            Begin Here
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-foreground transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-beige border-t border-border px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link text-base" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link to="/begin-here" className="nav-link text-base border-b border-foreground pb-1 self-start" onClick={() => setOpen(false)}>
            Begin Here
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
