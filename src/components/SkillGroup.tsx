export default function SkillGroup({
  category,
  skills,
}: {
  category: string;
  skills: string[];
}) {
  return (
    <div
      className={category === "Languages" ? "primary-languages" : "skill-group"}
    >
      <h3 className="eyebrow">{category}</h3>
      {category === "Languages" ? (
        <ul className="language-cloud">
          {skills.map((skill) => (
            <li key={skill} className="language-chip">
              {skill}
            </li>
          ))}
        </ul>
      ) : (
        <p>{skills.join(" · ")}</p>
      )}
    </div>
  );
}
