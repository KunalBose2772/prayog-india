import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";

async function initialize() {
  const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST || "localhost",
    user: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD || "",
  });

  console.log("Connected to MySQL server.");

  const dbName = process.env.DATABASE_NAME || "prayog_india";
  await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
  console.log(`Database "${dbName}" ensured.`);

  await connection.query(`USE ${dbName}`);

  const schemaPath = path.join(process.cwd(), "schema.sql");
  const schema = fs.readFileSync(schemaPath, "utf8");
  
  const queries = schema
    .split(";")
    .map(q => q.trim())
    .filter(q => q.length > 0);

  console.log("Running schema queries...");
  for (const query of queries) {
    try {
      await connection.query(query);
    } catch (err) {
      console.warn("Query failed (might already exist):", query.substring(0, 50) + "...");
    }
  }

  console.log("Initialization complete!");
  await connection.end();
}

initialize().catch(console.error);
