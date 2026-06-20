import { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/logo.png";

const navLinks = [
  { label: "Acasă", href: "/" },
  { label: "Despre Noi", href: "/despre" },
  { label: "Cărți", href: "/carti" },
  { label: "Cluburi", href: "/cluburi" },
  { label: "Împrumut", href: "/imprumut" },
  { label: "Viziune", href: "/viziune" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          {/* <BookOpen className="w-8 h-8 text-warm-gold transition-transform group-hover:scale-110" />
          <span className="font-display font-bold text-xl text-foreground">
            Biblioteca <span className="text-warm-gold">Aslan</span>
          </span> */}

          <img
            src={Logo}
            alt="Biblioteca Aslan Logo"
            className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
          />
          {/* <span className="font-display font-bold text-xl text-foreground">
            Biblioteca <span className="text-warm-gold">Aslan</span>
          </span> */}
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-body font-semibold text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:rounded-full after:bg-primary after:transition-transform after:duration-200 ${
                isActive(link.href)
                  ? "text-foreground after:scale-x-100"
                  : "text-muted-foreground hover:text-foreground after:scale-x-0 hover:after:scale-x-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/imprumut"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-display font-bold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-sm"
          >
            Cere Detalii
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-body font-semibold py-2.5 px-3 rounded-xl transition-colors ${
                  isActive(link.href)
                    ? "text-foreground bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/imprumut"
              className="mt-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-display font-bold text-sm text-center hover:opacity-90 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Cere Detalii
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
