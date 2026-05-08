import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <Sparkles size={18} />
          </div>

          <h2>Eligify</h2>
        </div>

        <p>Find what you're eligible for — without the paperwork headache.</p>
      </div>

      <div className="footer-links">
        <div>
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/questionnaire">Check Eligibility</a>
          <a href="/saved">Saved Schemes</a>
        </div>

        <div>
          <h3>Resources</h3>

          <a href="/">Support</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
        </div>

        <div>
          <h3>Disclaimer</h3>

          <p>
            Eligify is a guidance platform. Always verify with official
            government portals before applying.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Eligify · Find What You're Eligible For
      </div>
    </footer>
  );
};

export default Footer;
