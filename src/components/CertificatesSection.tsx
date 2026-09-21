import { certificates } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function CertificatesSection() {
  return (
    <section id="certificates" className="section-shell certificates-section">
      <SectionHeader eyebrow="Credentials" title="Certifications" description="Courses and programs that have helped me keep learning across software and artificial intelligence." />
      <ul className="certificate-grid">
        {certificates.map((certificate) => (
          <li key={certificate.id}>
            <article className="certificate">
              <p className="eyebrow">Certification</p>
              <header>
                <h3>{certificate.name}</h3>
                <p>{certificate.issuer}</p>
              </header>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
