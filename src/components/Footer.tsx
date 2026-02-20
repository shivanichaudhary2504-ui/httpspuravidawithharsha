import { Link } from "react-router-dom";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import logo from "../assets/logo-white.png"

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground px-6 md:px-16 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div>
          <img src={logo} alt="puravida-logo" className="w-20 h-20" />
          <p className="body-sans text-sm opacity-50 mt-2">Dubai · UAE</p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="eyebrow opacity-50 mb-2">Navigate</p>
          {[
            { label: "Journeys", to: "/journeys" },
            { label: "About", to: "/about" },
            { label: "Philosophy", to: "/philosophy" },
            { label: "Begin Here", to: "/begin-here" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="nav-link opacity-60 hover:opacity-100 transition-opacity">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <p className="eyebrow opacity-50 mb-2">Connect</p>

          <a
            href="https://wa.me/"
            className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
          >
            <MessageCircle size={16} strokeWidth={1.5} />
            <span className="nav-link">WhatsApp</span>
          </a>

          <a
            href="https://www.instagram.com/puravida.withharsha/"
            className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
          >
            <Instagram size={16} strokeWidth={1.5} />
            <span className="nav-link">Instagram</span>
          </a>

          <a
            href="mailto:hello@puravida.com"
            className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
          >
            <Mail size={16} strokeWidth={1.5} />
            <span className="nav-link">hello@puravida.com</span>
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-16 pt-8 flex justify-between items-center">
        <p className="body-sans text-xs opacity-30">© 2024 PuraVida with Harsha. All rights reserved.</p>
        <p className="display-serif-italic text-sm opacity-30">Travel not to escape, but to return to yourself.</p>
      </div>
    </footer>
  );
};

export default Footer;
