import FoodCard from "./FoodCard";

function FoodList({ foods }: any) {
  return (
    <>
      {foods.map((food: any) => (
        <FoodCard
          key={food.item_id}
          food={food}
        />
      ))}
    </>
  );
}

export default FoodList;