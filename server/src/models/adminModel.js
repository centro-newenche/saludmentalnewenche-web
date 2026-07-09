import pool from "../config/db.js";

export async function findAdminByUsername(username) {
  const { rows } = await pool.query(
    "SELECT id, username, password_hash FROM admins WHERE username = $1",
    [username],
  );
  return rows[0] || null;
}

export async function findAdminById(id) {
  const { rows } = await pool.query(
    "SELECT id, username, created_at FROM admins WHERE id = $1",
    [id],
  );
  return rows[0] || null;
}

export async function createAdmin(username, passwordHash) {
  const { rows } = await pool.query(
    `INSERT INTO admins (username, password_hash)
         VALUES ($1, $2)
         RETURNING id, username, created_at`,
    [username, passwordHash],
  );
  return rows[0];
}

export async function countAdmins() {
  const { rows } = await pool.query(
    "SELECT COUNT(*)::int AS count FROM admins",
  );
  return rows[0].count;
}
