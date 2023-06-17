import prisma from "@/util/prismaClient";
import Todos from "@/components/Todos";

export default async function Home() {
  const todoList = await prisma.todo.findMany();

  const updateTodo = async (id: string, complete: boolean) => {
    "use server";
    await prisma.todo.update({
      where: { id: id },
      data: { isComplete: complete },
    });
  };

  return (
    <>
      <Todos todoList={todoList} updateTodo={updateTodo} />
    </>
  );
}
