import logo from './logo.svg';
import './App.css';
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import Counter from "./Counter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Counter />
    </ThemeProvider>
  );
}

export default App;
