import readline from "readline";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import pool from "../config/db.js";
import { findAdminByUsername, createAdmin } from "../models/adminModel.js";

dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function askMasked(question) {
  return new Promise((resolve) => {
    const originalWriteToOutput = rl._writeToOutput.bind(rl);
    let masking = false;

    rl._writeToOutput = () => {
      if (!masking) return;
      readline.cursorTo(rl.output, 0);
      readline.clearLine(rl.output, 0);
      rl.output.write(question + "*".repeat(rl.line.length));
    };

    rl.question(question, (answer) => {
      rl._writeToOutput = originalWriteToOutput;
      masking = false;
      process.stdout.write("\n");
      resolve(answer);
    });

    masking = true;
  });
}

async function main() {
  try {
    const username = (
      await ask("Nombre de usuario del administrador: ")
    ).trim();

    if (!username) {
      console.error("El nombre de usuario no puede estar vacío.");
      process.exit(1);
    }

    const existing = await findAdminByUsername(username);
    if (existing) {
      console.error(`El usuario "${username}" ya existe.`);
      process.exit(1);
    }

    const password = await askMasked("Contraseña (mínimo 8 caracteres): ");
    if (!password || password.length < 8) {
      console.error("La contraseña debe tener al menos 8 caracteres.");
      process.exit(1);
    }

    const confirmPassword = await askMasked("Confirma la contraseña: ");
    if (password !== confirmPassword) {
      console.error("Las contraseñas no coinciden.");
      process.exit(1);
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const admin = await createAdmin(username, passwordHash);

    console.log(
      `Administrador "${admin.username}" creado correctamente (id: ${admin.id}).`,
    );
  } catch (error) {
    console.error("Error al crear el administrador:", error.message);
    process.exitCode = 1;
  } finally {
    rl.close();
    await pool.end();
  }
}

main();
