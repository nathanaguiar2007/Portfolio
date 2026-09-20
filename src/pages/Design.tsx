import DesignGallery from "../components/DesignGallery";

export default function Design() {
  return (
    <article className="section-shell design-page">
      <header className="page-header">
        <p className="eyebrow">Engineering & design</p>
        <h1>Beyond code.</h1>
        <p>
          Designing things in three dimensions. A space for Fusion 360, Blender,
          3D printing, and physical builds.
        </p>
      </header>
      <DesignGallery standalone />
    </article>
  );
}
