export default function ProjectVisual({
  kind,
}: {
  kind: "dormonomics" | "food-ai";
}) {
  if (kind === "dormonomics") {
    return (
      <div
        className="phone-scene visual-panel"
        role="img"
        aria-label="Two overlapping iPhone screenshot placeholders for Dormonomics"
      >
        <div className="scene-orb" />
        <div className="phone-frame phone-back" aria-hidden="true">
          <div className="phone-notch" />
          <span className="phone-monogram">d.</span>
          <span className="phone-caption">A little more clarity.</span>
        </div>
        <div className="phone-frame phone-front" aria-hidden="true">
          <div className="phone-notch" />
          <span className="phone-wordmark">dormonomics</span>
          <div className="phone-placeholder">
            <span>+</span>
            <strong>Your next chapter.</strong>
            <p>
              iPhone screenshot
              <br />
              coming soon
            </p>
          </div>
          <div className="phone-bottom-line" />
        </div>
      </div>
    );
  }

  return (
    <div
      className="ai-scene visual-panel"
      role="img"
      aria-label="Food recognition research visualization placeholder; no model results shown"
    >
      <div className="ai-window" aria-hidden="true">
        <div className="window-bar">
          <span />
          <span />
          <span />
          <p>Vision / research preview</p>
        </div>
        <div className="ai-workspace">
          <div className="scan-image">
            <span className="food-shape" />
            <span className="scan-line" />
            <small>Food image placeholder</small>
          </div>
          <div className="ai-results">
            <div>
              <span>Prediction</span>
              <strong>—</strong>
            </div>
            <div>
              <span>Confidence</span>
              <strong>—</strong>
            </div>
            <div>
              <span>Nutritional output</span>
              <strong>—</strong>
            </div>
          </div>
        </div>
        <div className="research-chart">
          <span className="chart-placeholder">
            Charts & research visualization coming soon
          </span>
        </div>
      </div>
      <p className="visual-caption">Image → prediction → nutritional context</p>
    </div>
  );
}
