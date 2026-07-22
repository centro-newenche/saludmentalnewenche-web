import { useRef, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

/**
 * Hook compartido por ContactPage.jsx (formType: "orientacion")
 * y ContactForm.jsx (formType: "general").
 *
 * status puede ser: "idle" | "submitting" | "success" | "error" | "missing-captcha"
 */
export function useContactForm(formType, initialValues) {
  const turnstileRef = useRef(null);
  const [values, setValues] = useState(initialValues);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [status, setStatus] = useState("idle");
  const [fieldErrors, setFieldErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function resetTurnstile() {
    turnstileRef.current?.reset();
    setTurnstileToken(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!turnstileToken) {
      setStatus("missing-captcha");
      return;
    }

    setStatus("submitting");
    setFieldErrors({});

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, ...values, turnstileToken }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        setFieldErrors(data?.errors || {});
        setStatus("error");
        resetTurnstile();
        return;
      }

      setStatus("success");
      setValues(initialValues);
      resetTurnstile();
    } catch (err) {
      console.error("Error al enviar el formulario de contacto:", err);
      setStatus("error");
      resetTurnstile();
    }
  }

  return {
    turnstileRef,
    values,
    fieldErrors,
    status,
    turnstileToken,
    setTurnstileToken,
    setStatus,
    handleChange,
    handleSubmit,
  };
}