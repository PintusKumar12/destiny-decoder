import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya M.",
    text: "I was confused about my career for years. After the numerology session, I finally understood my life path and took bold steps. Within months, I landed my dream role.",
    role: "Marketing Professional",
  },
  {
    name: "Arjun S.",
    text: "The Kundli reading was eye-opening. It pinpointed marriage timing and relationship patterns I had been blind to. Truly grateful for the guidance.",
    role: "Business Owner",
  },
  {
    name: "Sneha R.",
    text: "I felt stuck in every aspect of life. The clarity call gave me direction and confidence. The personalised report was surprisingly accurate.",
    role: "Teacher",
  },
  {
    name: "Vikram D.",
    text: "Financial decisions always stressed me out. Understanding my wealth numbers changed everything. I'm now investing with confidence and purpose.",
    role: "Software Engineer",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Voices of <span className="text-gradient">Transformation</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-card-mystic rounded-2xl p-8 sm:p-10 text-center"
          >
            <div className="flex justify-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-foreground text-base sm:text-lg leading-relaxed mb-6 italic">
              "{testimonials[current].text}"
            </p>
            <p className="font-display font-semibold text-foreground">
              {testimonials[current].name}
            </p>
            <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
