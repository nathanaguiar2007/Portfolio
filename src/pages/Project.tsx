import { Link, useParams } from "react-router";
import { projects } from "../data/portfolio";
import ProjectVisual from "../components/ProjectVisual";
import NotFound from "./NotFound";

export default function Project() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;

  return (
    <div className="section-shell project-page">
      <Link to="/#work" className="text-link back-link">
        ← Selected work
      </Link>
      <header className="project-header">
        <p className="eyebrow">{project.status}</p>
        <h1>{project.title}</h1>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-introduction">{project.description}</p>
        <div className="tag-row">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </header>
      <ProjectVisual kind={project.slug} />
      <div className="project-sections">
        {project.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </div>
      <Link
        className="text-link"
        to={`/projects/${slug === "dormonomics" ? "food-ai" : "dormonomics"}`}
      >
        Explore{" "}
        {slug === "dormonomics"
          ? "the food recognition research"
          : "Dormonomics"}{" "}
        <span className="arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </div>
  );
}
