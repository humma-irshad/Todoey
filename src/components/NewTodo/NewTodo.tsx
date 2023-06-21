"use client";

import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl } from "@mui/material";
import Link from "next/link";

import { IFormData } from "@/app/new/page";
import {
  AddButton,
  CancelButton,
  FormBox,
  HeadingTypography,
  StyledStack,
  StyledTextField,
} from "./NewTodo.style";
import { rhfServerAdapter } from "@/util/misc";

type AddTodo = { addTodo: (data: IFormData) => Promise<void> };

export const NewTodo = ({ addTodo }: AddTodo) => {
  const schema: ZodType<IFormData> = z.object({
    todo: z.string().min(5, "Enter a Todo before submitting"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { todo: "" },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const { push: pushRoute } = useRouter();

  return (
    <>
      <HeadingTypography variant="h3">New Todo</HeadingTypography>
      <FormBox>
        <FormControl
          noValidate
          component="form"
          onSubmit={handleSubmit(
            rhfServerAdapter(addTodo, { onSuccess: () => pushRoute("/") })
          )}
        >
          <StyledTextField
            variant="standard"
            label="Todo"
            helperText={errors.todo ? errors.todo?.message : ""}
            {...register("todo")}
          />
          <StyledStack>
            <CancelButton variant="outlined" LinkComponent={Link} href=".">
              Cancel
            </CancelButton>
            <AddButton type="submit" disabled={isSubmitting}>
              Add
            </AddButton>
          </StyledStack>
        </FormControl>
      </FormBox>
    </>
  );
};
