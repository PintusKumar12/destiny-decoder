import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ZodiacWheel from "./ZodiacWheel";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />

      {/* Large planet/moon orbs like reference */}
      <div className="absolute top-[5%] left-[3%] w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-[hsl(275,60%,18%)] to-[hsl(270,40%,8%)] opacity-50 blur-[2px]" />
      <div className="absolute bottom-[10%] right-[2%] w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[hsl(258,50%,20%)] to-[hsl(270,30%,6%)] opacity-30 blur-[1px]" />
      <div className="absolute top-[60%] left-[15%] w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(258,60%,25%)] to-[hsl(270,40%,10%)] opacity-25" />

      {/* Nebula glow patches */}
      <div className="absolute top-[30%] left-[40%] w-[500px] h-[300px] rounded-full bg-[hsl(275,100%,20%)] opacity-[0.07] blur-[100px]" />
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[250px] rounded-full bg-[hsl(258,100%,25%)] opacity-[0.06] blur-[80px]" />

      {/* Dense star field */}
      {[...Array(60)].map((_, i) => {
        const size = Math.random() > 0.85 ? 2 : 1;
        return (
          <div
            key={i}
            className="absolute rounded-full bg-foreground/60 animate-twinkle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        );
      })}

      {/* Brighter accent stars */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`bright-${i}`}
          className="absolute w-1 h-1 rounded-full bg-foreground animate-twinkle"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
            animationDelay: `${Math.random() * 4}s`,
            boxShadow: "0 0 4px 1px hsl(0 0% 100% / 0.5)",
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
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
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
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

          {/* Right zodiac wheel */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <ZodiacWheel />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
