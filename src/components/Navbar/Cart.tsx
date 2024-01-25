"use client";
import useCartStore from "@/store/useCartStore";
import React from "react";
import { useDrawnerStore } from "@/store/useDrawnerStore";
import calculatePrices from "@/utils/calculatePrices";

export function Cart() {
  const { cartItems } = useCartStore();
  const { toogle } = useDrawnerStore();
  return (
    <div className="dropdown dropdown-end z-40">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">
            {cartItems.length}
          </span>
        </div>
      </div>

      {cartItems.length > 0 ? (
        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div className="card-body">
            <span className="font-bold text-lg">
              {cartItems.length > 0
                ? `${cartItems.length} Items`
                : "Carrinho vazio..."}
            </span>
            <span className="text-info">
              Total: {calculatePrices(cartItems)}
            </span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block" onClick={toogle}>
                Ver carrinho
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div className="flex items-center justify-center flex-col p-2">
            <img
              src="https://images.prismic.io/skipify/6f83a422-7a96-4024-ba47-771021f72266_Shoppers.gif?auto=compress,format"
              className="h-36 w-36"
            />
            <span className="font-bold">VAZIO...</span>
          </div>
        </div>
      )}
    </div>
  );
}
