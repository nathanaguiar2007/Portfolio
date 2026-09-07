import type { Experience } from "../data/portfolio";

export default function ExperienceEntry({ entry }: { entry: Experience }) {
  return (
    <article className="experience-entry">
      <p className="eyebrow">{entry.dates}</p>
      <h3>{entry.title}</h3>
      {entry.company && <p className="experience-company">{entry.company}</p>}
      <p>{entry.description}</p>
      {entry.accomplishments.length > 0 && (
        <ul>
          {entry.accomplishments.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {entry.technologies.length > 0 && (
        <p className="experience-tools">{entry.technologies.join(" · ")}</p>
      )}
    </article>
  );
}
