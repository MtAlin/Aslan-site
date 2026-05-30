import { BookOpen, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Despre Noi", href: "/despre" },
  { label: "Cărți", href: "/carti" },
  { label: "Cluburi", href: "/cluburi" },
  { label: "Împrumut", href: "/imprumut" },
  { label: "Viziune", href: "/viziune" },
];

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-7 h-7 text-warm-gold" />
              <span className="font-display font-bold text-lg text-background">
                Biblioteca Aslan
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed text-background/60">
              Un loc special pentru educație, lectură și comunitate, 
              fundamentat pe valori creștine autentice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-background mb-4">Link-uri Rapide</h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-body text-sm text-background/60 hover:text-warm-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-background mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-warm-gold mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-background/60">
                  Class Park Residence, Târgoviște, România
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-warm-gold flex-shrink-0" />
                <span className="font-body text-sm text-background/60">+40 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-warm-gold flex-shrink-0" />
                <span className="font-body text-sm text-background/60">contact@bibliotecaaslan.ro</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-bold text-background mb-4">Social Media</h3>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-warm-gold/20 transition-colors"
                >
                  <Icon className="w-5 h-5 text-background/70" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center">
          <p className="font-body text-sm text-background/40">
            © 2025 Biblioteca Aslan. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
