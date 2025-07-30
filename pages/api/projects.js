import { openDB, ensureProjectsTable } from "../../lib/dbSetup";

export default async function handler(req, res) {
  try {
    await ensureProjectsTable(); // runs only once per server start

    const db = await openDB();
    const projects = await db.all(
      "SELECT id, title, description FROM projects ORDER BY id DESC"
    );
    await db.close();

    res.status(200).json({ projects });
  } catch (error) {
    console.error("DB error:", error);
    res.status(500).json({ error: "Database error: " + error.message });
  }
}
