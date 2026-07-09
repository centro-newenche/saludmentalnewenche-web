export function notFoundHandler(req, res) {
  res.status(404).json({ error: "Ruta no encontrada" });
}

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  console.error("Error no controlado:", err);
  res.status(err.status || 500).json({
    error: err.message || "Error interno del servidor",
  });
}
