import "./About.css";

import { Link } from "react-router-dom";

import { useAppContext } from "../context/AppContext";

const About = () => {
  const { isAuthenticated } = useAppContext();

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-content">
          <span className="about-badge">🇮🇳 About Eligify</span>

          <h1>Making government schemes easier to discover.</h1>

          <p>
            Eligify helps citizens find the most relevant government schemes
            based on education, occupation, income, gender, location, and family
            background.
          </p>

          <Link
            to={isAuthenticated ? "/questionnaire" : "/signup"}
            className="about-btn"
          >
            Try Eligify Now
          </Link>
        </div>
      </section>

      <section className="info-section">
        <div className="info-card">
          <h2>🎓 Scholarship Schemes</h2>

          <p>
            Discover scholarships for school students, college students,
            postgraduate students, and skill training.
          </p>
        </div>

        <div className="info-card">
          <h2>👩 Women Welfare</h2>

          <p>
            Find schemes focused on women empowerment, maternity support, LPG
            support, financial assistance, and girl child welfare.
          </p>
        </div>

        <div className="info-card">
          <h2>👨‍🌾 Farmer Support</h2>

          <p>
            Access agricultural schemes, crop support, subsidy programs,
            irrigation support, and farmer pensions.
          </p>
        </div>

        <div className="info-card">
          <h2>💼 Employment</h2>

          <p>
            Explore self-employment, startup funding, job training, internships,
            and skill development schemes.
          </p>
        </div>

        <div className="info-card">
          <h2>🏥 Health & Pension</h2>

          <p>
            Get healthcare, disability support, pension schemes, and family
            welfare assistance.
          </p>
        </div>

        <div className="info-card">
          <h2>⚡ Smart Matching</h2>

          <p>
            Eligify analyses your questionnaire responses and shows schemes
            ranked by eligibility match percentage.
          </p>
        </div>
      </section>

      <section className="steps-section">
        <h2>How it works</h2>

        <div className="steps-grid">
          <div className="step-card">
            <span>01</span>

            <h3>Create account</h3>

            <p>Sign up or log in to access eligibility matching.</p>
          </div>

          <div className="step-card">
            <span>02</span>

            <h3>Fill questionnaire</h3>

            <p>Answer questions about your profile and needs.</p>
          </div>

          <div className="step-card">
            <span>03</span>

            <h3>Get matches</h3>

            <p>View personalized schemes ranked by eligibility percentage.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
