import pool from "@/lib/db";

export async function POST(req: Request) {

  const { username, email, password }
    = await req.json();

  await pool.query(
    "INSERT INTO users(username,email,password) VALUES($1,$2,$3)",
    [username, email, password]
  );

  return Response.json({
    message: "Signup Successful"
  });
}