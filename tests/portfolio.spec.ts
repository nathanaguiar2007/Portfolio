import { expect, test } from "@playwright/test";

const pages = [
  { path: "/", heading: "I build things with technology." },
  { path: "/projects/dormonomics", heading: "Dormonomics" },
  {
    path: "/projects/food-ai",
    heading: "AI / Food Recognition & Macronutrient Research",
  },
  { path: "/design", heading: "Beyond code." },
  { path: "/about", heading: "Curious by default." },
];

for (const width of [1440, 1024, 768, 390]) {
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
  await expect(page).toHaveURL("/#experience");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("#experience")).toBeInViewport();
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
