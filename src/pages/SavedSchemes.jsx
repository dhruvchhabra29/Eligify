import "./SavedSchemes.css";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const SavedSchemes = () => {
  const { savedSchemes, toggleSaveScheme, clearSavedSchemes } = useAppContext();

  return (
    <div className="saved-page">
      <div className="saved-container">
        <div
          className="saved-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <span className="saved-badge">⭐ Saved schemes</span>
            <h1>Your saved Schemes</h1>
            <p>Access all bookmarked government schemes here.</p>
          </div>
          {savedSchemes.length > 0 && (
            <button
              onClick={clearSavedSchemes}
              style={{
                padding: "10px 20px",
                background: "#fee2e2",
                color: "#991b1b",
                border: "none",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Clear All
            </button>
          )}
        </div>

        {savedSchemes.length === 0 ? (
          <div className="empty-saved">
            <h2>No saved schemes yet</h2>
            <p>Save schemes from the results page to view them here.</p>
            <Link to="/questionnaire" className="browse-btn">
              Browse Schemes
            </Link>
          </div>
        ) : (
          <div className="saved-grid">
            {savedSchemes.map((scheme) => (
              <div className="saved-card" key={scheme.id}>
                <div className="saved-top">
                  <span className="saved-category">{scheme.category}</span>
                  <div className="saved-match">Saved</div>
                </div>
                <h2>{scheme.title}</h2>
                <p className="saved-description">{scheme.description}</p>
                <div className="saved-tags">
                  {scheme.tags?.map((tag, index) => (
                    <span key={index}>✓ {tag}</span>
                  ))}
                </div>
                <div className="saved-bottom">
                  <p className="saved-benefit">{scheme.benefit}</p>
                  <div className="saved-actions">
                    <button
                      className="remove-btn"
                      onClick={() => toggleSaveScheme(scheme)}
                    >
                      Remove
                    </button>
                    <Link to={`/scheme/${scheme.id}`} className="details-btn">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedSchemes;
