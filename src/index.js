import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter  } from "react-router-dom";
import { makeServer } from "./server";
import {CategoryProvider,ProductProvider,FilterProvider,AuthProvider,WishListProvider} from './context/index'
 
// Call make Server
makeServer();

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
      <CategoryProvider>
        <FilterProvider>
        <ProductProvider>
          <WishListProvider>
          
       <App />
        </WishListProvider>
       </ProductProvider>
       </FilterProvider>

      </CategoryProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
