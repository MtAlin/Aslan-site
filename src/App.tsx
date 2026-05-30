import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BooksPage from "./pages/BooksPage";
import ClubPage from "./pages/ClubPage";
import ViziunePage from "./pages/ViziunePage";
import DesprePage from "./pages/DesprePage";
import CluburiPage from "./pages/CluburiPage";
import ImprumutPage from "./pages/ImprumutPage";
import BookPage from "./pages/BookPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/carti" element={<BooksPage />} />
          <Route path="/club/:slug" element={<ClubPage />} />
          <Route path="/carte/:slug" element={<BookPage />} />
          <Route path="/viziune" element={<ViziunePage />} />
          <Route path="/despre" element={<DesprePage />} />
          <Route path="/cluburi" element={<CluburiPage />} />
          <Route path="/imprumut" element={<ImprumutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
