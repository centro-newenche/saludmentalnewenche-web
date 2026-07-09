import pool from "../config/db.js";

export async function getPublishedArticles({
  limit = 20,
  offset = 0,
  category,
} = {}) {
  const params = [];
  let where = "WHERE published = true";

  if (category) {
    params.push(category);
    where += ` AND category = $${params.length}`;
  }

  params.push(limit, offset);

  const { rows } = await pool.query(
    `SELECT id, title, slug, excerpt, image_url, category, created_at
         FROM articles
         ${where}
         ORDER BY created_at DESC
         LIMIT $${params.length - 1} OFFSET $${params.length}`,
    params,
  );
  return rows;
}

export async function getPublishedArticleBySlug(slug) {
  const { rows } = await pool.query(
    `SELECT id, title, slug, excerpt, content, image_url, category, created_at, updated_at
         FROM articles
         WHERE slug = $1 AND published = true`,
    [slug],
  );
  return rows[0] || null;
}

export async function getAllArticles({ limit = 50, offset = 0 } = {}) {
  const { rows } = await pool.query(
    `SELECT id, title, slug, excerpt, image_url, category, published, created_at, updated_at
         FROM articles
         ORDER BY created_at DESC
         LIMIT $1 OFFSET $2`,
    [limit, offset],
  );
  return rows;
}

export async function getArticleById(id) {
  const { rows } = await pool.query("SELECT * FROM articles WHERE id = $1", [
    id,
  ]);
  return rows[0] || null;
}

export async function createArticle({
  title,
  slug,
  excerpt,
  content,
  imageUrl,
  category,
  published,
  authorId,
}) {
  const { rows } = await pool.query(
    `INSERT INTO articles (title, slug, excerpt, content, image_url, category, published, author_id)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
         RETURNING *`,
    [title, slug, excerpt, content, imageUrl, category, published, authorId],
  );
  return rows[0];
}

export async function updateArticle(id, fields) {
  const allowed = [
    "title",
    "slug",
    "excerpt",
    "content",
    "image_url",
    "category",
    "published",
  ];
  const keys = Object.keys(fields).filter((key) => allowed.includes(key));

  if (keys.length === 0) return getArticleById(id);

  const setClause = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");
  const values = keys.map((key) => fields[key]);

  const { rows } = await pool.query(
    `UPDATE articles SET ${setClause} WHERE id = $${keys.length + 1} RETURNING *`,
    [...values, id],
  );
  return rows[0] || null;
}

export async function deleteArticle(id) {
  const { rowCount } = await pool.query("DELETE FROM articles WHERE id = $1", [
    id,
  ]);
  return rowCount > 0;
}

export async function slugExists(slug, excludeId = null) {
  const params = excludeId ? [slug, excludeId] : [slug];
  const query = excludeId
    ? "SELECT 1 FROM articles WHERE slug = $1 AND id != $2"
    : "SELECT 1 FROM articles WHERE slug = $1";
  const { rows } = await pool.query(query, params);
  return rows.length > 0;
}
