"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

  const [email,setEmail] =
    useState("");

  const [password,setPassword] =
    useState("");

  const router =
    useRouter();

  async function login() {

    const response =
      await fetch(
        "/api/login",
        {
          method:"POST",
          headers:{
            "Content-Type":
            "application/json"
          },
          body:JSON.stringify({
            email,
            password
          })
        }
      );

    const data =
      await response.json();

    alert(data.message);

    if(data.success){
      router.push("/");
      router.refresh();
    }
  }

  return (
    <div>

      <h1>Login</h1>

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
        onClick={login}
      >
        Login
      </button>

    </div>
  );
}