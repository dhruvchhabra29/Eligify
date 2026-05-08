import "./Results.css";

import { useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAppContext } from "../context/AppContext";

const categories = [
  "All",
  "Women & Child",
  "Pension",
  "Education",
  "Employment",
  "Business",
  "Housing",
  "Health",
  "Financial",
  "Agriculture",
];

const Results = () => {
  const navigate = useNavigate();

  const { matchedSchemes, savedSchemes, toggleSaveScheme } = useAppContext();

  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSchemes = useMemo(() => {
    return matchedSchemes.filter((scheme) => {
      const matchesSearch = scheme.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || scheme.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [matchedSchemes, search, activeCategory]);

  return (
    <div className="results-page">
      <div className="results-hero">
        <div className="results-badge">
          🌿 {filteredSchemes.length} schemes matched
        </div>

        <h1 className="results-title">
          Your <span>personalised</span> matches
        </h1>

        <p className="results-subtitle">
          Ranked by how well they fit your profile.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search schemes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="category-row">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="results-list">
        {filteredSchemes.length > 0 ? (
          filteredSchemes.map((scheme) => {
            const isSaved = savedSchemes.some((item) => item.id === scheme.id);

            return (
              <div className="scheme-card" key={scheme.id}>
                <div className="scheme-top">
                  <div className="scheme-left">
                    <div className="scheme-category">{scheme.category}</div>

                    <h2>{scheme.title}</h2>

                    <p className="scheme-description">{scheme.description}</p>
                  </div>

                  <div className="match-box">
                    <span>{scheme.matchPercentage || 100}%</span>

                    <p>match</p>
                  </div>
                </div>

                <div className="scheme-tags">
                  {scheme.tags?.map((tag, index) => (
                    <span key={index}>✓ {tag}</span>
                  ))}
                </div>

                <div className="scheme-bottom">
                  <p className="scheme-benefit">{scheme.benefit}</p>

                  <div className="scheme-actions">
                    <button
                      className={isSaved ? "save-btn saved" : "save-btn "}
                      onClick={() => toggleSaveScheme(scheme)}
                    >
                      {isSaved ? "Saved" : "Save"}
                    </button>

                    <button
                      className="details-btn"
                      onClick={() => navigate(`/scheme/${scheme.id}`)}
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty-results">
            <h2>No schemes found</h2>

            <p>Try changing your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
