import prisma from "@/util/prismaClient";
import NewTodo from "@/components/NewTodo";
import { redirect } from "next/navigation";
import React from "react";

export interface IFormData {
  todo: string;
}

export default function NewPage() {
  const handleAddTodo = async (data: IFormData) => {
    "use server";
    console.log(JSON.stringify(data));
    // await prisma.todo.create({ data: { task: data.todo } });
    // redirect("/");
  };

  return <NewTodo addTodo={handleAddTodo} />;
}
