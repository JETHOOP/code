import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const phoneImg =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8c0e2b8b78c4d9b2d0b1f7a0c7b2f6a0";
const avatarA =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=71f7b1a2a4b2c9a2b6e0b4f9c4b2c8f0";
const avatarB =
  "https://media.istockphoto.com/id/2161842577/photo/successful-businessman-in-modern-office-working-on-laptop.jpg?s=612x612&w=is&k=20&c=VuMnhbR_Hrfek3JuWg3QspFCJTFxYJKP04ZpaoQwSOA=";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <nav>
          <div className="brand" aria-label="Brand">
            <div className="logo" aria-hidden>
              {/* Simple SVG logo */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="6"
                  fill="#4f46e5"
                />
                <path
                  d="M7 12h10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="title">CaptionGenius</div>
          </div>

          <div
            className="nav-links"
            role="navigation"
            aria-label="Main navigation"
          >
            <Link to="/login">Login </Link>
            <Link className="btn-signup" to="/signup">
              Sign up
            </Link>
          </div>
        </nav>
      </div>

      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="hero container">
          <div className="hero-left">
            <div className="hero-notification">
              <span className="new-badge">New</span>
              <span className="notification-text">
                Product updates & roadmap
              </span>
            </div>

            <h1 id="hero-heading">
              Build beautiful products, faster.
              <span className="accent"> Ship with confidence.</span>
            </h1>

            <p>
              We provide a concise, delightful UI toolkit and backend
              integration to accelerate your next project. Easy components,
              beautiful defaults, and powerful customizability.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#get-started">
                Get started
              </a>
              <a className="btn btn-outline" href="#learn-more">
                Learn more
              </a>
            </div>

            <div className="user-stats">
              <div className="stats-card">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="9" fill="#eef2ff" />
                  <path
                    d="M8 12h8"
                    stroke="#4f46e5"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="stats-text">
                  <strong>100k+</strong>
                  Users joined last month
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="phone-preview" aria-hidden>
              <img src={phoneImg} alt="App preview" />
            </div>

            <div className="caption-bubble" role="status" aria-live="polite">
              <div className="bubble-inner">
                <p>
                  Loved by teams everywhere — "This boosted our productivity!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="features container">
          <h2>Powerful features that developers love</h2>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon" aria-hidden>
                ⚡
              </div>
              <h3>Fast setup</h3>
              <p>
                Get started in minutes with sensible defaults and comprehensive
                docs.
              </p>
            </div>

            <div className="feature-card">
              <div className="icon" aria-hidden>
                🔒
              </div>
              <h3>Secure by default</h3>
              <p>
                Built-in authentication and role management keep your data safe.
              </p>
            </div>

            <div className="feature-card">
              <div className="icon" aria-hidden>
                ⚙️
              </div>
              <h3>Extensible</h3>
              <p>
                Flexible theming and plugins let you tailor the product to your
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <div className="testimonials container">
          <h2>What customers say</h2>

          <div className="test-grid">
            <div className="testimonial-card">
              <div className="testimonial-meta">
                <img
                  src={avatarA}
                  alt="Alex R."
                  className="testimonial-avatar"
                />
                <div>
                  <strong>Alex R.</strong>
                  <div className="testimonial-role">CTO, Acme Inc.</div>
                </div>
              </div>
              <p>
                "This product fundamentally changed how our team ships. The DX
                is top-notch and support is incredible."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-meta">
                <img
                  src={avatarB}
                  alt="Sam L."
                  className="testimonial-avatar"
                />
                <div>
                  <strong>Sam L.</strong>
                  <div className="testimonial-role">Product Lead, Nova</div>
                </div>
              </div>
              <p>
                "Beautiful UI and thoughtful APIs. Our onboarding time dropped
                by 60% after adopting this."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="cta container">
          <h2 id="cta-heading">Ready to ship your next product?</h2>
          <p>
            Try it free for 14 days. No credit card required — scale when you're
            ready.
          </p>
          <a className="btn-cta" href="#signup">
            Start your free trial
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-inner container">
          <div className="footer-brand">
            <div className="logo" aria-hidden>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <rect x="3" y="3" width="18" height="18" rx="6" fill="#fff" />
                <path
                  d="M8 12h8"
                  stroke="#111827"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>CaptionGenius</div>
          </div>

          <div className="footer-links">
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom container">
          © {new Date().getFullYear()} CaptionGenius — Built with care.
        </div>
      </footer>
    </div>
  );
}
