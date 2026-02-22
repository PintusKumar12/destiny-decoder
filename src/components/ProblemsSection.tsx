import { motion } from "framer-motion";
import { Briefcase, Heart, Wallet, CalendarHeart, Compass } from "lucide-react";

const problems = [
  {
    icon: Briefcase,
    title: "Career Confusion",
    desc: "Feeling lost about your professional path? Unsure which direction aligns with your true potential?",
  },
  {
    icon: Heart,
    title: "Relationship Uncertainty",
    desc: "Struggling with love and connection? Wondering if you're with the right person or when love will arrive?",
  },
  {
    icon: Wallet,
    title: "Financial Instability",
    desc: "Experiencing money blocks or unexpected expenses? Your numbers reveal hidden patterns around wealth.",
  },
  {
    icon: CalendarHeart,
    title: "Marriage Delays",
    desc: "Waiting for the right time? Numerology and Kundli can reveal auspicious timings for your union.",
  },
  {
    icon: Compass,
    title: "Lack of Life Direction",
    desc: "Feeling stuck without a clear purpose? Your birth date holds the map to your destiny.",
  },
];

const ProblemsSection = () => {
  return (
    <section id="problems" className="py-20 sm:py-28 bg-mystic-gradient relative overflow-hidden">
      {/* Nebula effects */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Are You Facing These{" "}
            <span className="text-gradient">Challenges?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            You're not alone. These are the most common struggles that numerology and Kundli readings help resolve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card-mystic rounded-xl p-6 sm:p-8 hover:glow-border-subtle transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
