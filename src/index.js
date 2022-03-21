import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter  } from "react-router-dom";
import { makeServer } from "./server";
import {CategoryProvider} from './context/category-context'
import {ProductProvider} from './context/product-context'

// Call make Server
makeServer();

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <ProductProvider>
       <App />
       </ProductProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
