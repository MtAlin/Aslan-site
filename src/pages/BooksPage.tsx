import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { books } from "@/data/books";

const BooksPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-24 pb-20 bg-warm-gradient">
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
              Colecția Completă
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Cărți și Autori Celebri
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Explorează întreaga noastră colecție de autori care au marcat istoria literaturii și a credinței.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {books.map((book) => (
              <Link
                key={book.slug}
                to={`/carte/${book.slug}`}
                className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Book Cover Image Container */}
                <div className="relative aspect-[3/4.5] overflow-hidden bg-muted">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="font-display font-bold text-sm text-white">Vezi detalii carte →</span>
                  </div>
                  <span className="absolute top-3 right-3 bg-emerald-500 text-white px-2.5 py-1 rounded-full font-display font-bold text-[10px] uppercase tracking-wider shadow">
                    {book.availability}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="font-display font-bold text-[11px] text-warm-orange uppercase tracking-wider mb-2">
                    {book.genre}
                  </span>
                  <h3 className="font-display font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    de <span className="font-semibold text-foreground">{book.author}</span>
                  </p>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(book.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-warm-gold text-warm-gold" />
                    ))}
                  </div>

                  <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-3 mt-auto">
                    {book.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default BooksPage;
