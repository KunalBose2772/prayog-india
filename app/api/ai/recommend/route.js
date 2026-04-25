export async function POST(req) {
  const { level } = await req.json();
  let courses = [];
  if (level === "beginner") {
    courses = ["Basic Robotics", "Electronics"];
  } else {
    courses = ["AI Robotics", "Automation"];
  }
  return Response.json({ courses });
}
