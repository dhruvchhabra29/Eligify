import "./SchemeDetails.css";

import { useParams, Link } from "react-router-dom";
import schemes from "../data/schemes.json";

import { useAppContext } from "../context/AppContext";

const SchemeDetails = () => {
  const { id } = useParams();

  const { savedSchemes, toggleSaveScheme } = useAppContext();

  const scheme = schemes.find((item) => item.id === Number(id));

  if (!scheme) {
    return (
      <div className="page-container">
        <h1>Scheme not found</h1>
      </div>
    );
  }

  const isSaved = savedSchemes?.some((item) => item.id === scheme.id);

  return (
    <div className="details-page">
      <div className="details-wrapper">
        <Link to="/results" className="back-link">
          ← Back to matches
        </Link>

        <div className="details-hero">
          <div className="details-top">
            <span className="details-category">{scheme.category}</span>

            <span className="details-ministry">{scheme.ministry}</span>
          </div>

          <h1>{scheme.title}</h1>

          <p>{scheme.description}</p>

          <div className="details-actions">
            <a
              href={scheme.officialLink}
              target="_blank"
              rel="noreferrer"
              className="apply-btn"
            >
              Apply on official portal ↗
            </a>

            <button
              className={isSaved ? "saved-btn active" : "saved-btn"}
              onClick={() => toggleSaveScheme(scheme)}
            >
              {isSaved ? "Saved ✓" : "Save Scheme"}
            </button>
          </div>
        </div>

        <div className="info-card">
          <h3>✨ In simple words</h3>

          <p>{scheme.simpleWords}</p>
        </div>

        <div className="details-grid">
          <div className="info-card">
            <h3>✅ What you get</h3>

            <ul>
              <li>{scheme.benefit}</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>📄 Documents needed</h3>

            <ul>
              {scheme.documents?.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="info-card">
          <h3>🎯 Eligibility</h3>

          <ul>
            {scheme.eligibilityText?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-card">
          <h3>🚀 How to apply</h3>

          <div className="steps-list">
            {scheme.applySteps?.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{index + 1}</div>

                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeDetails;
