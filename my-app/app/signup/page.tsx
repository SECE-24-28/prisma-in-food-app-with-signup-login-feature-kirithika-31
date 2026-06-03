"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {

  const [username,setUsername]
    = useState("");

  const [email,setEmail]
    = useState("");

  const [password,setPassword]
    = useState("");

  const router =
    useRouter();

  async function signup() {

    const response =
      await fetch(
        "/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({
            username,
            email,
            password
          })
        }
      );

    const data =
      await response.json();

    alert(data.message);

    if(response.ok){
      router.push("/login");
    }
  }

  return (
    <div>

      <h1>Signup</h1>

      <input
        placeholder="Username"
        onChange={(e)=>
          setUsername(
            e.target.value
          )
        }
      />

      <br /><br />

      <input
        placeholder="Email"
        onChange={(e)=>
          setEmail(
            e.target.value
          )
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>
          setPassword(
            e.target.value
          )
        }
      />

      <br /><br />

      <button
        onClick={signup}
      >
        Signup
      </button>

    </div>
  );
}