import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

function ResourceCard({ article }) {
  return (
    <Link
      to={`/recursos/${article.slug}`}
      className="card-soft group flex flex-col overflow-hidden rounded-2xl transition hover:-translate-y-1"
    >
      <div
        className="aspect-[16/10] w-full overflow-hidden"
        style={{ background: "var(--sand)" }}
      >
        {article.image_url ? (
          <img
            src={article.image_url}
            alt={article.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className="font-display flex h-full w-full items-center justify-center text-lg italic"
            style={{ color: "var(--pine)" }}
          >
            Newenche
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        {article.category && (
          <span className="eyebrow mb-2 text-xs font-semibold uppercase tracking-[0.12em]">
            {article.category}
          </span>
        )}
        <h3
          className="font-display mb-2 text-lg font-semibold leading-snug"
          style={{ color: "var(--pine)" }}
        >
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="text-body line-clamp-3 flex-1 text-sm">
            {article.excerpt}
          </p>
        )}
        <p className="mt-4 text-xs text-slate-500">
          {new Date(article.created_at).toLocaleDateString("es-CL", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </Link>
  );
}

export default function ResourcesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadArticles() {
      try {
        const res = await fetch(`${API_URL}/api/articles`);
        if (!res.ok) throw new Error("No se pudieron cargar los recursos.");
        const data = await res.json();
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadArticles();
  }, []);

  return (
    <div className="newenche space-y-10">
      <section data-reveal className="reveal-up">
        <p className="eyebrow mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em]">
          <span className="eyebrow-tick" aria-hidden="true" />
          Recursos
        </p>
        <h1
          className="font-display mb-4 text-3xl font-semibold md:text-4xl"
          style={{ color: "var(--pine)" }}
        >
          Artículos y noticias
        </h1>
        <p className="text-body max-w-2xl text-lg">
          Reflexiones, orientaciones y novedades del centro para adolescentes,
          familias y comunidad educativa.
        </p>
      </section>

      {loading && <p className="text-body text-sm">Cargando recursos...</p>}
      {error && (
        <p className="text-sm font-medium" style={{ color: "var(--clay)" }}>
          {error}
        </p>
      )}
      {!loading && !error && articles.length === 0 && (
        <p className="text-body text-sm">Todavía no hay recursos publicados.</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ResourceCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
