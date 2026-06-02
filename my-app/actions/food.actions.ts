import pool from "@/lib/db";

export async function getFoods() {
  const result = await pool.query(
    "SELECT * FROM menu"
  );

  return result.rows;
}