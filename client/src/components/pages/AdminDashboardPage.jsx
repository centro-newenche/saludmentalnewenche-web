import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaHome, FaNewspaper } from "react-icons/fa";
import { useAdminAuth } from "../../context/AdminAuthContext";
import {
  ADMIN_LOGIN_PATH,
  ADMIN_DASHBOARD_PATH,
} from "../../config/adminRoutes";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function AdminDashboardPage() {
  const { admin, loading: authLoading, logout } = useAdminAuth();
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!admin) return;

    async function loadArticles() {
      try {
        const res = await fetch(`${API_URL}/api/articles/admin/all`, {
          credentials: "include",
        });
        if (!res.ok) throw new Error("No se pudieron cargar los recursos.");
        const data = await res.json();
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingArticles(false);
      }
    }

    loadArticles();
  }, [admin]);

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "¿Eliminar este recurso? Esta acción no se puede deshacer.",
    );
    if (!confirmed) return;

    try {
      const res = await fetch(`${API_URL}/api/articles/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok && res.status !== 204)
        throw new Error("No se pudo eliminar el recurso.");
      setArticles((prev) => prev.filter((article) => article.id !== id));
    } catch (err) {
      alert(err.message);
    }
  }

  async function handleLogout() {
    await logout();
    navigate(ADMIN_LOGIN_PATH, { replace: true });
  }

  if (authLoading) {
    return (
      <div
        className="flex min-h-screen items-center justify-center text-sm"
        style={{ background: "var(--sand)", color: "var(--ink)" }}
      >
        Verificando sesión...
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
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
              <span className="eyebrow-tick" aria-hidden="true" />
              Panel de gestión
            </p>
            <h1
              className="font-display text-2xl font-semibold"
              style={{ color: "var(--pine)" }}
            >
              Hola, {admin.username}
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="btn-secondary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition"
            >
              <FaHome />
              Ir al inicio
            </Link>
            <Link
              to="/recursos"
              className="btn-secondary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition"
            >
              <FaNewspaper />
              Ver recursos públicos
            </Link>
            <Link
              to={`${ADMIN_DASHBOARD_PATH}/nuevo`}
              className="btn-primary rounded-lg px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
            >
              + Nuevo recurso
            </Link>
            <button
              onClick={handleLogout}
              className="btn-secondary rounded-lg px-5 py-2.5 text-sm font-semibold transition"
            >
              Cerrar sesión
            </button>
          </div>
        </div>

        {loadingArticles && (
          <p className="text-body text-sm">Cargando recursos...</p>
        )}
        {error && (
          <p className="text-sm font-medium" style={{ color: "var(--clay)" }}>
            {error}
          </p>
        )}
        {!loadingArticles && !error && articles.length === 0 && (
          <p className="text-body text-sm">
            Todavía no has publicado ningún recurso.
          </p>
        )}

        <div className="flex flex-col gap-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="card-soft flex flex-wrap items-center justify-between gap-4 rounded-2xl p-4"
            >
              <div className="min-w-0">
                <p className="truncate text-base font-semibold text-slate-800">
                  {article.title}
                </p>
                <p className="text-xs text-slate-500">
                  {article.published ? "Publicado" : "Borrador"} ·{" "}
                  {new Date(article.created_at).toLocaleDateString("es-CL")}
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <Link
                  to={`${ADMIN_DASHBOARD_PATH}/editar/${article.id}`}
                  className="btn-secondary rounded-lg px-4 py-2 text-sm font-medium transition"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleDelete(article.id)}
                  className="rounded-lg border px-4 py-2 text-sm font-medium transition"
                  style={{ borderColor: "var(--line)", color: "var(--clay)" }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
