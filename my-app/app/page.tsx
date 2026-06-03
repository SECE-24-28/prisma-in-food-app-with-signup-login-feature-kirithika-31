import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import { getFoods } from "@/actions/food.actions";
import { cookies } from "next/headers";

export default async function Home() {

  const foods = await getFoods();

  const cookieStore =
    await cookies();

  const username =
    cookieStore.get(
      "username"
    )?.value || null;

  return (
    <>
      <Navbar
        username={username}
      />

      <div
        style={{
          padding: "20px"
        }}
      >
        <Search
          foods={foods}
        />
      </div>
    </>
  );
}