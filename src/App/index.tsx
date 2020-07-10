import React from "react";
import Dashboard from "./pages/Dashboard";
import { GlobalStyle } from "./global/GlobalStyle";
import { theme } from "./global/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
