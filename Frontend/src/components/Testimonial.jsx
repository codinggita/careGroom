const testimonials = [
  {
    id: 1,
    quote: "CareGroom transformed my Sunday mornings. The professionals are exceptional and the experience feels like a five-star spa — right in my living room.",
    author: "Alexandra M.",
    role: "Creative Director, NYC",
  },
  {
    id: 2,
    quote: "I've tried every luxury grooming service in London. Nothing comes close to the precision and care CareGroom delivers. It's simply unmatched.",
    author: "James R.",
    role: "Finance Executive, London",
  },
  {
    id: 3,
    quote: "The attention to detail is extraordinary. My skin has never looked better and the booking process is completely seamless.",
    author: "Priya S.",
    role: "Art Consultant, Dubai",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <span className="section-eyebrow">CLIENT STORIES</span>
        <h2 className="testimonials__title">
          Voices of<br /><em>Excellence</em>
        </h2>
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <p className="testimonial-card__quote">"{t.quote}"</p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__name">{t.author}</span>
                <span className="testimonial-card__role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
