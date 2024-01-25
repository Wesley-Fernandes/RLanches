export default function convertMoney(money: number) {
  const converted = money.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return converted;
}
