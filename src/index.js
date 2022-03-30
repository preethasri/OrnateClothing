import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter  } from "react-router-dom";
import { makeServer } from "./server";
import {CategoryProvider} from './context/category-context'
import {ProductProvider} from './context/product-context'
import {FilterProvider} from './context/filter-context'
 
// Call make Server
makeServer();

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <FilterProvider>
        <ProductProvider>
          
       <App />
        
       </ProductProvider>
       </FilterProvider>

      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
