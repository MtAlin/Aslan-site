import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import aboutImage from "@/assets/about-library.jpg";
import {
  BookOpen,
  Users,
  Heart,
  Star,
  ArrowLeft,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: BookOpen,
    title: "Peste 1000 de Cărți",
    desc: "O colecție vastă și diversificată care acoperă toate vârstele și genurile — de la cărți pentru copii până la teologie, clasici și literatură universală.",
  },
  {
    icon: Users,
    title: "Cursuri Educaționale",
    desc: "Programe educaționale gratuite pentru copii, tineri și familii: limbi străine, meditații, muzică, lectură și multe altele.",
  },
  {
    icon: Heart,
    title: "Valori Creștine",
    desc: "Toate activitățile noastre sunt fundamentate pe valori creștine autentice — iubire, integritate, comunitate și excelență.",
  },
  {
    icon: Star,
    title: "Acces Gratuit",
    desc: "Credem că educația de calitate trebuie să fie accesibilă tuturor. Împrumuturile de cărți și cursurile sunt complet gratuite.",
  },
];

const stats = [
  { value: "1000+", label: "Cărți disponibile" },
  { value: "5", label: "Cluburi active" },
  { value: "100+", label: "Membri înscriși" },
  { value: "3+", label: "Ani de activitate" },
];

const DesprePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Banner */}
      <section className="pt-28 pb-16 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-display font-bold text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi acasă
          </Link>
          <div className="text-center">
            <span className="inline-block font-display font-bold text-sm text-warm-orange uppercase tracking-widest mb-4">
              Cine Suntem
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-foreground mb-4">
              O bună educație e fundația pentru un <br />
              <span className="text-gradient-warm">viitor de succes</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Biblioteca Aslan și Centrul Educațional este un loc special
              dedicat comunității din Târgoviște, unde copiii, tinerii și
              familiile pot descoperi bucuria lecturii, pot participa la cursuri
              educaționale gratuite și pot crește într-un mediu bazat pe valori
              creștine autentice.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <span className="inline-block font-display font-bold text-sm text-soft-green uppercase tracking-widest mb-4">
              Ce Oferim
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4">
              De ce să alegi Biblioteca Aslan?
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Suntem mai mult decât o bibliotecă — suntem un centru comunitar
              viu și în creștere.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-7 h-7 text-warm-gold" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-black text-4xl md:text-5xl text-warm-orange mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-green-gradient">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4">
              Vizitează-ne
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Ne găsești la adresa de mai jos. Vino și descoperă lumea cărților!
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                label: "Adresă",
                value: "Class Park Residence, Târgoviște, România",
              },
              {
                icon: Clock,
                label: "Program",
                value: "Luni–Sâmbătă, 9:00–18:00",
              },
              { icon: Phone, label: "Telefon", value: "+40 XXX XXX XXX" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-card rounded-2xl border border-border p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-warm-gold" />
                </div>
                <p className="font-display font-bold text-foreground mb-1">
                  {item.label}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/imprumut"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-display font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              Înscrie-te Gratuit
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default DesprePage;
