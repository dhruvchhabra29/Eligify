import { NavLink, Link } from "react-router-dom";

import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { currentUser, isAuthenticated, logout } = useAppContext();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <div className="logo-icon">✦</div>

        <h2>Eligify</h2>
      </Link>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to={isAuthenticated ? "/questionnaire" : "/signup"}>
          Check Eligibility
        </NavLink>

        <NavLink to={isAuthenticated ? "/saved" : "/login"}>Saved</NavLink>

        <NavLink to="/about">About</NavLink>
      </div>

      <div className="nav-buttons">
        {isAuthenticated ? (
          <>
            <div className="user-info">
              <span className="hello-text">Hello,</span>

              <span className="user-name">{currentUser?.name || "User"}</span>
            </div>

            <button className="secondary-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="login-btn">
              Login
            </Link>

            <Link to="/signup" className="start-btn">
              Get Started
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
