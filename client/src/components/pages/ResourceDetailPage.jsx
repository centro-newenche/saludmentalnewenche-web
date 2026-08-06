import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "../common/Seo";
import MarkdownRenderer from "../common/MarkdownRenderer";
import { RESOURCES_SECTION_ENABLED } from "../../config/seoFlags";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function ResourceDetailPage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setArticle(null);

    async function loadArticle() {
      try {
        const res = await fetch(`${API_URL}/api/articles/${slug}`);

        if (res.status === 404) {
          if (!cancelled) setError("not-found");
          return;
        }
        if (!res.ok) throw new Error("No se pudo cargar el recurso.");

        const data = await res.json();
        if (!cancelled) setArticle(data.article);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadArticle();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <>
        <Seo title="Cargando..." path={`/recursos/${slug}`} noIndex />
        <p className="newenche text-body py-16 text-center text-sm">
          Cargando...
        </p>
      </>
    );
  }

  if (error === "not-found") {
    return (
      <>
        <Seo title="Recurso no encontrado" path={`/recursos/${slug}`} noIndex />
        <div className="newenche py-16 text-center">
          <h1
            className="font-display mb-4 text-2xl font-semibold"
            style={{ color: "var(--pine)" }}
          >
            Recurso no encontrado
          </h1>
          <Link
            to="/recursos"
            className="btn-primary inline-flex rounded-lg px-6 py-3 font-semibold transition"
          >
            Volver a recursos
          </Link>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Seo title="Error al cargar el recurso" path={`/recursos/${slug}`} noIndex />
        <p
          className="newenche py-16 text-center text-sm"
          style={{ color: "var(--clay)" }}
        >
          {error}
        </p>
      </>
    );
  }

  return (
    <article className="newenche mx-auto max-w-3xl space-y-8">
      <Seo
        title={article.title}
        description={
          article.excerpt || `Artículo de Centro Newenche: ${article.title}`
        }
        path={`/recursos/${slug}`}
        image={article.image_url || undefined}
        noIndex={!RESOURCES_SECTION_ENABLED}
      />

      <Link to="/recursos" className="nav-link inline-block text-sm">
        &larr; Volver a recursos
      </Link>

      <header>
        {article.category && (
          <p className="eyebrow mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em]">
            <span className="eyebrow-tick" aria-hidden="true" />
            {article.category}
          </p>
        )}
        <h1
          className="font-display mb-3 text-3xl font-semibold leading-tight md:text-4xl"
          style={{ color: "var(--pine)" }}
        >
          {article.title}
        </h1>
        <p className="text-sm text-slate-500">
          {new Date(article.created_at).toLocaleDateString("es-CL", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </header>

      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.title}
          className="img-frame w-full rounded-[28px] object-cover"
          style={{ maxHeight: "480px" }}
        />
      )}

      <MarkdownRenderer content={article.content} />
    </article>
  );
}