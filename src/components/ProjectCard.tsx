export default function ProjectCard({ number }: { number: number }) {
  return (
    <article className="placeholder-card">
      <span className="eyebrow">0{number}</span>
      <h3>Project Coming Soon</h3>
      <span className="placeholder-mark" aria-hidden="true">
        +
      </span>
    </article>
  );
}
