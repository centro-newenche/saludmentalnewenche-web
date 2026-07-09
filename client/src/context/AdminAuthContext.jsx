import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkSession = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/auth/me`, {
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        setAdmin(data.admin);
      } else {
        setAdmin(null);
      }
    } catch {
      setAdmin(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  const logout = useCallback(async () => {
    try {
      await fetch(`${API_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } finally {
      setAdmin(null);
    }
  }, []);

  return (
    <AdminAuthContext.Provider
      value={{ admin, loading, refresh: checkSession, logout }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) {
    throw new Error("useAdminAuth debe usarse dentro de <AdminAuthProvider>");
  }
  return ctx;
}
