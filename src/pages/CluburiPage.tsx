import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import {
  BookOpen,
  Music,
  Globe,
  Film,
  Sun,
  ArrowLeft,
  Clock,
  MapPin,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import clubLectura from "@/assets/club-lectura.jpg";
import clubMuzica from "@/assets/club-muzica.jpg";
import clubEngleza from "@/assets/club-engleza.jpg";
import clubFilm from "@/assets/club-film.jpg";
import tabereUrbane from "@/assets/tabere-urbane.jpg";

const clubs = [
  {
    title: "Club Lectură",
    slug: "lectura",
    desc: "Descoperă lumea fascinantă a cărților alături de alți pasionați de lectură. Discuții interactive, concursuri și ateliere de scriere creativă.",
    image: clubLectura,
    icon: BookOpen,
    color: "bg-warm-gold-light",
    schedule: "Sâmbăta, 10:00 - 12:00",
    location: "Class Park Residence",
    ageGroup: "7-18 ani",
  },
  {
    title: "Club Muzică",
    slug: "muzica",
    desc: "Învață să cânți la un instrument și bucură-te de muzica frumoasă. Lecții de chitară, pian, percuție și cor.",
    image: clubMuzica,
    icon: Music,
    color: "bg-soft-green-light",
    schedule: "Miercurea, 16:00 - 18:00",
    location: "Class Park Residence",
    ageGroup: "8-18 ani",
  },
  {
    title: "Club Engleză & Meditații",
    slug: "engleza",
    desc: "Cursuri gratuite de engleză adaptate fiecărui nivel și meditații la materiile principale pentru performanță școlară.",
    image: clubEngleza,
    icon: Globe,
    color: "bg-sky-blue-light",
    schedule: "Marți și Joi, 15:00 - 17:00",
    location: "Class Park Residence",
    ageGroup: "6-18 ani",
  },
  {
    title: "Club Film",
    slug: "film",
    desc: "Vizionări de filme educative și discuții ghidate despre valori, personaje și lecții de viață.",
    image: clubFilm,
    icon: Film,
    color: "bg-warm-peach",
    schedule: "Vinerea, 17:00 - 19:30",
    location: "Class Park Residence",
    ageGroup: "7-18 ani",
  },
  {
    title: "Tabere Urbane",
    slug: "tabere",
    desc: "Aventuri educaționale și distracție în cadrul comunității locale. Activități creative, excursii și programe tematice.",
    image: tabereUrbane,
    icon: Sun,
    color: "bg-warm-gold-light",
    schedule: "Vacanțe școlare, 9:00 - 16:00",
    location: "Class Park & Târgoviște",
    ageGroup: "6-16 ani",
  },
];

const CluburiPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-28 pb-16 bg-green-gradient">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-display font-bold text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi acasă
          </Link>

          <div className="text-center mb-14">
            <span className="inline-block font-display font-bold text-sm text-soft-green uppercase tracking-widest mb-4">
              Activități
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Cluburi & Activități
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Alege activitatea care ți se potrivește și vino să faci parte din
              comunitatea noastră! Toate cluburile sunt gratuite și deschise
              tuturor.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {clubs.map((club) => (
              <Link
                key={club.slug}
                to={`/club/${club.slug}`}
                className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-muted">
                  <img
                    src={club.image}
                    alt={club.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div
                    className={`absolute top-4 left-4 w-11 h-11 ${club.color} rounded-xl flex items-center justify-center shadow-md`}
                  >
                    <club.icon className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h2 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {club.title}
                  </h2>
                  <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                    {club.desc}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-col gap-2 mb-5 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-warm-gold" />
                      <span className="font-body">{club.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-warm-gold" />
                      <span className="font-body">{club.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-warm-gold" />
                      <span className="font-body">{club.ageGroup}</span>
                    </div>
                  </div>

                  <span className="mt-auto w-full text-center bg-primary text-primary-foreground py-2.5 rounded-full font-display font-bold text-sm hover:opacity-90 transition-all duration-200">
                    Află mai multe →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-warm-gradient">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4">
            Gata să te înscrii?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8">
            Toate activitățile sunt gratuite. Locurile sunt limitate, înscrie-te
            acum!
          </p>
          <Link
            to="/imprumut"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-display font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            Înscrie-te Gratuit
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default CluburiPage;
