"use client";

import { ChangeEvent } from "react";
import {
  Stack,
  Typography,
  Button,
  Box,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import Link from "next/link";

import { Todo } from "@prisma/client";

interface ITodosProps {
  todoList: Todo[];
  updateTodo: (id: string, complete: boolean) => void;
}

export function Todos({ todoList, updateTodo }: ITodosProps) {
  return (
    <>
      <Stack direction="row" sx={{ display: "flex", width: "90%" }}>
        <Typography variant="h3" m={4} flex={1}>
          Todos
        </Typography>
        <Button
          variant="outlined"
          LinkComponent={Link}
          href="/new"
          sx={{
            borderColor: "primary.contrastText",
            "&:hover": { borderColor: "primary.contrastText" },
            color: "primary.contrastText",
            height: "max-content",
            marginTop: 6,
          }}
        >
          New
        </Button>
      </Stack>
      <Box m={4} sx={{ width: "100%" }}>
        <FormGroup>
          {todoList &&
            todoList.map((todo) => (
              <FormControlLabel
                key={todo.id}
                value="end"
                control={
                  <Checkbox
                    disableRipple
                    sx={{
                      [`&, &.${checkboxClasses.checked}`]: {
                        color: "white",
                      },
                    }}
                    defaultChecked={todo.isComplete}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      updateTodo(todo.id, event?.target?.checked)
                    }
                  />
                }
                label={todo.task}
                labelPlacement="end"
              />
            ))}
        </FormGroup>
      </Box>
    </>
  );
}

export default Todos;
