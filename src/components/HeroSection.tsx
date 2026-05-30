import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-library.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Copii citind într-o bibliotecă caldă și luminoasă"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 animate-fade-up leading-tight">
          BIBLIOTECA ASLAN
          <span className="block text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-warm-gold-light">
            și Centru Educațional
          </span>
        </h1>
        <p
          className="font-body text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Peste 1000 de Cărți Gratuite și Cursuri Educaționale pentru Copii, Tineri și Familii
        </p>
        <Link
          to="/imprumut"
          className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-display font-bold text-lg hover:scale-105 transition-transform shadow-lg animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          CERE DETALII
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
