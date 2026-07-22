import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findAdminByUsername, findAdminById } from "../models/adminModel.js";

const isProduction = process.env.NODE_ENV === "production";

function signToken(admin) {
  return jwt.sign(
    { id: admin.id, username: admin.username, role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "8h" },
  );
}

function setAuthCookie(res, token) {
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 8 * 60 * 60 * 1000,
  });
}

export async function login(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Usuario y contraseña son requeridos" });
    }

    const admin = await findAdminByUsername(username);

    if (!admin) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const passwordMatches = await bcrypt.compare(password, admin.password_hash);
    if (!passwordMatches) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = signToken(admin);
    setAuthCookie(res, token);

    return res.json({
      message: "Sesión iniciada correctamente",
      admin: { id: admin.id, username: admin.username },
    });
  } catch (error) {
    console.error("Error en login:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

export function logout(req, res) {
  res.clearCookie("token");
  return res.json({ message: "Sesión cerrada" });
}

export async function me(req, res) {
  try {
    const admin = await findAdminById(req.admin.id);
    if (!admin) {
      return res.status(404).json({ error: "Administrador no encontrado" });
    }
    return res.json({ admin });
  } catch (error) {
    console.error("Error en me:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}
