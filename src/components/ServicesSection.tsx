import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import eyebrowDetail from "@/assets/gallery/eyebrow-detail.jpg";
import lipsResults from "@/assets/gallery/lips-results.jpg";
import eyebrowsCloseup from "@/assets/gallery/eyebrows-closeup.jpg";
import eyebrowsGrid from "@/assets/gallery/eyebrows-grid.jpg";
import portrait from "@/assets/gallery/portrait.jpg";

const services = [
  {
    title: "Dermopigmentare Sprâncene",
    description:
      "Powder, soft sau natural - rezultate adaptate fizionomiei tale unice. Corectare asimetrii pentru armonie perfectă.",
    image: eyebrowDetail,
    features: ["Powder Brows", "Soft Natural", "Corectare Asimetrii"],
  },
  {
    title: "Dermopigmentare Buze",
    description:
      "Corectare culoare și volum optic natural. Contur delicat pentru buze perfect definite.",
    image: lipsResults,
    features: ["Corectare Culoare", "Volum Natural", "Contur Delicat"],
  },
  {
    title: "Dermopigmentare Eyeliner",
    description:
      "Lash line subtil sau eyeliner clasic pentru o privire intensificată natural.",
    image: eyebrowsCloseup,
    features: ["Lash Line", "Eyeliner Clasic", "Efect Natural"],
  },
  {
    title: "Îndepărtare Tatuaje Laser",
    description:
      "Tehnologie sigură și eficientă, fără cicatrici. Ședințe personalizate pentru rezultate optime.",
    image: eyebrowsGrid,
    features: ["Tehnologie Sigură", "Fără Cicatrici", "Ședințe Personalizate"],
  },
  {
    title: "Hollywood Carbon Peel",
    description:
      "Tratament laser pentru curățare profundă, luminozitate și efect anti-aging vizibil.",
    image: portrait,
    features: ["Curățare Profundă", "Luminozitate", "Anti-aging"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicii" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-gold" />
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Servicii
            </span>
            <div className="w-12 h-0.5 bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
            Servicii Premium
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fiecare procedură este realizată cu precizie și dedicare, folosind
            cele mai noi tehnici și materiale de calitate superioară.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-gold" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-rose hover:bg-rose-dark text-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-soft hover:shadow-medium"
          >
            Programează o consultație
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
