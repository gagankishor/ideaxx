import { Helmet } from "react-helmet";
import axios from "axios";
import { useState } from "react";
import { RestAPI } from "../../config/Api";
import { isAuthenticated } from "../../config/Auth";
import { Link } from "react-router-dom";
import Joi from "joi";
// import "./Register.css"; // Assuming you add the CSS here

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(""); // State to store API error message

  // Check log in status
  if (isAuthenticated()) {
    window.location.href = "/";
  }

  // Validation schema using Joi
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
      "string.empty": "Name is required",
      "string.min": "Name should have at least 3 characters",
      "string.max": "Name should have a maximum of 30 characters",
    }),
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
    const { error } = schema.validate({ name, email, password }, { abortEarly: false });

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
      const response = await axios.post(`${RestAPI}/auth/Register`, {
        name,
        email,
        password,
      });

      localStorage.setItem("token", response?.data?.token);
      localStorage.setItem("userName", response.data?.userNmae);
      window.location.href = "/";
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data && error.response.data.message) {
        if (error.response.data.message === "User already exists") {
          setApiError("User already exists. Please use a different email.");
        } else {
          setApiError("An error occurred during registration. Please try again.");
        }
      } else {
        console.error("Error logging in:", error);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>ideax | Register</title>
      </Helmet>

      <div className="container">
        <div className="login-page">
          <form onSubmit={handleSubmit}>
            <h2>Welcome</h2>

            {apiError && <p className="error-message">{apiError}</p>} {/* Display API error */}

            <div className="form-group">
              <input
                type="text"
                placeholder="Name.."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

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
              <button className="btn" type="submit">
                {!loading ? "Register" : <div className="spinner"></div>}
              </button>
            </div>

            <div className="register-prompt">
              <h3>Already have an account?</h3>
              <Link to="/login" className="register-link">Login now</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
