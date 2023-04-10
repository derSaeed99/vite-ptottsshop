import { createTheme } from "@mui/material/styles";
import { Component } from "react";
import { overrides } from "./overrides";
import { typography } from "./styles";

export const theme = createTheme({
  typography,
  components: overrides,
});