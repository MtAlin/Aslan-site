import visionImage from "@/assets/vision-mission.jpg";
import { Sparkles, Heart, Users } from "lucide-react";

const values = [
  { icon: Sparkles, title: "Educație", desc: "Dezvoltare personală prin lectură și învățare continuă" },
  { icon: Heart, title: "Credință", desc: "Valori creștine autentice care ghidează fiecare activitate" },
  { icon: Users, title: "Comunitate", desc: "Un loc sigur unde familiile cresc împreună" },
];

const VisionSection = () => {
  return (
    <section id="viziune" className="py-20 md:py-28 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={visionImage}
                alt="Viziune și misiune - carte deschisă cu porumbei"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-2xl bg-soft-green/20 -z-10" />
          </div>

          <div className="order-1 md:order-2">
            <span className="inline-block font-display font-bold text-sm text-warm-orange uppercase tracking-widest mb-4">
              Viziune & Misiune
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Construim un viitor mai bun, împreună
            </h2>

            <blockquote className="border-l-4 border-primary pl-5 py-2 mb-8">
              <p className="font-body text-lg text-muted-foreground italic leading-relaxed">
                „Semeni un gând, culegi o faptă. Semeni o faptă, culegi un obicei. 
                Semeni un obicei, culegi un caracter. Semeni un caracter, culegi un destin."
              </p>
            </blockquote>

            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              Misiunea noastră este să oferim acces gratuit la educație și resurse de calitate, 
              susținând dezvoltarea personală și spirituală a fiecărui copil, tânăr și familie 
              din comunitatea noastră, fundamentată pe valori creștine.
            </p>

            <div className="grid gap-4">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <v.icon className="w-5 h-5 text-warm-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">{v.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
