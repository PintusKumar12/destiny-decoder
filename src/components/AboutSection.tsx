import { motion } from "framer-motion";
import { Award, Users, ShieldCheck } from "lucide-react";
import guidePortrait from "@/assets/guide-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-mystic-gradient relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
            Meet Your <span className="text-gradient">Guide</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto bg-card-mystic rounded-2xl p-8 sm:p-10"
        >
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="w-36 h-36 sm:w-44 sm:h-44 shrink-0 rounded-full overflow-hidden border-2 border-primary/40 glow-border-subtle">
              <img
                src={guidePortrait}
                alt="Numerology and Kundli expert spiritual guide portrait"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                Pandit Raghav Sharma
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                A seasoned Numerologist and Kundli expert with over a decade of experience in guiding
                individuals toward clarity in career, love, finances, and life purpose. Committed to
                ethical practice and empowering you with actionable insights rooted in ancient wisdom
                and modern understanding.
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  <span>100+ Individuals Guided</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4 text-primary" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Ethical Practice</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
