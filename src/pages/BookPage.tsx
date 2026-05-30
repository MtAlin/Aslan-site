import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { ArrowLeft, BookOpen, Star, Calendar, Globe, Hash, Clock, CheckCircle } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { booksData } from "@/data/books";

const BookPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const book = slug ? booksData[slug] : null;

  // If the book slug is invalid, redirect to 404/NotFound
  if (!book) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-20 bg-warm-gradient">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Back Button */}
          <Link
            to="/carti"
            className="inline-flex items-center gap-2 font-display font-bold text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi la cărți
          </Link>

          {/* Book Details Grid */}
          <div className="grid md:grid-cols-3 gap-12 items-start bg-card border border-border rounded-3xl p-6 md:p-10 shadow-xl">
            {/* Book Cover (Left Column) */}
            <div className="md:col-span-1 space-y-6">
              <div className="relative aspect-[3/4.5] rounded-2xl overflow-hidden shadow-2xl border border-border group">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-emerald-500 text-white px-3.5 py-1.5 rounded-full font-display font-bold text-xs shadow-md tracking-wider flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {book.availability}
                </span>
              </div>

              {/* Quick Info Box */}
              <div className="bg-muted/50 rounded-2xl p-5 border border-border space-y-4">
                <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-wider mb-2">
                  Specificații
                </h4>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Hash className="w-4 h-4 text-warm-orange" />
                    <span>Pagini</span>
                  </div>
                  <span className="font-bold text-foreground">{book.pages}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-warm-orange" />
                    <span>An Publicare</span>
                  </div>
                  <span className="font-bold text-foreground">{book.year}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Globe className="w-4 h-4 text-warm-orange" />
                    <span>Limba</span>
                  </div>
                  <span className="font-bold text-foreground">{book.language}</span>
                </div>
              </div>
            </div>

            {/* Book Info Content (Right Column) */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <span className="inline-block font-display font-bold text-xs text-warm-orange bg-warm-gold-light/20 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
                  {book.genre}
                </span>
                <h1 className="font-display font-black text-3xl md:text-5xl text-foreground leading-tight mb-2">
                  {book.title}
                </h1>
                <p className="font-display text-xl md:text-2xl text-muted-foreground">
                  de <span className="font-bold text-foreground">{book.author}</span>
                </p>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(book.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warm-gold text-warm-gold" />
                ))}
                <span className="text-sm font-semibold text-muted-foreground ml-2">
                  5.0 (Recenzie Bibliotecă)
                </span>
              </div>

              <hr className="border-border" />

              {/* Book Descriptions */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-lg text-foreground">Despre această carte</h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  {book.fullDesc}
                </p>
              </div>

              {/* Borrow Instructions info */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/20">
                <Clock className="w-6 h-6 text-warm-orange flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-foreground">Împrumut Gratuit timp de 30 de zile</h4>
                  <p className="font-body text-xs text-muted-foreground mt-1 leading-relaxed">
                    Poți împrumuta această carte fără niciun cost. Vizitează-ne la sediu sau trimite o solicitare de înscriere gratuită direct de pe site.
                  </p>
                </div>
              </div>

              {/* Call to Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to={`/imprumut?book=${encodeURIComponent(book.title)}`}
                  className="inline-flex justify-center items-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-bold text-base hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-md text-center"
                >
                  Împrumută Cartea
                </Link>
                <Link
                  to="/carti"
                  className="inline-flex justify-center items-center border-2 border-border text-foreground hover:bg-muted px-8 py-4 rounded-full font-display font-bold text-base transition-colors text-center"
                >
                  Vezi alte cărți
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default BookPage;
