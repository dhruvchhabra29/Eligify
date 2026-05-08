import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { useAppContext } from "../context/AppContext";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAppContext();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("eligifyUser"));

    if (!savedUser) {
      setError("No account found. Please sign up first.");

      return;
    }

    if (
      savedUser.email === formData.email &&
      savedUser.password === formData.password
    ) {
      login(savedUser);

      navigate("/questionnaire");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="page-container">
      <div className="auth-card">
        <h1>Welcome Back</h1>

        <p>Login to continue your eligibility journey.</p>

        <form onSubmit={handleSubmit} className="auth-form">
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
            Login
          </button>
        </form>

        <p className="auth-switch">
          Haven't signed up yet? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
