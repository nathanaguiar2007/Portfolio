import { about, education, experience, experienceStory } from "../data/portfolio";
import ExperienceEntry from "../components/ExperienceEntry";
import SectionHeader from "../components/SectionHeader";

export default function Experience() {
  return (
    <div className="section-shell experience-page">
      <header className="page-header">
        <p className="eyebrow">A little context</p>
        <h1>Experience</h1>
        <p className="project-tagline">{experienceStory.subtitle}</p>
        <p>{about.introduction}</p>
      </header>
      <section className="experience-introduction">
        <SectionHeader eyebrow="About me" title="Curious by default." />
        <p>{experienceStory.about}</p>
      </section>
      <section className="story-section editorial-layout">
        <SectionHeader eyebrow="In practice" title="Professional experience" />
        <div className="experience-timeline">
          {experience.filter((entry) => entry.id !== "robotics").map((entry) => <ExperienceEntry key={entry.id} entry={entry} />)}
        </div>
      </section>
      <section className="story-section editorial-layout">
        <SectionHeader eyebrow="Beyond software" title="Robotics & technical experience" />
        <div className="experience-timeline">
          {experience.filter((entry) => entry.id === "robotics").map((entry) => <ExperienceEntry key={entry.id} entry={entry} />)}
        </div>
      </section>
      <section className="story-section editorial-layout">
        <SectionHeader eyebrow="Still learning" title="Education" />
        <article className="education-copy">
          <h3>{education.university}</h3>
          <p>{education.location}</p>
          <p>{education.degree} · Expected <time dateTime={education.expectedYear}>{education.expectedYear}</time></p>
          <h4>Intended minors</h4>
          <ul>{education.intendedMinors.map((minor) => <li key={minor}>{minor}</li>)}</ul>
          <p>{education.community}</p>
          <h4>Relevant coursework</h4>
          <ul>{education.coursework.map((course) => <li key={course}>{course}</li>)}</ul>
        </article>
      </section>
      <section className="story-section editorial-layout">
        <SectionHeader eyebrow="From idea to product" title="How I work" />
        <ol className="approach-list">{experienceStory.approach.map((step) => <li key={step}>{step}</li>)}</ol>
      </section>
      <section className="technical-interests">
        <SectionHeader eyebrow="Questions worth exploring" title="Technical interests" />
        <ul>{experienceStory.interests.map((interest) => <li key={interest}>{interest}</li>)}</ul>
      </section>
    </div>
  );
}
