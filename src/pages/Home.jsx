import "./Home.css";

import { Link } from "react-router-dom";

import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { isAuthenticated } = useAppContext();

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">🇮🇳 Government Scheme Finder</span>

          <h1 className="hero-title">
            Find the right
            <span className="gradient-text"> government schemes</span>
            <br />
            for you instantly.
          </h1>

          <p className="hero-subtitle">
            Eligify helps students, women, farmers, workers, senior citizens and
            families discover government schemes based on their profile.
          </p>

          <div className="hero-buttons">
            <Link
              to={isAuthenticated ? "/questionnaire" : "/signup"}
              className="primary-btn"
            >
              Check Eligibility
            </Link>

            <Link to="/about" className="secondary-btn">
              Learn More
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-card">
            <div className="hero-card-top">✨ AI Matched</div>

            <h3>PM Scholarship Scheme</h3>

            <p>92% Match based on your profile.</p>

            <div className="hero-progress">
              <div className="hero-progress-fill"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Why use Eligify?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>

            <h3>Smart Matching</h3>

            <p>Schemes matched according to your eligibility.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>

            <h3>Instant Results</h3>

            <p>Get personalised scheme recommendations instantly.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>

            <h3>Secure & Private</h3>

            <p>Your answers stay securely stored on your device.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to find your schemes?</h2>

        <p>Start your eligibility check in less than 2 minutes.</p>

        <Link
          to={isAuthenticated ? "/questionnaire" : "/signup"}
          className="primary-btn"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;
