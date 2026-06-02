"use client";

import { useState } from "react";
import FoodCard from "./FoodCard";

export default function Search({ foods }: any) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const filteredFoods = foods.filter((food: any) => {
    const searchMatch =
      food.item_name
        .toLowerCase()
        .includes(search.toLowerCase());

    const typeMatch =
      type === "" ||
      food.food_type === type;

    const priceMatch =
      price === "" ||
      (price === "below150" &&
        food.price < 150) ||
      (price === "above150" &&
        food.price >= 150);

    return (
      searchMatch &&
      typeMatch &&
      priceMatch
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search Food"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <select
        onChange={(e) =>
          setType(e.target.value)
        }
      >
        <option value="">All</option>
        <option value="Veg">Veg</option>
        <option value="NonVeg">
          Non Veg
        </option>
      </select>

      <select
        onChange={(e) =>
          setPrice(e.target.value)
        }
      >
        <option value="">
          All Prices
        </option>

        <option value="below150">
          Below ₹150
        </option>

        <option value="above150">
          ₹150 & Above
        </option>
      </select>

      {filteredFoods.map((food: any) => (
        <FoodCard
          key={food.item_id}
          food={food}
        />
      ))}
    </div>
  );
}