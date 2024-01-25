"use client";
import { useDrawnerStore } from "@/store/useDrawnerStore";
import { ItemCard } from "./ItemCard";
import useCartStore from "@/store/useCartStore";
import { Footer } from "./Footer";

interface props {
  children: React.ReactNode;
}
export function Drawner({ children }: props) {
  const { checked, toogle } = useDrawnerStore();
  const { cartItems } = useCartStore();
  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        checked={checked}
      />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side z-50 overflow-x-hidden">
        <div className="menu w-80 min-h-full bg-base-200 text-base-content gap-1 px-0 py-0">
          <div className="flex h-14 items-center justify-end w-full  px-2">
            <button
              className="btn btn-primary w-12 h-12 font-bold text-3xl text-base-content"
              onClick={toogle}
            >
              X
            </button>
          </div>
          <ul className="flex flex-col gap-2 max-h-[calc(100vh-7.5rem)] min-h-[calc(100vh-7.5rem)] overflow-y-auto px-2">
            {cartItems.map((props, index) => {
              return <ItemCard key={index} {...props} />;
            })}
          </ul>
          <Footer list={cartItems} />
        </div>
      </div>
    </div>
  );
}
