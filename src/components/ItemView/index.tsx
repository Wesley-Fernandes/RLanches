"use client";
import { IProduct } from "@/@types/product.types";
import useCartStore from "@/store/useCartStore";
import convertMoney from "@/utils/convertMoney";
import React from "react";

export default function ItemView(props: IProduct) {
  const { addToCart } = useCartStore();
  return (
    <li className="card col-span-1 bg-base-100 shadow-xl">
      <figure className="overflow-hidden w-full h-[150px]">
        <img src={props.thumb} alt="Item image" />
      </figure>
      <div className="card-body">
        <h2 className="text-base md:text-lg sm:card-title text-ellipsis  overflow-hidden w-full truncate text-nowrap">
          {props.name}
        </h2>
        <div className="card-actions items-center justify-between">
          <span className="rounded-lg font-bold text-xl">
            {convertMoney(props.price)}
          </span>
          <button
            className="btn btn-primary"
            onClick={() => {
              addToCart({
                brand: props.brand,
                description: props.description,
                id: props.id,
                name: props.name,
                price: props.price,
                thumb: props.thumb,
              });
            }}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
}
