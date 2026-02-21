import { motion } from "framer-motion";
import { Hash, CalendarDays, TrendingUp, ShieldOff, Lightbulb } from "lucide-react";

const benefits = [
  { icon: Hash, text: "Your Life Path Number Meaning" },
  { icon: CalendarDays, text: "Lucky Dates & Powerful Numbers" },
  { icon: TrendingUp, text: "Career & Wealth Direction" },
  { icon: ShieldOff, text: "Hidden Blockages Revealed" },
  { icon: Lightbulb, text: "Personalized Action Guidance" },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            What You'll Discover in{" "}
            <span className="text-gradient">Your Free Session</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-5">
          {benefits.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-5 bg-card-mystic rounded-xl p-5 sm:p-6 hover:glow-border-subtle transition-all duration-300"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-primary/15 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-foreground font-medium text-base sm:text-lg">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
