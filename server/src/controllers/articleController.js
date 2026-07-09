import * as ArticleModel from "../models/articleModel.js";

function slugify(text) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function generateUniqueSlug(title, excludeId = null) {
  const base = slugify(title);
  let slug = base;
  let counter = 1;

  while (await ArticleModel.slugExists(slug, excludeId)) {
    counter += 1;
    slug = `${base}-${counter}`;
  }
  return slug;
}

export async function listPublished(req, res) {
  try {
    const { category, page = 1, limit = 12 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const articles = await ArticleModel.getPublishedArticles({
      limit: Number(limit),
      offset,
      category,
    });

    return res.json({ articles });
  } catch (error) {
    console.error("Error al listar artículos:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

export async function getBySlug(req, res) {
  try {
    const article = await ArticleModel.getPublishedArticleBySlug(
      req.params.slug,
    );
    if (!article) {
      return res.status(404).json({ error: "Artículo no encontrado" });
    }
    return res.json({ article });
  } catch (error) {
    console.error("Error al obtener artículo:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

export async function listAll(req, res) {
  try {
    const { page = 1, limit = 50 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);
    const articles = await ArticleModel.getAllArticles({
      limit: Number(limit),
      offset,
    });
    return res.json({ articles });
  } catch (error) {
    console.error("Error al listar todos los artículos:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

export async function getById(req, res) {
  try {
    const article = await ArticleModel.getArticleById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: "Artículo no encontrado" });
    }
    return res.json({ article });
  } catch (error) {
    console.error("Error al obtener artículo por id:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

export async function create(req, res) {
  try {
    const {
      title,
      excerpt,
      content,
      imageUrl,
      category,
      published = true,
    } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ error: "Título y contenido son requeridos" });
    }

    const slug = await generateUniqueSlug(title);

    const article = await ArticleModel.createArticle({
      title,
      slug,
      excerpt,
      content,
      imageUrl,
      category,
      published,
      authorId: req.admin.id,
    });

    return res.status(201).json({ article });
  } catch (error) {
    console.error("Error al crear artículo:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

export async function update(req, res) {
  try {
    const { id } = req.params;
    const existing = await ArticleModel.getArticleById(id);

    if (!existing) {
      return res.status(404).json({ error: "Artículo no encontrado" });
    }

    const { title, excerpt, content, imageUrl, category, published } = req.body;
    const fields = { excerpt, content, category, published };

    if (imageUrl !== undefined) fields.image_url = imageUrl;

    if (title && title !== existing.title) {
      fields.title = title;
      fields.slug = await generateUniqueSlug(title, id);
    }

    const article = await ArticleModel.updateArticle(id, fields);
    return res.json({ article });
  } catch (error) {
    console.error("Error al actualizar artículo:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

export async function remove(req, res) {
  try {
    const { id } = req.params;
    const deleted = await ArticleModel.deleteArticle(id);

    if (!deleted) {
      return res.status(404).json({ error: "Artículo no encontrado" });
    }

    return res.status(204).send();
  } catch (error) {
    console.error("Error al eliminar artículo:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}
