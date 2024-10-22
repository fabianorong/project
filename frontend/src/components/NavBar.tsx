import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <Link href={"/"}>Home Page</Link>
      <Link href={"/dashboard"}>Dashboard</Link>

      <div className="flex items-center gap-6 justify-end w-full">
        <SignInButton />
      </div>
    </div>
  );
};

export default NavBar;
