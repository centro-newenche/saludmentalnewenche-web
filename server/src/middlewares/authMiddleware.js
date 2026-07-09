import jwt from "jsonwebtoken";

export function verifyAdmin(req, res, next) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ error: "No autenticado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin") {
      return res.status(403).json({ error: "Acceso denegado" });
    }

    req.admin = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Sesión inválida o expirada" });
  }
}
