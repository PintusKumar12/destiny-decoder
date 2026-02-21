import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onOpenModal: () => void;
}

const FinalCTA = ({ onOpenModal }: FinalCTAProps) => {
  return (
    <section className="py-20 sm:py-28 bg-mystic-gradient relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
            Your Destiny Is Written in Numbers.{" "}
            <span className="text-gradient">Are You Ready to Understand Yours?</span>
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Take the first step toward clarity, purpose, and direction.
          </p>
          <button
            onClick={onOpenModal}
            className="group bg-primary hover:bg-accent text-primary-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 glow-border hover:scale-105 animate-pulse-glow inline-flex items-center gap-3"
          >
            Reserve My Free Call Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
