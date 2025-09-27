"use client";
import { createTheme } from "@mui/material/styles";
import { lime } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: lime,
  },

  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
