import { Helmet } from "react-helmet";
import axios from "axios";
import { useState } from "react";
import { RestAPI } from "../../config/Api";
import { isAuthenticated } from "../../config/Auth";
import { Link, Navigate } from "react-router-dom";
import Joi from "joi";
import LoginWithGoogle from "../Home/components/LoginWithGoogle";
// import "./Login.css"; // Assuming you add the CSS here

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Check log in status
  if (isAuthenticated()) {
    window.location.href = "/dashboard";
  }

  // Validation schema using Joi
  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email address",
    }),
    password: Joi.string().min(6).required().messages({
      "string.empty": "Password is required",
      "string.min": "Password should have at least 6 characters",
    }),
  });

  // Handle user submit
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    // Validate form data
    const { error } = schema.validate({ email, password }, { abortEarly: false });

    if (error) {
      const errorMessages = {};
      error.details.forEach((detail) => {
        errorMessages[detail.path[0]] = detail.message;
      });
      setErrors(errorMessages);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${RestAPI}/auth/Login`, {
        email,
        password,
      });
      console.log(response.data)
      // alert(response.data)
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userName", response.data?.userName);

      window.location.href = "/dashboard";
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error logging in:", error.response);
    }
  };

  return (
    <>
      <Helmet>
        <title>ideax | Log in</title>
      </Helmet>

      <div className="container">
        <div className="login-page">
          <form onSubmit={handleSubmit}>
            <h2>Welcome Back!</h2>

            <div className="form-group">
              <input
                type="email"
                placeholder="Email.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Password.."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>

            <div className="form-group">
              <button
                className="btn"
                type="submit"
              >
                {!loading ? "Log in" : <div className="spinner"></div>}
              </button>
            </div>

            <div className="register-prompt">
              <h3>Don't have an account?</h3>
              <Link to="/register" className="register-link">Register now</Link>
            </div>
              {/* <LoginWithGoogle /> */}

          </form>
        </div>
      </div>
    </>
  );
}
