import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // custom blue
    },
    secondary: {
      main: "#f50057", // custom pink
    },
    error: {
      main: "#d32f2f", // custom red
    },
    background: {
      default: "#f0f2f5", // light gray background
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h4: {
      fontWeight: 700,
      letterSpacing: "0.1em",
    },
  },
});

export default theme;
