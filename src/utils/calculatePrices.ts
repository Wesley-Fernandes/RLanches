import { ICartItem } from "@/@types/product.types";
import convertMoney from "./convertMoney";

export default function calculatePrices(list:ICartItem[]) {
  const some = list.reduce(
    (accumulator, current) =>
      accumulator + current.product.price * current.quantity,
    0
  );

  const convert = convertMoney(some)
  return convert;
}
