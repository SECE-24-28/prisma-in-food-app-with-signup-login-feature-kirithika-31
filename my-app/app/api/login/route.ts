import pool from "@/lib/db";
import { cookies } from "next/headers";

export async function POST(req: Request) {

  const { email, password } =
    await req.json();

  const result =
    await pool.query(
      "SELECT * FROM users WHERE email=$1 AND password=$2",
      [email, password]
    );

  if (result.rows.length > 0) {

    const cookieStore =
      await cookies();

    cookieStore.set(
      "username",
      result.rows[0].username
    );

    return Response.json({
      success: true,
      message: "Login Successful"
    });
  }

  return Response.json({
    success: false,
    message: "Invalid Credentials"
  });
}