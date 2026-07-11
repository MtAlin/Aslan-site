import aboutImage from "@/assets/about-library.jpg";
import { BookOpen, Users, Heart } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Peste 2000 de Cărți",
    desc: "Colecție diversificată pentru toate vârstele",
  },
  {
    icon: Users,
    title: "Cursuri Educaționale",
    desc: "Programe pentru copii, tineri și familii",
  },
  {
    icon: Heart,
    title: "Valori Creștine",
    desc: "Fundație solidă pentru un viitor de succes",
  },
];

const AboutSection = () => {
  return (
    <section
      id="despre"
      className="pt-12 pb-20 md:pt-12 md:pb-28 bg-warm-gradient"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block font-display font-bold text-sm text-warm-orange uppercase tracking-widest mb-4">
              Despre Noi
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              O bună educație e fundația pentru un{" "}
              <span className="text-gradient-warm">viitor de succes</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Biblioteca Aslan și Centrul Educațional este un loc special
              dedicat comunității, unde copiii, tinerii și familiile pot
              descoperi bucuria lecturii, pot participa la cursuri educaționale
              gratuite și pot crește într-un mediu bazat pe valori creștine
              autentice.
            </p>
            <div className="grid gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/80 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-6 h-6 text-warm-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">
                      {f.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative md:pt-12">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Interiorul Bibliotecii Aslan"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-primary/20 -z-10" />
            {/* <div className="absolute -top-6  w-24 h-24 rounded-full bg-sky-blue/30 -z-10" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
