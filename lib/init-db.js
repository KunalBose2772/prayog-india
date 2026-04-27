import pool from "./db.js";
import fs from "fs";
import path from "path";

export async function initDb() {
  try {
    const schemaPath = path.join(process.cwd(), "schema.sql");
    const schema = fs.readFileSync(schemaPath, "utf8");
    
    // Split schema into individual queries
    const queries = schema
      .split(";")
      .map(q => q.trim())
      .filter(q => q.length > 0);

    console.log("Starting database initialization...");
    
    for (const query of queries) {
      await pool.query(query);
    }

    console.log("Database initialized successfully!");
    return true;
  } catch (err) {
    console.error("Database initialization failed:", err);
    throw err;
  }
}
