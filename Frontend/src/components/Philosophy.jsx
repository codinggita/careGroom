import { motion } from 'framer-motion';
import philosophyImg from '../assets/philosophy.png';

const Philosophy = () => {
  return (
    <section className="philosophy" id="philosophy">
      <div className="container philosophy__inner">
        <motion.div 
          className="philosophy__text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow">OUR PHILOSOPHY</span>
          <h2 className="philosophy__title">
            The Art of<br />
            <motion.em
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Intentional
            </motion.em><br />
            Luxury.
          </h2>
          <p className="philosophy__body">
            We believe that true luxury is not about excess — it's about precision, care, and the highest standards of craft. Every CareGroom professional is handpicked and trained to deliver an experience that feels personal, elevated, and completely effortless for you.
          </p>
          <motion.a 
            href="#collections" 
            className="btn-outline"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            DISCOVER OUR CRAFT
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="philosophy__image"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={philosophyImg} alt="CareGroom philosophy" />
          <div className="philosophy__image-overlay" />
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
