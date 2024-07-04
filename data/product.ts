import prisma from "@/utils/prisma";

export async function getAllProducts() {
  return await prisma.product.findMany();
}
