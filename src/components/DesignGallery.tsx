import { designCategories } from "../data/portfolio";

export default function DesignGallery({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h2" : "h3";
  return (
    <div className="gallery-grid">
      {designCategories.map((category, index) => (
        <figure
          className={`gallery-tile ${category.className}`}
          key={category.title}
        >
          <span className="gallery-number" aria-hidden="true">
            0{index + 1} / EXPLORATIONS
          </span>
          <div className="gallery-object" aria-hidden="true">
            <span />
          </div>
          <figcaption>
            <Heading>{category.title}</Heading>
            <p>{category.subtitle}</p>
            <span className="gallery-placeholder">
              Project images coming soon
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
