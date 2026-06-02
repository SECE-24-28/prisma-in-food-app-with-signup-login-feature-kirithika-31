"use client";

import { useEffect, useState } from "react";

export default function Cart() {

  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    loadCart();
  }, []);

  function loadCart() {
    const data = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setCart(data);
  }

  function increase(id: number) {

    const updated = [...cart];

    const item = updated.find(
      (p) => p.item_id === id
    );

    if (item) {
      item.quantity++;
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updated)
    );

    setCart(updated);
  }

  function decrease(id: number) {

    const updated = [...cart];

    const item = updated.find(
      (p) => p.item_id === id
    );

    if (item && item.quantity > 1) {
      item.quantity--;
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updated)
    );

    setCart(updated);
  }

  function removeItem(id: number) {

    const updated = cart.filter(
      (p) => p.item_id !== id
    );

    localStorage.setItem(
      "cart",
      JSON.stringify(updated)
    );

    setCart(updated);
  }

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  return (
    <div>

      <h1>Shopping Cart</h1>

      {cart.map((item) => (

        <div
          key={item.item_id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px"
          }}
        >

          <h3>{item.item_name}</h3>

          <p>
            Price : ₹{item.price}
          </p>

          <p>
            Quantity :
            {item.quantity}
          </p>

          <p>
            Total :
            ₹{
              item.price *
              item.quantity
            }
          </p>

          <button
            onClick={() =>
              increase(item.item_id)
            }
          >
            +
          </button>

          <button
            onClick={() =>
              decrease(item.item_id)
            }
          >
            -
          </button>

          <button
            onClick={() =>
              removeItem(item.item_id)
            }
          >
            Remove
          </button>

        </div>

      ))}

      <h2>
        Grand Total : ₹{total}
      </h2>

    </div>
  );
}