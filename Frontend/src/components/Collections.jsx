import { motion } from 'framer-motion';
import coll1 from '../assets/coll1.png';
import coll2 from '../assets/coll2.png';
import coll3 from '../assets/coll3.png';

const collections = [
  {
    id: 1,
    img: coll1,
    title: 'The Signature Facial',
    category: 'SKINCARE',
    price: 'From $180',
  },
  {
    id: 2,
    img: coll2,
    title: 'Master Barber Experience',
    category: 'GROOMING',
    price: 'From $120',
  },
  {
    id: 3,
    img: coll3,
    title: 'Full Spa Ritual',
    category: 'WELLNESS',
    price: 'From $350',
  },
];

const Collections = () => {
  return (
    <section className="collections" id="collections">
      <div className="container">
        <motion.div 
          className="collections__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="collections__header-text">
            <span className="section-eyebrow">CURATED COLLECTIONS</span>
            <h2 className="collections__title">
              Signature<br /><em>Services</em>
            </h2>
          </div>
          <motion.a 
            href="#all" 
            className="btn-ghost"
            whileHover={{ x: 10 }}
          >
            VIEW ALL
          </motion.a>
        </motion.div>

        <div className="collections__grid">
          {collections.map((item, i) => (
            <motion.div 
              className="collection-card" 
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <div className="collection-card__img-wrap">
                <motion.img 
                  src={item.img} 
                  alt={item.title} 
                  className="collection-card__img" 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="collection-card__info">
                <span className="collection-card__cat">{item.category}</span>
                <h3 className="collection-card__title">{item.title}</h3>
                <p className="collection-card__price">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
