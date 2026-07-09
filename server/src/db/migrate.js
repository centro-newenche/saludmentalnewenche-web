import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import pool from "../config/db.js";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function migrate() {
  try {
    const schemaPath = path.join(__dirname, "schema.sql");
    const sql = fs.readFileSync(schemaPath, "utf-8");

    console.log("Ejecutando schema.sql...");
    await pool.query(sql);
    console.log("MIGRACION COMPLETADA. Tablas creadas/verificadas.");
  } catch (error) {
    console.error("ERROR al migrar la base de datos:", error.message);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}

migrate();
