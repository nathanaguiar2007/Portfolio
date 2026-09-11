import { certificates } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function CertificatesSection() {
  return (
    <section id="certificates" className="section-shell certificates-section">
      <SectionHeader eyebrow="Credentials" title="Certificates" description="A space for continued learning. Placeholder entries below will be replaced with earned credentials." />
      <ul className="certificate-grid">
        {certificates.map((certificate) => (
          <li key={certificate.id}>
            <article className="certificate">
              {certificate.placeholder && <p className="eyebrow">Placeholder · Add credential</p>}
              {certificate.image && (
                <figure className="certificate-image">
                  <img src={/^(https?:)?\/\//.test(certificate.image.src) ? certificate.image.src : `${import.meta.env.BASE_URL}${certificate.image.src.replace(/^\//, "")}`} alt={certificate.image.alt} loading="lazy" />
                </figure>
              )}
              <header>
                <h3>{certificate.name}</h3>
                <p>{certificate.issuer}</p>
              </header>
              {certificate.earned ? <time dateTime={certificate.earned.dateTime}>{certificate.earned.label}</time> : <p className="certificate-date">Date to be added</p>}
              {certificate.description && <p>{certificate.description}</p>}
              {certificate.credentialId && <p>Credential ID: {certificate.credentialId}</p>}
              {certificate.credentialUrl && <a className="text-link" href={certificate.credentialUrl}>Verify {certificate.name} <span aria-hidden="true">↗</span></a>}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
