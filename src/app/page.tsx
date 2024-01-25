import ItemView from "@/components/ItemView";
import products from "./products.json"
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-[calc(100vh-67px)] w-[calc(100vw)]">
      <ul className="grid items-center gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-x-hidden w-full px-2 py-2">
        {products.map((item) => {
          return <ItemView key={item.id} {...item} />;
        })}
      </ul>
    </main>
  );
}
