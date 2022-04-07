import "../navbar/navbar.css"
import {Link,useNavigate} from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import { useWishList} from "../../context/WishListContext";
import { useCart } from "../../context/CartContext";
import LogOutHandler from "../../services/logoutService";
import { useState } from "react";
import { useProduct } from "../../context/product-context";
import { useFilter } from "../../context/filter-context";
import { AddressContainer } from "../addressManagement/addressContainer";

export default function Navbar() {

    const  {setSearchTerm}=useFilter();
    const navigate=useNavigate();
    const[inputKey,setInputKey]=useState("")
    const {auth:{isAuthenticated,user}}=useAuth()
    const {wishList}=useWishList()
    const {cart}=useCart()
   
   console.log(inputKey)
   const searchHandler = () => {
    if (setSearchTerm === "") {
      return;
    } else {
      setSearchTerm(inputKey);
      if (inputKey === "") {
        return;
      } else {
        setInputKey("");
        navigate("/productpage");
      }
    }
  };
  
    
    return (
      <div>
          <div className='navbar-container'>
              <div className='navbar-wrapper'>
                  <div className='navbar-left'>
                      <div className="nav-item">
                      <Link to="/" className="link-tag">
                        <div className='brand-name'>Ornate</div>
                      </Link>
                      </div>
                      <div className="nav-item">
                      <Link to="/productpage" className="link-tag">
                          <div>
                      <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                      </div>
                      <span>products</span>
                      </Link>
                      </div>
                  </div>
                  <div className='navbar-center'>
                      <div className='navbar-search'>
                       <input className='search-input' placeholder='search for products...' type="search"
                          value={inputKey}
                          onChange={(event) => setInputKey(event.target.value)}
                       />
                      
                      <button className="search-btn" onClick={() => searchHandler}>
                       <i className="fa fa-search"  id="search-icon" aria-hidden="true"></i>
                        
                      </button>
                       
                       
                   
                      </div>
                  </div>
                  <div className='navbar-right'>
                    
                      {!isAuthenticated ?(
                          <div className="nav-item">
                    
                          <Link to="/login" className="link-tag" >
                              <div>
                              <i class="fas fa-sign-in-alt"></i>
                                </div>
                                <span>Login</span>
                                
                          </Link>
                        </div>
                      ):(
                        <div className="nav-item">
                    
                        
                                                <div className="dropdown">
                            <div className="dropdown-nav-right">
                              <button className="dropdown-btn">
                                <div >
                                <Link to="/login" className="link-tag" >
                                <i className="fa fa-user"></i></Link>
                                </div>
                                <span>user</span>
                                
                              </button>
                            <div className="dropdown-list">
                              <Link to="/address" className="link-tag">
                               <button className="dropdown-menu">address</button>
                               </Link>
                               <Link to="/user" className="link-tag">
                               <button  className="dropdown-menu">profile</button>
                              </Link>
                               <Link to="/logout" className="link-tag">
                               <button onClick={LogOutHandler} className="dropdown-menu">logout</button>
                               </Link>
                             
                              
                            </div>
                              
                            </div>
                          </div>
                              
                        
                      </div> 

                      )}
                       <div className="nav-item">
                          <Link to={isAuthenticated ? "/wishlist":"/login"} className="link-tag">
                        <div>
                          <div className="icon-badge">
                           <i className="fas fa-heart" id="wishlist-icon"></i>
                           {wishList.length >0&&(
                                <span className="wishlist-badge">{wishList.length}</span>
                                
                           )}
                           </div>
                           </div>
                            <span>wishlist</span>
                           
                          </Link>

                      </div>
                      <div className="nav-item">
                          <Link to={isAuthenticated ? "/cart":"/login"} className="link-tag">
                              <div>
                          <div className="icon-badge">
                           <i className="fas fa-shopping-cart" id="cart-icon"></i>
                           {cart.length >0 &&(
                                <span className="cart-badge">{cart.length}</span>
                           )}
                                </div>
                                </div>
                                <span>cart</span>
                           
                          </Link>

                      </div>
                      
                      
                  </div>
              </div>
          </div>
      </div>
    )
  }