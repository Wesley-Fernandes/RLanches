import { create } from "zustand";
import { ICartItem, IProduct } from "@/@types/product.types";

interface ICartStore {
  cartItems: ICartItem[];
  addToCart: (product: IProduct, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
}

const useCartStore = create<ICartStore>((set) => ({
  cartItems: [],
  addToCart: (product, quantity = 1) => {
    set((state) => {
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingCartItemIndex !== -1) {
        // Verificando se o item está no cart
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingCartItemIndex].quantity += quantity;
        console.log(updatedCartItems);

        return { cartItems: updatedCartItems };
      } else {
        // Se o item não estiver no cart, devo adicionar no cart
        console.log([...state.cartItems, { product, quantity }]);
        return { cartItems: [...state.cartItems, { product, quantity }] };
      }
    });
  },
  removeFromCart: (productId) => {
    set((state) => ({
      cartItems: state.cartItems.filter(
        (item) => item.product.id !== productId
      ),
    }));
  },
  increaseQuantity: (productId) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    }));
  },
  decreaseQuantity: (productId) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      ),
    }));
  }
}));

export default useCartStore;
