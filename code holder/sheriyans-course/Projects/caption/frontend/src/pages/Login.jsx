import "./Login.css";
import { useForm } from "react-hook-form";
import api from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login | Caption Genius";
  }, []);

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/auth/login", data, {
        withCredentials: true,
      });
      alert(res.data.message);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      {/* Navigation - Same as Signup */}
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
          <Link className="nav-link primary" to="/signup">
            Sign up
          </Link>
        </div>
      </nav>

      {/* Login Form - Similar structure but slightly different content */}
      <div className="auth-content">
        <h2 className="auth-title">Welcome Back</h2>

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
              {...register("password", { required: "Password is required" })}
              disabled={isSubmitting}
            />
            {errors.password && (
              <p className="form-error">{errors.password.message}</p>
            )}
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" {...register("remember")} />
              Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="auth-btn" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="auth-helper">
          Don't have an account?{" "}
          <Link to="/signup" className="auth-link">
            Sign up
          </Link>
        </p>
      </div>

      {/* Footer - Same as Signup */}
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
};

export default Login;
