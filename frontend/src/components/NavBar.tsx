import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";

const NavBar = () => {
  return (
    <header>
      <Link href={"/"}>Home Page</Link>
      <Link href={"/dashboard"}>Dashboard</Link>

      <SignInButton />
    </header>
  );
};

export default NavBar;
