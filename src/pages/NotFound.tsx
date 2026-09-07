import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="section-shell not-found">
      <p className="eyebrow">404</p>
      <h1>Nothing here just yet.</h1>
      <p>That page may have moved, or the project is still taking shape.</p>
      <Link to="/" className="pill-link pill-dark">
        Back to the portfolio <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
