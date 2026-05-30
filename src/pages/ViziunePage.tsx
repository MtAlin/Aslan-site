import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import visionImage from "@/assets/vision-mission.jpg";
import { Sparkles, Heart, Users, Target, BookOpen, Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { icon: Sparkles, title: "Educație", desc: "Credem că educația este cheia unui viitor mai bun. Oferim acces gratuit la resurse educaționale de calitate pentru toți copiii și tinerii din comunitate." },
  { icon: Heart, title: "Credință", desc: "Valorile creștine autentice sunt fundamentul tuturor activităților noastre. Credem în puterea credinței de a transforma vieți și comunități." },
  { icon: Users, title: "Comunitate", desc: "Construim punți între generații, creând un spațiu sigur unde familiile cresc și se dezvoltă împreună." },
  { icon: Target, title: "Excelență", desc: "Ne dedicăm excelenței în tot ceea ce facem, de la selecția cărților până la calitatea programelor educaționale." },
  { icon: BookOpen, title: "Lectură", desc: "Promovăm lectura ca instrument fundamental de dezvoltare personală, intelectuală și spirituală." },
  { icon: Shield, title: "Integritate", desc: "Acționăm cu onestitate și transparență, fiind un model de integritate pentru cei pe care îi servim." },
];

const ViziunePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={visionImage} alt="Viziune și Misiune" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-display font-bold text-sm text-white/80 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi acasă
          </Link>
          <h1 className="font-display font-black text-3xl md:text-5xl text-white">Viziune & Misiune</h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-6">Misiunea Noastră</h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
            Misiunea Bibliotecii Aslan este să ofere acces gratuit la educație și resurse de calitate, 
            susținând dezvoltarea personală și spirituală a fiecărui copil, tânăr și familie 
            din comunitatea noastră, fundamentată pe valori creștine autentice.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
            Credem că fiecare copil merită șansa de a învăța, de a crește și de a-și descoperi potențialul, 
            indiferent de condițiile materiale. Prin cărți, cursuri și activități educative, dorim să plantăm 
            semințe de cunoaștere și înțelepciune care vor rodi în generațiile viitoare.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 py-4 my-10">
            <p className="font-body text-xl text-muted-foreground italic leading-relaxed">
              „Semeni un gând, culegi o faptă. Semeni o faptă, culegi un obicei. 
              Semeni un obicei, culegi un caracter. Semeni un caracter, culegi un destin."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-warm-gradient">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-6">Viziunea Noastră</h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
            Ne imaginăm o comunitate în care fiecare copil are acces la cărți și educație de calitate, 
            în care familiile sunt unite prin valori comune, și în care lectura și învățarea sunt 
            celebrate ca daruri prețioase. Biblioteca Aslan aspiră să fie un far de lumină, 
            cunoaștere și speranță în Târgoviște și dincolo de ea.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4">Valorile Noastre</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Principiile care ne ghidează fiecare acțiune și decizie.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-warm-gold" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ViziunePage;
