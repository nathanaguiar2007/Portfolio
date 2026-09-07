import { about } from "../data/portfolio";

export default function AboutSection({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <section
      id="about"
      className={`about-section${standalone ? " about-page" : ""}`}
    >
      <div className="about-copy">
        <p className="eyebrow">A bit about me</p>
        <Heading className="section-title">Curious by default.</Heading>
        <p className="about-introduction">{about.introduction}</p>
        <p>{about.description}</p>
      </div>
      <div
        className="photo-placeholder"
        role="img"
        aria-label="Professional photo placeholder"
      >
        <span aria-hidden="true">NA</span>
        <p>Professional photo coming soon</p>
      </div>
    </section>
  );
}
