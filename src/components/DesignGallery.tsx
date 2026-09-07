import { designCategories } from "../data/portfolio";

export default function DesignGallery() {
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
            <h3>{category.title}</h3>
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
