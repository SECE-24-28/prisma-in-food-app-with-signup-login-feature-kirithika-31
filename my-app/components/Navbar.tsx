import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";
export default function Navbar({
  username,
}: {
  username: string | null;
}) {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        borderBottom: "1px solid gray"
      }}
    >
      <h1> FoodLand</h1>

      <div>
        <Link href="/">Home</Link>

        {" | "}

        <Link href="/cart">Cart</Link>

        {" | "}

        {username ? (
          <>
            Welcome {username}

            {" | "}

            <LogoutButton />
          </>
        ) : (
          <>
            <Link href="/login">
              Login
            </Link>

            {" | "}

            <Link href="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
}