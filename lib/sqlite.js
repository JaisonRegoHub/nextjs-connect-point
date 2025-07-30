import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

export async function openDB() {
  const dbFilePath = path.join(process.cwd(), "data", "connect-point.sqlite");
  return open({
    filename: dbFilePath,
    driver: sqlite3.Database,
  });
}
