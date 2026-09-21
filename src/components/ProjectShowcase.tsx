import { Link } from "react-router";
import type { Project } from "../data/portfolio";
import ProjectVisual from "./ProjectVisual";
import Reveal from "./Reveal";

export default function ProjectShowcase({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isFinance = project.slug === "dormonomics";
  return (
    <Reveal>
      <article
        className={`showcase ${isFinance ? "showcase-green" : "showcase-blue"}`}
      >
        <div className="showcase-copy">
          <p className="eyebrow">
            0{index + 1} /{" "}
            {isFinance ? "iOS · Work in progress" : "AI · Research"}
          </p>
          <h3>{isFinance ? project.title : project.tagline}</h3>
          <p className="showcase-subtitle">
            {isFinance
              ? project.tagline
              : "Food Recognition & Macronutrient Research"}
          </p>
          <p className="showcase-body">{project.description}</p>
          {!isFinance && (
            <p className="research-note">
              I contributed to research that was published and presented.
            </p>
          )}
          <div className="tag-row">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <Link to={`/projects/${project.slug}`} className="text-link">
            {isFinance ? "Explore Dormonomics" : "Explore the research"}{" "}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
        <ProjectVisual kind={project.slug} />
      </article>
    </Reveal>
  );
}
