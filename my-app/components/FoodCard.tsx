"use client";

import { useRouter } from "next/navigation";

export default function FoodCard({ food }: any) {

  const router = useRouter();

  function addToCart() {

    let cart = JSON.parse(
      localStorage.getItem("cart")
      || "[]"
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

    alert(
      `${food.item_name} Added To Cart`
    );
  }

  return (
    <div
      style={{
        width: "280px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "15px",
        margin: "15px",
        display: "inline-block",
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        backgroundColor: "white"
      }}
    >

      <img
        src={food.image_url}
        alt={food.item_name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

      <h2>
        {food.item_name}
      </h2>

      <h3>
        ₹{food.price}
      </h3>

      <p>
        🍽️ {food.food_type}
      </p>

      <p>
        🏪 {food.restaurant_name}
      </p>

      <button
        onClick={addToCart}
        style={{
          padding: "10px",
          margin: "5px",
          cursor: "pointer"
        }}
      >
        Add To Cart
      </button>

      <button
        onClick={() =>
          router.push("/cart")
        }
        style={{
          padding: "10px",
          margin: "5px",
          cursor: "pointer"
        }}
      >
        View Cart
      </button>

    </div>
  );
}