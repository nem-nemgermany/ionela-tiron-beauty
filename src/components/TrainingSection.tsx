import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const trainingFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Cursuri Complete",
    description: "Programe de training comprehensive pentru toate nivelurile",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Mentorat Personalizat",
    description: "Ghidaj individual pentru dezvoltarea ta profesională",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Certificare",
    description: "Diplomă recunoscută la finalizarea cursului",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Suport Post-Curs",
    description: "Asistență continuă după finalizarea programului",
  },
];

const TrainingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="training" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gold" />
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Training & Educație
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
              Devino Expert în
              <span className="block text-gold mt-2">Dermopigmentare</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Împărtășesc cu drag cunoștințele acumulate în ani de experiență. 
              Cursurile mele combină tehnici avansate cu practică intensivă 
              pentru a te pregăti pentru o carieră de succes în industria beauty.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {trainingFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-rose/20 rounded-xl flex items-center justify-center text-rose-dark">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-rose hover:bg-rose-dark text-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-soft hover:shadow-medium"
            >
              Înscrie-te la curs
              <svg
                className="w-5 h-5"
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

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-rose/20 to-gold/20 rounded-3xl p-8 lg:p-12">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-background rounded-2xl p-6 shadow-soft text-center">
                  <span className="text-4xl font-serif text-gold block mb-2">50+</span>
                  <span className="text-sm text-muted-foreground">Cursanți absolvenți</span>
                </div>
                <div className="bg-background rounded-2xl p-6 shadow-soft text-center">
                  <span className="text-4xl font-serif text-gold block mb-2">100%</span>
                  <span className="text-sm text-muted-foreground">Satisfacție garantată</span>
                </div>
                <div className="bg-background rounded-2xl p-6 shadow-soft text-center">
                  <span className="text-4xl font-serif text-gold block mb-2">1:1</span>
                  <span className="text-sm text-muted-foreground">Training personalizat</span>
                </div>
                <div className="bg-background rounded-2xl p-6 shadow-soft text-center">
                  <span className="text-4xl font-serif text-gold block mb-2">24/7</span>
                  <span className="text-sm text-muted-foreground">Suport post-curs</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-rose/30 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
