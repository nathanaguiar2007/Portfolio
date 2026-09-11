import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  children,
}: SectionHeaderProps) {
  return (
    <header className="section-header">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
      {children}
    </header>
  );
}
