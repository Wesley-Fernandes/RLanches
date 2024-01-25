import React from "react";
import { User } from "./user";
import { Cart } from "./Cart";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b border-base-200 max-w-[100vw]">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">RLanches</a>
      </div>
      <div className="flex-none">
        <Cart />
        <User />
      </div>
    </div>
  );
}
