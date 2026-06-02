"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FoodCard({ food }: any) {

  const [message, setMessage] =
    useState("");

  const router = useRouter();

  const images: any = {
    "Ghee Roast":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLLFCOjSc9TLICJ9myaFU0LPwM3diEelCHg&s",

    "Masala Dosa":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLLFCOjSc9TLICJ9myaFU0LPwM3diEelCHg&s",

    "Veg Biriyani":
      "https://png.https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/veg-biryani-recipe-480x270.jpg.com/background/20250103/original/pngtree-highly-detailed-veg-biryani-or-pulav-fried-rice-picture-image_15767365.jpg"
  };

  function addToCart() {

    let cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const item = cart.find(
      (p: any) =>
        p.item_id === food.item_id
    );

    if (item) {
      item.quantity += 1;
    } else {
      cart.push({
        ...food,
        quantity: 1
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    setMessage(
      `${food.item_name} Added To Cart`
    );
  }

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "250px"
      }}
    >
      <img
        src={images[food.item_name]}
        alt={food.item_name}
        width="200"
        height="150"
      />

      <h3>{food.item_name}</h3>

      <p>₹{food.price}</p>

      <p>{food.food_type}</p>

      <button onClick={addToCart}>
        Add To Cart
      </button>

      <button
        onClick={() =>
          router.push("/cart")
        }
      >
        View Cart
      </button>

      <p>{message}</p>
    </div>
  );
}