import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { MapPin, BookOpen, FileText, Clock, Phone, Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const steps = [
  {
    icon: MapPin,
    step: "1",
    title: "Vizitează-ne",
    desc: "Vino la Biblioteca Aslan din Class Park Residence, Târgoviște. Te așteptăm cu drag!",
    color: "bg-warm-gold-light",
  },
  {
    icon: BookOpen,
    step: "2",
    title: "Alege o carte",
    desc: "Răsfoiește colecția noastră de peste 1000 de cărți și alege cartea care te inspiră.",
    color: "bg-soft-green-light",
  },
  {
    icon: FileText,
    step: "3",
    title: "Completează formularul",
    desc: "Un formular simplu de împrumut, fără birocrație și complet gratuit.",
    color: "bg-sky-blue-light",
  },
  {
    icon: Clock,
    step: "4",
    title: "Bucură-te de lectură",
    desc: "Ai la dispoziție 30 de zile să te bucuri de cartea aleasă, cu posibilitate de prelungire.",
    color: "bg-warm-peach",
  },
];

const included = [
  "Acces gratuit la toate cărțile din colecție",
  "Participare la cluburi și activități educaționale",
  "Meditații și cursuri de engleză gratuite",
  "Împrumut pentru 30 de zile cu prelungire",
  "Acces la tabere urbane în vacanțe",
  "Newsletter cu noutăți și evenimente",
];

const ImprumutPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const requestedBook = queryParams.get("book");

  const defaultMessage = requestedBook 
    ? `Doresc să împrumut cartea: "${requestedBook}"` 
    : "";

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
              Simplu & Gratuit
            </span>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Cum Împrumuți o Carte?
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Procesul este simplu, rapid și complet gratuit. Urmează acești
              pași și bucură-te de lectură!
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center group">
                <div
                  className={`relative mx-auto w-20 h-20 rounded-2xl ${s.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <s.icon className="w-8 h-8 text-warm-orange" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm flex items-center justify-center shadow">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-green-gradient">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block font-display font-bold text-sm text-soft-green uppercase tracking-widest mb-4">
              Beneficii
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4">
              Ce primești la înscriere?
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
              Înscrierea este gratuită și îți deschide accesul la tot ce oferim.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-soft-green mt-0.5 flex-shrink-0" />
                <span className="font-body text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Registration Form CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Details */}
            <div>
              <span className="inline-block font-display font-bold text-sm text-warm-orange uppercase tracking-widest mb-4">
                Contactează-ne
              </span>
              <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-6">
                Vino sau sună-ne
              </h2>
              <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                Poți veni direct la bibliotecă sau ne poți contacta telefonic /
                prin email pentru mai multe informații despre înscriere și
                programul nostru.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: MapPin,
                    label: "Adresă",
                    value:
                      "Str Madrid 2 F, Class Park Residence, Targoviste, Romania",
                  },
                  {
                    icon: Clock,
                    label: "Program",
                    value: "Luni–Sâmbătă, 9:00–18:00",
                  },
                  { icon: Phone, label: "Telefon", value: "+40 778 785 593" },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "contact@aslan.ro",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-warm-gold" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-sm text-foreground">
                        {item.label}
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simple Contact Card */}
            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                Înscrie-te Gratuit
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Completează câmpurile de mai jos și te vom contacta în cel mai
                scurt timp.
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="font-display font-bold text-sm text-foreground block mb-1.5">
                    Nume complet
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Ion Popescu"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  />
                </div>
                <div>
                  <label className="font-display font-bold text-sm text-foreground block mb-1.5">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    placeholder="Ex: 0712 345 678"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  />
                </div>
                <div>
                  <label className="font-display font-bold text-sm text-foreground block mb-1.5">
                    Vârsta copilului (opțional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 12 ani"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  />
                </div>
                <div>
                  <label className="font-display font-bold text-sm text-foreground block mb-1.5">
                    Mesaj (opțional)
                  </label>
                  <textarea
                    rows={3}
                    defaultValue={defaultMessage}
                    placeholder="Orice întrebare sau detaliu..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-full font-display font-bold text-base hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-md"
                >
                  Trimite Cererea
                </button>
                <p className="font-body text-xs text-muted-foreground text-center">
                  Gratuitate garantată. Te contactăm în 24h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ImprumutPage;
