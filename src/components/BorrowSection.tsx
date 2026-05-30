import { MapPin, BookOpen, FileText, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: MapPin,
    step: "1",
    title: "Vizitează-ne",
    desc: "Vino la Biblioteca Aslan din Class Park Residence, Târgoviște.",
  },
  {
    icon: BookOpen,
    step: "2",
    title: "Alege o carte",
    desc: "Răsfoiește colecția noastră și alege cartea care te inspiră.",
  },
  {
    icon: FileText,
    step: "3",
    title: "Completează formularul",
    desc: "Un formular simplu de împrumut, fără bătăi de cap.",
  },
  {
    icon: Clock,
    step: "4",
    title: "Bucură-te de lectură",
    desc: "Ai la dispoziție 30 de zile să te bucuri de cartea aleasă.",
  },
];

const BorrowSection = () => {
  return (
    <section id="imprumut" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block font-display font-bold text-sm text-warm-orange uppercase tracking-widest mb-4">
            Simplu și Gratuit
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Cum Împrumuți o Carte?
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Procesul este simplu, rapid și complet gratuit. Urmează acești pași:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((s) => (
            <div key={s.step} className="text-center group">
              <div className="relative mx-auto w-20 h-20 rounded-2xl bg-warm-gold-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="w-8 h-8 text-warm-orange" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/imprumut"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-display font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            Înscriere Gratuită
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BorrowSection;
