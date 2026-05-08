import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-page">
      <h1>404</h1>

      <p>The page you're looking for does not exist.</p>

      <Link to="/" className="primary-btn">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
