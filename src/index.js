import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter  } from "react-router-dom";
import { makeServer } from "./server";
import {CategoryProvider,ProductProvider,FilterProvider,AuthProvider,WishListProvider,CartProvider} from './context/index'
 
// Call make Server
makeServer();

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
       <WishListProvider>
        <CartProvider>
        <ProductProvider>
        <FilterProvider>
  <CategoryProvider>
  <App />
  </CategoryProvider>
  </FilterProvider>
  </ProductProvider>
  </CartProvider>
    </WishListProvider>
  
      

     
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
