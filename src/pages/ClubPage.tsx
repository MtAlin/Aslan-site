import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { ArrowLeft, BookOpen, Music, Globe, Film, Sun, Clock, MapPin, Users, Calendar } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import clubLectura from "@/assets/club-lectura.jpg";
import clubMuzica from "@/assets/club-muzica.jpg";
import clubEngleza from "@/assets/club-engleza.jpg";
import clubFilm from "@/assets/club-film.jpg";
import tabereUrbane from "@/assets/tabere-urbane.jpg";

const clubsData: Record<string, {
  title: string;
  desc: string;
  image: string;
  icon: typeof BookOpen;
  color: string;
  fullDescription: string;
  schedule: string;
  location: string;
  ageGroup: string;
  activities: string[];
}> = {
  lectura: {
    title: "Club Lectură",
    desc: "Descoperă lumea fascinantă a cărților alături de alți pasionați de lectură.",
    image: clubLectura,
    icon: BookOpen,
    color: "bg-warm-gold-light",
    fullDescription: "Clubul de Lectură al Bibliotecii Aslan este un spațiu cald și primitor unde copiii și tinerii descoperă magia cărților. În fiecare întâlnire, citim împreună povești care inspiră, discutăm despre personaje și lecții de viață, și ne dezvoltăm imaginația și vocabularul. Lecturile sunt alese cu grijă pentru a transmite valori pozitive și a stimula gândirea critică.",
    schedule: "Sâmbăta, 10:00 - 12:00",
    location: "Class Park Residence, Târgoviște",
    ageGroup: "7-18 ani",
    activities: ["Lecturi ghidate și discuții interactive", "Concursuri de lectură cu premii", "Întâlniri cu autori locali", "Ateliere de scriere creativă", "Recomandări personalizate de cărți"],
  },
  muzica: {
    title: "Club Muzică",
    desc: "Învață să cânți la un instrument și bucură-te de muzica frumoasă.",
    image: clubMuzica,
    icon: Music,
    color: "bg-soft-green-light",
    fullDescription: "Clubul de Muzică oferă copiilor și tinerilor oportunitatea de a descoperi bucuria muzicii. Sub îndrumarea unor instructori pasionați, participanții învață să cânte la diverse instrumente, să citească partituri și să aprecieze frumusețea muzicii. Muzica dezvoltă disciplina, creativitatea și sensibilitatea emoțională.",
    schedule: "Miercurea, 16:00 - 18:00",
    location: "Class Park Residence, Târgoviște",
    ageGroup: "8-18 ani",
    activities: ["Lecții de chitară, pian și percuție", "Cor și cântat vocal", "Recitaluri și concerte semestriale", "Apreciere muzicală și istorie a muzicii", "Ensembluri și duete"],
  },
  engleza: {
    title: "Club Engleză & Meditații",
    desc: "Cursuri de engleză și meditații pentru performanță școlară.",
    image: clubEngleza,
    icon: Globe,
    color: "bg-sky-blue-light",
    fullDescription: "Clubul de Engleză și Meditații sprijină copiii și tinerii în parcursul lor educațional. Oferim cursuri gratuite de limba engleză adaptate nivelului fiecărui participant, precum și meditații la materiile principale. Scopul nostru este ca fiecare copil să aibă șansa de a excela, indiferent de situația financiară a familiei.",
    schedule: "Marți și Joi, 15:00 - 17:00",
    location: "Class Park Residence, Târgoviște",
    ageGroup: "6-18 ani",
    activities: ["Cursuri de engleză pentru începători și avansați", "Meditații la matematică și română", "Pregătire pentru examene și evaluări", "Conversații și jocuri interactive în engleză", "Materiale educaționale gratuite"],
  },
  film: {
    title: "Club Film",
    desc: "Vizionări de filme educative și discuții despre valorile prezentate.",
    image: clubFilm,
    icon: Film,
    color: "bg-warm-peach",
    fullDescription: "Clubul de Film transformă ecranul într-un instrument educațional puternic. Selectăm cu grijă filme care transmit valori pozitive și teme relevante, urmate de discuții ghidate despre lecțiile învățate. Filmele sunt alese pentru a inspira curaj, bunătate, prietenie și responsabilitate.",
    schedule: "Vinerea, 17:00 - 19:30",
    location: "Class Park Residence, Târgoviște",
    ageGroup: "7-18 ani",
    activities: ["Vizionări de filme educative și artistice", "Discuții ghidate despre valori și teme", "Analiză de personaje și poveste", "Ateliere de scurt-metraj", "Sesiuni tematice lunare"],
  },
  tabere: {
    title: "Tabere Urbane",
    desc: "Aventuri educaționale și distracție în cadrul comunității locale.",
    image: tabereUrbane,
    icon: Sun,
    color: "bg-warm-gold-light",
    fullDescription: "Taberele Urbane ale Bibliotecii Aslan sunt experiențe memorabile care combină educația cu distracția. Pe parcursul vacanțelor, organizăm programe zilnice pline de activități creative, jocuri, excursii locale și momente de învățare prin experiență. Taberele creează amintiri frumoase și prietenii durabile.",
    schedule: "Vacanțe școlare, 9:00 - 16:00",
    location: "Class Park Residence și locații din Târgoviște",
    ageGroup: "6-16 ani",
    activities: ["Activități creative și artistice", "Jocuri sportive și în aer liber", "Excursii educative locale", "Ateliere de meșteșuguri", "Programe tematice săptămânale"],
  },
};

const ClubPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const club = slug ? clubsData[slug] : null;

  if (!club) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-20 container mx-auto px-4 text-center">
          <h1 className="font-display font-black text-3xl text-foreground mb-4">Club negăsit</h1>
          <Link to="/" className="font-display font-bold text-primary hover:underline">
            Înapoi acasă
          </Link>
        </div>
        <FooterSection />
      </div>
    );
  }

  const Icon = club.icon;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={club.image} alt={club.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link
            to="/#cluburi"
            className="inline-flex items-center gap-2 font-display font-bold text-sm text-white/80 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Toate cluburile
          </Link>
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 ${club.color} rounded-2xl flex items-center justify-center`}>
              <Icon className="w-7 h-7 text-foreground" />
            </div>
            <h1 className="font-display font-black text-3xl md:text-5xl text-white">{club.title}</h1>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                {club.fullDescription}
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-6">Ce facem în cadrul clubului</h2>
              <ul className="space-y-3 mb-8">
                {club.activities.map((activity) => (
                  <li key={activity} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="font-body text-muted-foreground">{activity}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/imprumut"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-display font-bold hover:scale-105 transition-transform"
              >
                Înscrie-te Gratuit
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-display font-bold text-foreground mb-4">Informații</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-warm-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-display font-bold text-sm text-foreground">Program</p>
                      <p className="font-body text-sm text-muted-foreground">{club.schedule}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-warm-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-display font-bold text-sm text-foreground">Locație</p>
                      <p className="font-body text-sm text-muted-foreground">{club.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-warm-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-display font-bold text-sm text-foreground">Vârstă</p>
                      <p className="font-body text-sm text-muted-foreground">{club.ageGroup}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-warm-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-display font-bold text-sm text-foreground">Înscriere</p>
                      <p className="font-body text-sm text-muted-foreground">Gratuită, locuri limitate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ClubPage;
