import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BooksSection from "@/components/BooksSection";
import ClubsSection from "@/components/ClubsSection";
import BorrowSection from "@/components/BorrowSection";
import VisionSection from "@/components/VisionSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BooksSection />
      <ClubsSection />
      <BorrowSection />
      <VisionSection />
      <FooterSection />
    </div>
  );
};

export default Index;
