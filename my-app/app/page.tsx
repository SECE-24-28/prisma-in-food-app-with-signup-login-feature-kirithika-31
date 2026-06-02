import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import { getFoods } from "@/actions/food.actions";

export default async function Home() {
  const foods = await getFoods();

  return (
    <>
      <Navbar />
      <h1>FoodLand</h1>
      <Search foods={foods} />
    </>
  );
}