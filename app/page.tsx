import { getAllProducts } from "@/data/product";
import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import Form from "./ui/form";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <>
      <Form />
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}
