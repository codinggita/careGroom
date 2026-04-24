import { motion } from 'framer-motion';
import journal1 from '../assets/journal1.png';
import journal2 from '../assets/coll1.png'; // Reusing for variety
import journal3 from '../assets/philosophy.png'; // Reusing for variety

const journalEntries = [
  {
    id: 1,
    image: journal1,
    date: 'OCTOBER 24, 2026',
    category: 'WELLNESS',
    title: 'The Art of Intentional Morning Rituals',
    excerpt: 'How to transform your daily routine into a sanctuary of peace and productivity through master-curated habits.',
  },
  {
    id: 2,
    image: journal2,
    date: 'OCTOBER 18, 2026',
    category: 'GROOMING',
    title: 'Precision in Every Detail: The Master Barber Guide',
    excerpt: 'Exploring the heritage and future of traditional grooming in the modern digital age.',
  },
  {
    id: 3,
    image: journal3,
    date: 'OCTOBER 12, 2026',
    category: 'LIFESTYLE',
    title: 'Curating Your Home for Ultimate Relaxation',
    excerpt: 'Small changes that make a significant impact on your mental well-being and home atmosphere.',
  },
];

const Journal = () => {
  return (
    <section className="journal" id="journal">
      <div className="container">
        <motion.div 
          className="journal__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="journal__header-text">
            <span className="section-eyebrow">THE JOURNAL</span>
            <h2 className="journal__title">
              Insights &<br /><em>Editorials</em>
            </h2>
          </div>
          <a href="#journal-all" className="journal__header-link">
            VIEW ALL STORIES
          </a>
        </motion.div>

        <div className="journal__layout">
          {/* Featured Entry */}
          <motion.article 
            className="journal-card journal-card--featured"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="journal-card__img-wrap">
              <motion.img 
                src={journalEntries[0].image} 
                alt={journalEntries[0].title} 
                className="journal-card__img"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <div className="journal-card__content">
              <div className="journal-card__meta">
                <span className="journal-card__cat">{journalEntries[0].category}</span>
                <span className="journal-card__date">{journalEntries[0].date}</span>
              </div>
              <h3 className="journal-card__title">{journalEntries[0].title}</h3>
              <p className="journal-card__excerpt">{journalEntries[0].excerpt}</p>
              <a href="#story" className="btn-text">READ ARTICLE</a>
            </div>
          </motion.article>

          {/* Secondary Entries */}
          <div className="journal__side">
            {journalEntries.slice(1).map((entry, i) => (
              <motion.article 
                className="journal-card journal-card--mini" 
                key={entry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <div className="journal-card__img-wrap">
                  <img src={entry.image} alt={entry.title} className="journal-card__img" />
                </div>
                <div className="journal-card__content">
                  <div className="journal-card__meta">
                    <span className="journal-card__cat">{entry.category}</span>
                  </div>
                  <h3 className="journal-card__title">{entry.title}</h3>
                  <a href="#story" className="btn-text">READ MORE</a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journal;
