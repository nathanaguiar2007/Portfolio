import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="section-shell hero-section">
      <div className="hero-shapes" aria-hidden="true">
        <span className="hero-circle" />
        <span className="hero-capsule" />
        <span className="hero-glass" />
      </div>
      <div className="hero-copy">
        <p className="eyebrow">Software · AI · Engineering</p>
        <h1>
          I build things
          <br />
          <em>with technology.</em>
        </h1>
        <p className="hero-subtitle">Computer Science at Purdue University.</p>
        <p className="hero-intro">
          Software. Artificial intelligence. Engineering. Design.
        </p>
        <div className="button-row">
          <Link to="/#work" className="pill-link pill-dark">
            See selected work{" "}
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
          <Link to="/about" className="pill-link">
            More about me{" "}
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </div>
      <div className="hero-aside">
        <div className="orbit-mark" aria-hidden="true">
          <span>NA</span>
          <i />
        </div>
        <p>
          Currently exploring
          <br />
          <strong>
            the space between
            <br />
            logic + feeling.
          </strong>
        </p>
      </div>
    </section>
  );
}
