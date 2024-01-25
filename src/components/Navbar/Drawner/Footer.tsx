import { ICartItem } from "@/@types/product.types";
import calculatePrices from "@/utils/calculatePrices";
import React from "react";

interface props {
  list: ICartItem[];
}
export function Footer({ list }: props) {
 
  return (
    <form className="flex items-center justify-between h-14  px-1 bg-black">
      <span>{calculatePrices(list)}</span>
      <button className="btn btn-primary">Comprar</button>
    </form>
  );
}
