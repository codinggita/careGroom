const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">CareGroom.</div>
          <p className="footer__tagline">Artisanal wellness, delivered to your door.</p>
        </div>
        <div className="footer__links">
          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Facial Treatments</a></li>
              <li><a href="#">Grooming</a></li>
              <li><a href="#">Spa Rituals</a></li>
              <li><a href="#">Hair Care</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2026 CareGroom. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
