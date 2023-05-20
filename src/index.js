import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsContext, ProductsProvider } from "./contexts/ProductsContext";

export { ProductsContext };

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </Router>
  </StrictMode>
);
