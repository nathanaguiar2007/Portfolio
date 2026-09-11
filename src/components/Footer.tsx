import { contact } from "../data/portfolio";

export default function Footer() {
  const links = [
    { label: "Email", href: contact.email ? `mailto:${contact.email}` : "" },
    { label: "GitHub", href: contact.github },
    { label: "LinkedIn", href: contact.linkedin },
  ];

  return (
    <footer className="footer-shell" id="contact">
      <section className="contact-section">
        <p className="eyebrow">Have a good idea?</p>
        <h2>Let’s build something.</h2>
        <p>
          I’m always interested in hearing about new projects, opportunities,
          and ideas.
        </p>
        <address className="contact-links">
          {links.map(({ label, href }) =>
            href ? (
              <a className="pill-link" href={href} key={label}>
                {label}{" "}
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ) : (
              <span
                className="pill-link pending-link"
                aria-disabled="true"
                title={`${label} coming soon`}
                key={label}
              >
                {label} <small>Coming soon</small>
              </span>
            ),
          )}
        </address>
      </section>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nathan Aguiar</p>
        <p>Built with curiosity.</p>
      </div>
    </footer>
  );
}
