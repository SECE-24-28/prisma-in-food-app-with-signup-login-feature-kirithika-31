import pool from "@/lib/db";

export async function getFoods() {
  const result = await pool.query(`
SELECT
  m.*,
  r.restaurant_name
FROM menu m
JOIN restaurants r
ON m.restaurant_id = r.restaurant_id
`);

  return result.rows;
}