import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { useAppContext } from "../context/AppContext";

const Signup = () => {
  const navigate = useNavigate();

  const { login } = useAppContext();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUser = JSON.parse(localStorage.getItem("eligifyUser"));

    if (existingUser?.email === formData.email) {
      setError("Account already exists with this email");

      return;
    }

    localStorage.setItem("eligifyUser", JSON.stringify(formData));

    login(formData);

    navigate("/questionnaire");
  };

  return (
    <div className="page-container">
      <div className="auth-card">
        <h1>Create Account</h1>

        <p>Sign up to find government schemes matched for you.</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
            />

            <button
              type="button"
              className="show-password-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {error && <p className="error-text">{error}</p>}

          <button className="primary-btn" type="submit">
            Sign Up
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
