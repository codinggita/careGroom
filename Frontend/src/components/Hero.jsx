import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import herobg from '../assets/herobg.png';

const Hero = () => {
  const tickerRef = useRef(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    let x = 0;
    const speed = 0.5;
    let raf;
    let isMounted = true;
    
    const animate = () => {
      if (!isMounted) return;
      if (tickerRef.current) {
        x -= speed;
        if (x <= -tickerRef.current.scrollWidth / 2) x = 0;
        tickerRef.current.style.transform = `translateX(${x}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    
    raf = requestAnimationFrame(animate);
    return () => {
      isMounted = false;
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero" id="explore" ref={targetRef}>
      <div className="hero__grid container">
        {/* Left Column: Text Content */}
        <motion.div 
          className="hero__content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ opacity }}
        >
          <h1 className="hero__title">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ display: 'block' }}
            >
              Your
            </motion.span>
            <motion.em
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{ display: 'block' }}
            >
              Sanctuary,
            </motion.em>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{ display: 'block' }}
            >
              Redefined.
            </motion.span>
          </h1>

          <motion.p 
            className="hero__subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Experience the zenith of personal care without leaving the comfort of your home. Master professionals curated for the most discerning clients.
          </motion.p>

          <motion.div 
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <a href="#reserve" className="hero__btn hero__btn--primary">
              BOOK YOUR AT-HOME SALON
            </a>
            <a href="#portfolio" className="hero__btn hero__btn--ghost">
              EXPLORE PORTFOLIO
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div 
          className="hero__image-col"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ y }}
        >
          <div className="hero__image-wrapper">
            <img src={herobg} alt="CareGroom hero" className="hero__image" />
            <div className="hero__image-overlay" />
          </div>
        </motion.div>
      </div>

      {/* Ticker */}
      <motion.div 
        className="hero__ticker-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <div className="hero__ticker" ref={tickerRef}>
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="hero__ticker-track">
              PREMIUM AT-HOME SPA SERVICE &nbsp;·&nbsp; SMOKE FREE SERVICE IN SAFE WORK &nbsp;·&nbsp; ARTISANAL GROOMING &nbsp;·&nbsp; LUXURY DELIVERED &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
