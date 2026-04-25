export async function POST(req) {
  const { user_id, course_id, image } = await req.json();
  // Save image path + data in DB
  return Response.json({ success: true });
}
