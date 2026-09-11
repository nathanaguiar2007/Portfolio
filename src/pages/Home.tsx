import { Link } from "react-router";
import { experienceStory, projects, skillGroups } from "../data/portfolio";
import AboutSection from "../components/AboutSection";
import DesignGallery from "../components/DesignGallery";
import CertificatesSection from "../components/CertificatesSection";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import ProjectShowcase from "../components/ProjectShowcase";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import SkillGroup from "../components/SkillGroup";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="work" className="section-shell work-section">
        <SectionHeader
          eyebrow="Selected work / 01—02"
          title={
            <>
              Building for
              <br />
              <em>real life.</em>
            </>
          }
          description="Projects that sit at the intersection of useful, curious, and a little bit ambitious."
        />
        <div className="featured-projects">
          {projects.map((project, index) => (
            <ProjectShowcase
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>
      <section className="section-shell more-projects">
        <SectionHeader
          eyebrow="The rest of the shelf"
          title={
            <>
              More things
              <br />
              I’ve built.
            </>
          }
          description="More projects will live here soon."
        />
        <div className="placeholder-grid">
          {[1, 2, 3, 4].map((number) => (
            <ProjectCard key={number} number={number} />
          ))}
        </div>
      </section>
      <section id="experience" className="experience-band">
        <div className="section-shell editorial-layout">
          <SectionHeader
            eyebrow="A little context"
            title={
              <>
                Doing the
                <br />
                <em>work.</em>
              </>
            }
            description="Listening carefully, making things, and improving them until they feel right."
          />
          <div className="experience-preview">
            <p>{experienceStory.preview}</p>
            <Link to="/experience" className="text-link">
              Read more about my experience <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section-shell editorial-layout" id="skills">
        <SectionHeader
          eyebrow="The toolkit"
          title={
            <>
              Fluent in
              <br />
              <em>making.</em>
            </>
          }
        />
        <div>
          <p className="skills-introduction">
            Languages are tools. These are the ones I reach for first when the
            blank canvas is staring back.
          </p>
          <SkillGroup {...skillGroups[0]} />
          <div className="skill-groups">
            {skillGroups.slice(1).map((group) => (
              <SkillGroup key={group.category} {...group} />
            ))}
          </div>
        </div>
      </section>
      <CertificatesSection />
      <section className="gallery-band">
        <div className="section-shell">
          <SectionHeader eyebrow="Beyond the screen" title="Beyond code.">
            <Link to="/design" className="pill-link">
              See the design gallery{" "}
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          </SectionHeader>
          <Reveal>
            <DesignGallery />
          </Reveal>
        </div>
      </section>
      <div className="section-shell">
        <Reveal>
          <AboutSection />
        </Reveal>
      </div>
    </>
  );
}
