import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "mydatabase.sqlite");

let hasInitialized = false; // module-level flag

export async function openDB() {
  return open({
    filename: DB_PATH,
    driver: sqlite3.Database,
  });
}

export async function ensureProjectsTable() {
  if (hasInitialized) {
    return;
  }

  const db = await openDB();

  // Create table if not exists
  await db.exec(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL
    )
  `);

  // Check if empty and insert sample data
  const countRow = await db.get("SELECT COUNT(*) as count FROM projects");
  if (countRow.count === 0) {
    await db.run(`INSERT INTO projects (title, description) VALUES
      ('Next.js Contact App', 'A fully responsive contact form with MongoDB backend.'),
      ('Portfolio Website', 'A stylish, modern portfolio built with Next.js.'),
      ('E-commerce Store', 'Online store with payment integration and product management.')
    `);
  }

  await db.close();
  hasInitialized = true;
}
