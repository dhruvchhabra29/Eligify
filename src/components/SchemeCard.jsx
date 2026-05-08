import { Bookmark, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SchemeCard = ({ scheme, onSave }) => {
  return (
    <div className="scheme-card">
      <div className="scheme-top">
        <span className="scheme-category">{scheme.category}</span>

        <button className="save-btn" onClick={() => onSave(scheme)}>
          <Bookmark size={18} />
        </button>
      </div>

      <h2>{scheme.title}</h2>

      <p>{scheme.description}</p>

      <div className="scheme-benefit">{scheme.benefit}</div>

      <Link to={`/scheme/${scheme.id}`} className="view-btn">
        View Details
        <ArrowRight size={18} />
      </Link>
    </div>
  );
};

export default SchemeCard;
