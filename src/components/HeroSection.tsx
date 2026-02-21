import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-hero-gradient opacity-70" />

      {/* Stars decoration */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-foreground/40 animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-secondary/60 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8"
          >
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Limited Free Slots Available Weekly</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            Unlock the Power Hidden in{" "}
            <span className="text-gradient">Your Birth Date.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Get a Free Personalized Numerology & Kundli Insight and discover clarity in
            love, career, wealth, and destiny.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <button
              onClick={onOpenModal}
              className="group bg-primary hover:bg-accent text-primary-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 glow-border hover:scale-105 inline-flex items-center gap-3"
            >
              Book My Free Destiny Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
