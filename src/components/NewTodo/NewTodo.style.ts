import {
  Box,
  Button,
  inputLabelClasses,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
// import inputLabelClasses from "@mui/material";

export const HeadingTypography = styled(Typography)(() => ({
  margin: "2rem",
}));

export const FormBox = styled(Box)(() => ({
  width: "25rem",
  height: "13rem",
  margin: "auto",
  padding: "1.5rem",
  display: "flex",
  flexFlow: "column wrap",
  borderRadius: "8px",
  backgroundColor: "#00bebe",
}));

export const StyledTextField = styled(TextField)(() => ({
  maxWidth: "15rem",
  margin: "2rem",
  "& input": {
    fontSize: "large",
    borderBottom: "2px solid #8b0000",
  },
  "& label": {
    color: "#8b0000",
  },
  ".css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
    color: "#8b0000",
  },
  "& p": {
    color: "#dc143c",
  },
  ".css-v4u5dn-MuiInputBase-root-MuiInput-root:after": {
    borderBottom: "#8b0000",
  },
}));

export const StyledStack = styled(Stack)(() => ({
  gap: 10,
  flexDirection: "row",
  justifyContent: "flex-end",
}));

export const CancelButton = styled(Button)(() => ({
  width: "max-content",
  borderColor: "#8b0000",
  color: "#8b0000",
  "&: hover": {
    backgroundColor: "#8b0000",
    color: "#fff",
  },
}));

export const AddButton = styled(Button)(() => ({
  width: "max-content",
  backgroundColor: "#8b0000",
  color: "#fff",
  "&: hover": {
    backgroundColor: "#be0000",
  },
}));
