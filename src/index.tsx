import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Providers from "./Providers";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./services/Theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Providers>
          <App />
        </Providers>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
