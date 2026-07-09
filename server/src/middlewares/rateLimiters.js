import rateLimit from "express-rate-limit";

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    error: "Demasiados intentos de inicio de sesión. Intenta más tarde.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
