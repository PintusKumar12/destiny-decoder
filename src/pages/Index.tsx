import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import LeadCaptureModal from "@/components/LeadCaptureModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <main className="min-h-screen bg-background">
      <Header onOpenModal={openModal} />
      <HeroSection onOpenModal={openModal} />
      <ProblemsSection />
      <BenefitsSection />
      <AboutSection />
      <TestimonialsSection />
      <FinalCTA onOpenModal={openModal} />
      <Footer />
      <LeadCaptureModal isOpen={modalOpen} onClose={closeModal} />
    </main>
  );
};

export default Index;
