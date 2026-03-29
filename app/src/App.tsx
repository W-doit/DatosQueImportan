import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DisclaimerModal } from "@/components/DisclaimerModal";
import Index from "./pages/Index.tsx";
import Espana from "./pages/Espana.tsx";
import Subvenciones from "./pages/Subvenciones.tsx";
import Justicia from "./pages/Justicia.tsx";
import Candidatos from "./pages/Candidatos.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Header />
      <DisclaimerModal />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/espana" element={<Espana />} />
          <Route path="/subvenciones" element={<Subvenciones />} />
          <Route path="/justicia" element={<Justicia />} />
          <Route path="/candidatos" element={<Candidatos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
