import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import MarkdownRenderer from "../common/MarkdownRenderer";
import MarkdownToolbar from "../common/MarkdownToolbar";
import { useAdminAuth } from "../../context/AdminAuthContext";
import {
  ADMIN_LOGIN_PATH,
  ADMIN_DASHBOARD_PATH,
} from "../../config/adminRoutes";
import { Helmet } from "react-helmet-async";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const emptyForm = {
  title: "",
  excerpt: "",
  content: "",
  imageUrl: "",
  category: "General",
  published: true,
};

export default function AdminArticleFormPage() {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const navigate = useNavigate();
  const { admin, loading: authLoading } = useAdminAuth();

  const [form, setForm] = useState(emptyForm);
  const [loadingArticle, setLoadingArticle] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const textareaRef = useRef(null);
  const [pendingSelection, setPendingSelection] = useState(null);

  useEffect(() => {
    if (!isEditing || !admin) return;

    async function loadArticle() {
      try {
        const res = await fetch(`${API_URL}/api/articles/admin/${id}`, {
          credentials: "include",
        });
        if (!res.ok) throw new Error("No se pudo cargar el recurso.");
        const data = await res.json();
        setForm({
          title: data.article.title || "",
          excerpt: data.article.excerpt || "",
          content: data.article.content || "",
          imageUrl: data.article.image_url || "",
          category: data.article.category || "general",
          published: data.article.published,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingArticle(false);
      }
    }

    loadArticle();
  }, [id, isEditing, admin]);

  useEffect(() => {
    if (pendingSelection && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(
        pendingSelection.start,
        pendingSelection.end,
      );
      setPendingSelection(null);
    }
  }, [pendingSelection]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function wrapSelection(before, after, placeholder) {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = form.content;
    const selected = value.slice(start, end) || placeholder;

    const newValue =
      value.slice(0, start) + before + selected + after + value.slice(end);
    setForm((prev) => ({ ...prev, content: newValue }));

    const newStart = start + before.length;
    setPendingSelection({ start: newStart, end: newStart + selected.length });
  }

  function prefixLines(getPrefix, placeholderLines) {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = form.content;
    const selected = value.slice(start, end);

    const lines = selected ? selected.split("\n") : placeholderLines;
    const transformed = lines
      .map((line, i) => `${getPrefix(i)}${line}`)
      .join("\n");

    const before = "\n";
    const after = "\n";
    const newValue =
      value.slice(0, start) + before + transformed + after + value.slice(end);
    setForm((prev) => ({ ...prev, content: newValue }));

    const newStart = start + before.length;
    setPendingSelection({
      start: newStart,
      end: newStart + transformed.length,
    });
  }

  function insertSnippet(snippet) {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = form.content;

    const newValue = value.slice(0, start) + snippet + value.slice(end);
    setForm((prev) => ({ ...prev, content: newValue }));

    const cursorPos = start + snippet.length;
    setPendingSelection({ start: cursorPos, end: cursorPos });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    try {
      const url = isEditing
        ? `${API_URL}/api/articles/${id}`
        : `${API_URL}/api/articles`;
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "No se pudo guardar el recurso.");
      }

      navigate(ADMIN_DASHBOARD_PATH);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  if (authLoading || loadingArticle) {
    return (
      <div
        className="flex min-h-screen items-center justify-center text-sm"
        style={{ background: "var(--sand)", color: "var(--ink)" }}
      >
        Cargando...
      </div>
    );
  }

  if (!admin) {
    return <Navigate to={ADMIN_LOGIN_PATH} replace />;
  }

  return (
    <div
      className="newenche min-h-screen"
      style={{ background: "var(--sand)" }}
    >
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <p className="eyebrow mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
            <span className="eyebrow-tick" aria-hidden="true" />
            Panel de gestión
          </p>
          <h1
            className="font-display text-2xl font-semibold"
            style={{ color: "var(--pine)" }}
          >
            {isEditing ? "Editar recurso" : "Nuevo recurso"}
          </h1>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <div className="card-soft grid gap-4 rounded-2xl p-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="title"
                className="field-label mb-1 block text-sm font-medium"
              >
                Título
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                value={form.title}
                onChange={handleChange}
                className="field-input w-full rounded-lg px-4 py-2.5 text-sm transition"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="field-label mb-1 block text-sm font-medium"
              >
                Categoría
              </label>
              <input
                id="category"
                name="category"
                type="text"
                placeholder="general"
                value={form.category}
                onChange={handleChange}
                className="field-input w-full rounded-lg px-4 py-2.5 text-sm transition"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="imageUrl"
                className="field-label mb-1 block text-sm font-medium"
              >
                Imagen de portada (URL)
              </label>
              <input
                id="imageUrl"
                name="imageUrl"
                type="url"
                placeholder="https://..."
                value={form.imageUrl}
                onChange={handleChange}
                className="field-input w-full rounded-lg px-4 py-2.5 text-sm transition"
              />
              <p className="mt-1 text-xs text-slate-500">
                Sube la imagen a un servicio externo (ej. Cloudinary, Imgur) y
                pega aquí su URL. Se muestra en la tarjeta de la galería y en la
                cabecera del recurso.
              </p>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="excerpt"
                className="field-label mb-1 block text-sm font-medium"
              >
                Extracto (aparece en la tarjeta de la galería)
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                rows={2}
                maxLength={300}
                value={form.excerpt}
                onChange={handleChange}
                className="field-input w-full resize-none rounded-lg px-4 py-2.5 text-sm transition"
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="content"
                className="field-label block text-sm font-medium"
              >
                Contenido
              </label>
              <div className="flex gap-2 lg:hidden">
                <button
                  type="button"
                  onClick={() => setShowPreview(false)}
                  className={`rounded-md px-3 py-1 text-xs font-medium transition ${!showPreview ? "btn-primary" : "btn-secondary"}`}
                >
                  Editar
                </button>
                <button
                  type="button"
                  onClick={() => setShowPreview(true)}
                  className={`rounded-md px-3 py-1 text-xs font-medium transition ${showPreview ? "btn-primary" : "btn-secondary"}`}
                >
                  Vista previa
                </button>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className={showPreview ? "hidden lg:block" : ""}>
                <MarkdownToolbar
                  wrap={wrapSelection}
                  prefixLines={prefixLines}
                  insert={insertSnippet}
                />
                <textarea
                  id="content"
                  name="content"
                  ref={textareaRef}
                  required
                  value={form.content}
                  onChange={handleChange}
                  placeholder="Escribe aquí el contenido, o usa los botones de arriba para insertar formato..."
                  className="field-input h-[65vh] min-h-[420px] w-full rounded-lg px-4 py-3 font-mono text-sm transition"
                />
              </div>

              <div className={!showPreview ? "hidden lg:block" : ""}>
                <p className="field-label mb-1 block text-sm font-medium">
                  Vista previa
                </p>
                <div className="card-soft h-[65vh] min-h-[420px] overflow-y-auto rounded-lg p-6">
                  <MarkdownRenderer
                    content={
                      form.content ||
                      "*Escribe algo para ver la vista previa...*"
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <label
            className="flex items-center gap-2 text-sm"
            style={{ color: "var(--pine)" }}
          >
            <input
              type="checkbox"
              name="published"
              checked={form.published}
              onChange={handleChange}
            />
            Publicar (si lo desmarcas, queda guardado como borrador)
          </label>

          {error && (
            <p className="text-sm font-medium" style={{ color: "var(--clay)" }}>
              {error}
            </p>
          )}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="btn-primary rounded-lg px-6 py-3 font-semibold transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {saving ? "Guardando..." : "Guardar recurso"}
            </button>
            <button
              type="button"
              onClick={() => navigate(ADMIN_DASHBOARD_PATH)}
              className="btn-secondary rounded-lg px-6 py-3 font-semibold transition"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
