import "dotenv/config";
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { RESOURCES_SECTION_ENABLED } from "../src/config/seoFlags.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SITE_URL = "https://www.centronewenche.cl";
const API_BASE_URL = (process.env.VITE_API_URL || "").replace(/\/$/, "");
const RESOURCES_API_URL = `${API_BASE_URL}/api/articles`;

const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/quienes-somos", priority: "0.7", changefreq: "monthly" },
  { path: "/programas", priority: "0.9", changefreq: "monthly" },
  { path: "/programas/adolescente", priority: "0.8", changefreq: "monthly" },
  { path: "/programas/rehabilitacion", priority: "0.8", changefreq: "monthly" },
  { path: "/programas/acompanamiento", priority: "0.8", changefreq: "monthly" },
  { path: "/programas/orientacion", priority: "0.8", changefreq: "monthly" },
  { path: "/programas/colegios-redes", priority: "0.8", changefreq: "monthly" },
  { path: "/programas/capacitaciones", priority: "0.8", changefreq: "monthly" },
  { path: "/contacto", priority: "0.6", changefreq: "yearly" },
];

async function getResourceSlugs() {
  if (!RESOURCES_SECTION_ENABLED) return [];

  if (!API_BASE_URL) {
    console.warn(
      "[sitemap] VITE_API_URL no está definida (revisa tu .env o las env vars de Vercel); se omiten los recursos.",
    );
    return [];
  }

  try {
    const res = await fetch(RESOURCES_API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const list = Array.isArray(data) ? data : data.articles || [];
    return list
      .filter((item) => item.slug)
      .map((item) => ({ slug: item.slug, lastmod: item.created_at }));
  } catch (err) {
    console.warn(
      "[sitemap] No se pudo obtener la lista de recursos, se omitirán del sitemap:",
      err.message,
    );
    return [];
  }
}

function buildUrlEntry({ path, priority, changefreq, lastmod }) {
  return `  <url>
    <loc>${SITE_URL}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}
  </url>`;
}

async function main() {
  const resources = await getResourceSlugs();
  const resourceRoutes = resources.map(({ slug, lastmod }) => ({
    path: `/recursos/${slug}`,
    priority: "0.6",
    changefreq: "monthly",
    lastmod,
  }));

  const allRoutes = [...STATIC_ROUTES, ...resourceRoutes];
  const urls = allRoutes.map(buildUrlEntry).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  const outPath = resolve(__dirname, "../public/sitemap.xml");
  writeFileSync(outPath, xml, "utf-8");
  console.log(
    `[sitemap] Generado con ${allRoutes.length} URLs (${resourceRoutes.length} artículos) -> ${outPath}`,
  );
}

main();
