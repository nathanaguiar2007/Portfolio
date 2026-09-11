import { expect, test } from "@playwright/test";

const pages = [
  { path: "/", heading: "I build things with technology." },
  { path: "/projects/dormonomics", heading: "Dormonomics" },
  {
    path: "/projects/food-ai",
    heading: "AI / Food Recognition & Macronutrient Research",
  },
  { path: "/experience", heading: "Experience" },
  { path: "/design", heading: "Beyond code." },
  { path: "/about", heading: "Curious by default." },
];

for (const width of [1440, 1024, 768, 390, 320]) {
  test(`routes, CSS, assets, and overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 950 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("response", (response) => {
      if (
        response.url().startsWith("http://127.0.0.1") &&
        response.status() >= 400
      )
        errors.push(`${response.status()} ${response.url()}`);
    });

    for (const route of pages) {
      await page.goto(route.path);
      await expect(page.locator("h1")).toHaveText(route.heading, {
        useInnerText: true,
      });
      await expect(page.locator("body")).toHaveCSS(
        "background-color",
        "rgb(247, 243, 236)",
      );
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      await page
        .getByRole("heading", { name: "Let’s build something." })
        .scrollIntoViewIfNeeded();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
    }
    const favicon = await page.request.get("/favicon.ico");
    expect(favicon.status()).toBe(200);
    expect(errors).toEqual([]);
  });
}

test("real projects, exact primary languages, and clear placeholders", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".primary-languages li")).toHaveText([
    "Python",
    "Java",
    "Swift",
    "C#",
  ]);
  await expect(page.locator(".placeholder-card")).toHaveCount(4);
  await expect(page.locator(".placeholder-card a")).toHaveCount(0);
  await expect(page.locator("body")).not.toContainText(
    /Maze Solver|Data Scraper|98\.7%|Lua/,
  );
  await page.getByRole("link", { name: "Explore Dormonomics" }).click();
  await expect(page).toHaveURL("/projects/dormonomics");
  await expect(page.locator("h1")).toHaveText("Dormonomics");
  await expect(page.locator(".project-header")).toContainText(
    "Work in progress",
  );
  await page
    .getByRole("link", { name: "Explore the food recognition research" })
    .click();
  await expect(page.locator("h1")).toContainText("Macronutrient Research");
  await page.goBack();
  await expect(page.locator("h1")).toHaveText("Dormonomics");
});

test("mobile navigation, Escape, cross-page anchors, and scroll treatment", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/design");
  const menu = page.getByRole("button", { name: "Open navigation" });
  await menu.click();
  await expect(
    page.getByRole("button", { name: "Close navigation" }),
  ).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await menu.click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Experience", exact: true })
    .click();
  await expect(page).toHaveURL("/experience");
  await expect(page).toHaveTitle("Experience — Nathan Aguiar");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("h1")).toHaveText("Experience");
  await menu.click();
  await page.getByRole("navigation").getByRole("link", { name: "Work", exact: true }).click();
  await expect(page).toHaveURL("/#work");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("#work")).toBeInViewport();
  await expect(page.locator(".site-header")).toHaveClass(/is-scrolled/);
});

test("reduced motion, page titles, and unknown routes", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".hero-circle")).toHaveCSS(
    "animation-name",
    "none",
  );
  await expect(page.locator(".reveal").first()).toHaveCSS("opacity", "1");
  await page.goto("/projects/not-a-project");
  await expect(
    page.getByRole("heading", { name: "Nothing here just yet." }),
  ).toBeVisible();
  await expect(page).toHaveTitle("Page not found — Nathan Aguiar");
  await page.getByRole("link", { name: "Back to the portfolio" }).click();
  await expect(page).toHaveTitle("Portfolio — Nathan Aguiar");
});


test("credentials, experience facts, semantic hierarchy, and internal links", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#navigation-links a")).toHaveText(["Work", "Experience", "Design", "About"]);
  await expect(page.locator("#certificates")).not.toContainText(/date|year/i);
  await expect(page.locator("#certificates article")).toHaveCount(2);
  await expect(page.locator("#certificates article").first()).toContainText("Placeholder · Add credential");
  await expect(page.locator("#certificates a, #certificates time")).toHaveCount(0);
  await expect(page.locator("#experience .experience-entry")).toHaveCount(0);
  await page.getByRole("link", { name: "Read more about my experience" }).click();
  for (const fact of ["hundreds of Apple/macOS laptops", "multiple buildings", "emerging technology", "future purchases", "Jamf", "Incident IQ", "B.S. Computer Science", "2030", "Entrepreneurship & Innovation Learning Community"]) {
    await expect(page.locator("main")).toContainText(fact);
  }
  for (const route of pages) {
    await page.goto(route.path);
    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("body")).not.toContainText(/résumé|resume/i);
    const levels = await page.locator("h1, h2, h3, h4, h5, h6").evaluateAll((headings) => headings.map((heading) => Number(heading.tagName.slice(1))));
    levels.forEach((level, index) => { if (index > 0) expect(level).toBeLessThanOrEqual(levels[index - 1] + 1); });
    const links = await page.locator("a").evaluateAll((anchors) => anchors.map((anchor) => anchor.getAttribute("href")!));
    for (const href of links) {
      if (href.startsWith("#")) { await expect(page.locator(href)).toHaveCount(1); continue; }
      if (!href.startsWith("/")) continue;
      const [path, hash] = href.split("#");
      expect(pages.some((entry) => entry.path === path)).toBe(true);
      if (hash) {
        await page.goto(href);
        await expect(page.locator(`[id="${hash}"]`)).toHaveCount(1);
      }
    }
  }
});
