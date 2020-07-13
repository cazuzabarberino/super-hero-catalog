import React from "react";
import Home from "./pages/Home";
import { GlobalStyle } from "./global/GlobalStyle";
import { theme } from "./global/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "../redux";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
