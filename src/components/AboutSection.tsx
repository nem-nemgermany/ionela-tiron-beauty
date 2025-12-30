import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutPortrait from "@/assets/about-portrait.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Specialist în dermopigmentare",
    "Trainer certificat internațional",
    "Experiență cu sute de cliente mulțumite",
    "Rezultate naturale și personalizate",
    "Tehnologii de ultimă generație",
  ];

  return (
    <section id="despre" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={aboutPortrait}
                  alt="Ionela Tiron - PMU Artist"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-rose/40 rounded-2xl -z-10" />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 bg-background rounded-2xl p-6 shadow-medium"
            >
              <div className="text-center">
                <span className="text-3xl font-serif text-gold">500+</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Clienți fericiți
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gold" />
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Despre mine
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
              Ionela Tiron
              <span className="block text-xl md:text-2xl text-muted-foreground font-sans font-light mt-2">
                PMU Artist & Trainer
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Cred că fiecare femeie merită să se simtă frumoasă și sigură pe ea, 
              fără compromisuri. Cu pasiune pentru perfecțiune și atenție la detalii, 
              transform viziunea fiecărei cliente într-o realitate de frumusețe naturală.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-foreground/90">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-gold transition-colors group"
            >
              <span>Hai să ne cunoaștem</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
