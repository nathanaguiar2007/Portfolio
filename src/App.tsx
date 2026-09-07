import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { projects } from "./data/portfolio";
import About from "./pages/About";
import Design from "./pages/Design";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

function RouteEffects() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const project = projects.find(
      (item) => pathname === `/projects/${item.slug}`,
    );
    const title =
      project?.title ??
      { "/": "Portfolio", "/about": "About", "/design": "Design" }[pathname] ??
      "Page not found";
    document.title = `${title} — Nathan Aguiar`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      project?.description ??
        "Nathan Aguiar, Computer Science at Purdue University. Software, artificial intelligence, and engineering projects.",
    );

    const frame = requestAnimationFrame(() => {
      const section = hash ? document.getElementById(hash.slice(1)) : null;
      if (section)
        section.scrollIntoView({ behavior: "instant", block: "start" });
      else window.scrollTo({ top: 0, behavior: "instant" });
      // Move keyboard/screen-reader focus to the new page without another scroll.
      document
        .querySelector<HTMLElement>("main")
        ?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main-content")?.focus();
        }}
      >
        Skip to content
      </a>
      <Navbar key={pathname} />
      <RouteEffects />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<Project />} />
          <Route path="/design" element={<Design />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
