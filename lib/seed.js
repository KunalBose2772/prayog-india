const pool = require("./db").default; // Note: In Next.js this might be tricky to run standalone, better use a simple node script
const bcrypt = require("bcryptjs");

async function seed() {
  try {
    console.log("Seeding database...");

    // Clear existing data (optional)
    // await pool.query("SET FOREIGN_KEY_CHECKS = 0");
    // await pool.query("TRUNCATE TABLE users");
    // ...

    // 1. Create Admin
    const adminPass = await bcrypt.hash("admin123", 10);
    await pool.query(
      "INSERT IGNORE INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      ["Admin Head", "admin@prayogindia.in", adminPass, "admin"]
    );

    // 2. Create Courses
    await pool.query(
      "INSERT IGNORE INTO courses (title, description, price, type, duration) VALUES (?, ?, ?, ?, ?)",
      ["Industrial Robotics", "Master the world of automation.", 15000, "offline", "6 Months"]
    );
    await pool.query(
      "INSERT IGNORE INTO courses (title, description, price, type, duration) VALUES (?, ?, ?, ?, ?)",
      ["AI Foundation", "Learn the basics of Machine Learning.", 12000, "online", "4 Months"]
    );

    // 3. Create Students
    const studentPass = await bcrypt.hash("student123", 10);
    const [studentResult] = await pool.query(
      "INSERT IGNORE INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      ["Rahul Sharma", "rahul@gmail.com", studentPass, "student"]
    );
    const studentId = studentResult.insertId;

    // 4. Enroll Student
    if (studentId) {
      await pool.query(
        "INSERT IGNORE INTO enrollments (user_id, course_id, total_amount, amount_paid, status) VALUES (?, ?, ?, ?, ?)",
        [studentId, 1, 15000, 5000, "active"]
      );
    }

    console.log("Seeding complete!");
    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
}

// seed(); 
// I'll run this via a temporary script if possible, or just create a trigger in the API.
