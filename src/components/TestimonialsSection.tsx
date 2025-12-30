import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Maria D.",
    service: "Dermopigmentare Sprâncene",
    text: "Ionela este o adevărată artistă! Sprâncenele mele arată perfect natural. M-am simțit în siguranță și îngrijită pe tot parcursul procedurii.",
    rating: 5,
  },
  {
    name: "Elena P.",
    service: "Dermopigmentare Buze",
    text: "Rezultatul a depășit toate așteptările mele. Buzele arată natural și perfect conturate. Recomand cu încredere!",
    rating: 5,
  },
  {
    name: "Andreea M.",
    service: "Curs Dermopigmentare",
    text: "Cel mai bun curs la care am participat! Ionela explică totul cu răbdare și profesionalism. Acum am încredere să lucrez cu clienții mei.",
    rating: 5,
  },
  {
    name: "Cristina V.",
    service: "Powder Brows",
    text: "După ani de zile în care îmi desenam sprâncenele zilnic, acum mă trezesc perfectă! Mulțumesc, Ionela!",
    rating: 5,
  },
  {
    name: "Diana R.",
    service: "Eyeliner PMU",
    text: "Privirea mea s-a transformat complet. Arată atât de natural încât nimeni nu își dă seama că e permanent.",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-gold" : "text-muted"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="testimoniale"
      className="section-padding bg-secondary/30"
      ref={ref}
    >
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
              Testimoniale
            </span>
            <div className="w-12 h-0.5 bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
            Ce Spun Clientele
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Încrederea și satisfacția clientelor mele sunt cea mai mare recompensă
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="text-gold/30 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Text */}
              <p className="text-foreground/80 mt-4 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-rose/20 rounded-full flex items-center justify-center">
                  <span className="text-rose-dark font-medium">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional testimonials row */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="text-gold/30 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Text */}
              <p className="text-foreground/80 mt-4 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-rose/20 rounded-full flex items-center justify-center">
                  <span className="text-rose-dark font-medium">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
