import { ICartItem } from "@/@types/product.types";
import useCartStore from "@/store/useCartStore";
import React from "react";

export function ItemCard(props: ICartItem) {
  const { removeFromCart } = useCartStore();
  return (
    <li className="card bg-base-100 shadow-xl ">
      <div className="flex items-center">
        <figure className="rounded">
          <img
            src={props.product.thumb}
            alt="Album"
            className="w-14"
          />
        </figure>

        <div className="flex flex-col flex-1">
          <div className="h-0 w-full">
            <button
              className="absolute z-50 right-0 top-0 bg-base-content text-base-100 w-5 h-5 rounded-tr-[8px] rounded-bl-[8px]"
              onClick={() => {
                removeFromCart(props.product.id);
              }}
            >
              X
            </button>
          </div>
          <span>{props.product.name}</span>
          <div>Qtd: {props.quantity}</div>
          <span className="flex justify-end w-full">
            R$ {props.product.price}
          </span>
        </div>
      </div>
    </li>
  );
}
