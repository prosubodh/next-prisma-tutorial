"use server";
import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export const action = async (formData: FormData) => {
  // new Promise((res) => setTimeout(res, 3000));

  console.log(Object.fromEntries(formData));

  const data = {
    name: formData.get("name") as string,
  };

  try {
    await prisma.product.create({
      data: data,
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
};
