import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { books } from "@/data/books";

const BooksSection = () => {
  // Show first 6 books on home page
  const featuredBooks = books.slice(0, 6);

  return (
    <section id="carti" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block font-display font-bold text-sm text-soft-green uppercase tracking-widest mb-4">
          Colecția Noastră
        </span>
        <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          Cărți Celebre
        </h2>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-14">
          Descoperă o colecție bogată de cărți care inspiră, educă și transformă
          vieți.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-14">
          {featuredBooks.map((book) => (
            <Link
              key={book.slug}
              to={`/carte/${book.slug}`}
              className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-left"
            >
              {/* Cover Image */}
              <div className="relative overflow-hidden bg-muted h-52 ">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-emerald-500 text-white px-2.5 py-1 rounded-full font-display font-bold text-[10px] uppercase tracking-wider shadow">
                  {book.availability}
                </span>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="font-display font-bold text-[11px] text-warm-orange uppercase tracking-wider mb-2">
                  {book.genre}
                </span>
                <h3 className="font-display font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
                  {book.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  de{" "}
                  <span className="font-semibold text-foreground">
                    {book.author}
                  </span>
                </p>

                {/* Star Rating */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(book.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-warm-gold text-warm-gold"
                    />
                  ))}
                </div>

                <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-2 mt-auto">
                  {book.shortDesc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/carti"
          className="inline-block border-2 border-primary text-foreground px-8 py-3 rounded-full font-display font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Vezi toate cărțile →
        </Link>
      </div>
    </section>
  );
};

export default BooksSection;
