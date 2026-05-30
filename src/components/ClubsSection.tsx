import clubLectura from "@/assets/club-lectura.jpg";
import clubMuzica from "@/assets/club-muzica.jpg";
import clubEngleza from "@/assets/club-engleza.jpg";
import clubFilm from "@/assets/club-film.jpg";
import tabereUrbane from "@/assets/tabere-urbane.jpg";
import { BookOpen, Music, Globe, Film, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const clubs = [
  {
    title: "Club Lectura",
    slug: "lectura",
    desc: "Descopera lumea fascinanta a cartilor alaturi de alti pasionati de lectura.",
    image: clubLectura,
    icon: BookOpen,
    color: "bg-warm-gold-light",
  },
  {
    title: "Club Muzica",
    slug: "muzica",
    desc: "Invata sa canti la un instrument si bucura-te de muzica frumoasa.",
    image: clubMuzica,
    icon: Music,
    color: "bg-soft-green-light",
  },
  {
    title: "Club Engleza & Meditatii",
    slug: "engleza",
    desc: "Cursuri de engleza si meditatii pentru performanta scolara.",
    image: clubEngleza,
    icon: Globe,
    color: "bg-sky-blue-light",
  },
  {
    title: "Club Film",
    slug: "film",
    desc: "Vizionari de filme educative si discutii despre valorile prezentate.",
    image: clubFilm,
    icon: Film,
    color: "bg-warm-peach",
  },
  {
    title: "Tabere Urbane",
    slug: "tabere",
    desc: "Aventuri educationale si distractie in cadrul comunitatii locale.",
    image: tabereUrbane,
    icon: Sun,
    color: "bg-warm-gold-light",
  },
];

const ClubsSection = () => {
  return (
    <section id="cluburi" className="py-20 md:py-28 bg-green-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block font-display font-bold text-sm text-sky-blue uppercase tracking-widest mb-4">
            Activități
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Cluburi și Activități
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Alege activitatea care ți se potrivește și vino să faci parte din comunitatea noastră!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {clubs.map((club) => (
            <Link
              key={club.title}
              to={`/club/${club.slug}`}
              className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={club.image}
                  alt={club.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className={`absolute top-4 left-4 w-10 h-10 ${club.color} rounded-xl flex items-center justify-center`}>
                  <club.icon className="w-5 h-5 text-foreground" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">{club.title}</h3>
                <p className="font-body text-muted-foreground mb-4 text-sm leading-relaxed">{club.desc}</p>
                <span className="font-display font-bold text-sm text-warm-orange group-hover:text-warm-gold transition-colors mt-auto">
                  Află mai multe →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
