import prisma from "@/util/prismaClient";
import NewTodo from "@/components/NewTodo";

export interface IFormData {
  todo: string;
}

export default function NewPage() {
  const handleAddTodo = async (data: IFormData) => {
    "use server";
    await prisma.todo.create({ data: { task: data.todo } });
  };

  return <NewTodo addTodo={handleAddTodo} />;
}
