import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { AppRoutes } from "./AppRoutes";
import { customTheme } from "./theme";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
