"use client";

import { action } from "@/actions/product";
import { useRef } from "react";

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);

  const fromAction = async (formData: FormData) => {
    await action(formData);

    formRef.current?.reset();
  };

  return (
    <form ref={formRef} action={fromAction} className="flex gap-4">
      <input className="border" type="text" name="name" />
      <button className="border px-4" type="submit">
        Add
      </button>
    </form>
  );
}
