
import { useForm } from "react-hook-form";
import api from "../api/api"; 
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useEffect } from "react";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
    useEffect(() => {
      document.title = "SignUp | Caption Genius";
    }, []);

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/auth/register", data, {
        withCredentials: true,
      });
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
      {/* Navigation */}
      <nav className="auth-nav">
        <div className="auth-nav-brand">
          <svg
            className="logo-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect x="3" y="3" width="18" height="18" rx="6" fill="#4f46e5" />
            <path
              d="M7 12h10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="logo-text">CaptionGenius</span>
        </div>
        <div className="auth-nav-links">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </div>
      </nav>

      {/* Signup form */}
      <div className="auth-content">
        <h2 className="auth-title">Create Your Account</h2>
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              className="form-input"
              {...register("username", { required: "Username is required" })}
              disabled={isSubmitting}
            />
            {errors.username && (
              <p className="form-error">{errors.username.message}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-input"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              disabled={isSubmitting}
            />
            {errors.password && (
              <p className="form-error">{errors.password.message}</p>
            )}
          </div>

          <button type="submit" className="auth-btn" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="auth-helper">
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Login here
          </Link>
        </p>
      </div>

      {/* Footer */}
      <footer className="auth-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <svg
              className="footer-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect x="3" y="3" width="18" height="18" rx="6" fill="white" />
              <path
                d="M8 12h8"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="footer-text">CaptionGenius</span>
          </div>
          <div className="footer-links">
            <a href="#terms" className="footer-link">
              Terms
            </a>
            <a href="#privacy" className="footer-link">
              Privacy
            </a>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} CaptionGenius
          </div>
        </div>
      </footer>
    </div>
  );
}
