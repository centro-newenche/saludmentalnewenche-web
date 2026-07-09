import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN_DASHBOARD_PATH } from "../../config/adminRoutes";
import { useAdminAuth } from "../../context/AdminAuthContext";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const { refresh } = useAdminAuth();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "No se pudo iniciar sesión.");
        return;
      }

      await refresh();
      navigate(ADMIN_DASHBOARD_PATH, { replace: true });
    } catch {
      setError("No se pudo conectar con el servidor. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="newenche flex min-h-screen items-center justify-center px-6 py-16"
      style={{ background: "var(--sand)" }}
    >
      <div className="card-soft w-full max-w-md rounded-[28px] p-8 sm:p-10">
        <div className="mb-8 flex flex-col items-center text-center">
          <img
            src="/logo-newenche-no-text.png"
            alt="Logo Newenche"
            className="mb-4 h-14 w-14"
          />
          <p className="eyebrow mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
            <span className="eyebrow-tick" aria-hidden="true" />
            Acceso administrador
          </p>
          <h1
            className="font-display text-2xl font-semibold"
            style={{ color: "var(--pine)" }}
          >
            Panel de gestión
          </h1>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label
              htmlFor="username"
              className="field-label mb-1 block text-sm font-medium"
            >
              Usuario
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              autoComplete="username"
              value={form.username}
              onChange={handleChange}
              className="field-input w-full rounded-lg px-4 py-2.5 text-sm transition"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="field-label mb-1 block text-sm font-medium"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              value={form.password}
              onChange={handleChange}
              className="field-input w-full rounded-lg px-4 py-2.5 text-sm transition"
            />
          </div>

          {error && (
            <p className="text-sm font-medium" style={{ color: "var(--clay)" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full rounded-lg px-6 py-3 font-semibold transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}
