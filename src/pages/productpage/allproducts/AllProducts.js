import React from 'react'
import "../allproducts/allproducts.css"
import { useNavigate } from "react-router-dom"
import { useWishList } from "../../../context/WishListContext"
import { addToWishList } from "../../../services/wishListService"
import { removeFromWishList } from "../../../services/wishListService"
import { useAuth } from '../../../context/AuthContext'
export  const AllProducts = ({ product }) => {
     const{   _id,
          title,
          image,
          price,
          categoryName,
          ratings,
          isTopSelling
     } =product
          
          const {auth:{isAuthenticated,token},}=useAuth()
          const{wishList,setWishList}=useWishList();
          const navigate=useNavigate();
          const isInWishList = productID =>
    wishList.find(wishlistProduct => wishlistProduct._id === productID);
    return(
            <>
             
               <div className="product-card">
               <div className="imgandwishlist">
               <div className="img-bg">
                    <img src={image} alt=""></img>
               </div>
               <div className="add-to-wishlist">
                    {isInWishList(_id) ?(
                         <button  onClick={async () =>
                              setWishList(await removeFromWishList(token, _id))
                            }>
                                  <i className="fa fa-heart" ></i>
                         </button>
                    ):(
                        <button onClick={async () => {
                         if (isAuthenticated) {
                           setWishList(await addToWishList(token, product));
                         } else {
                           navigate("/login");
                         }
                       }}>
                               <i className="fa fa-heart"></i>
                        </button>
                    )}
               </div>
               </div>

               <div className="add-to-cart-container">
               <button className="add-to-cart">Add To Cart</button>
               </div>
               <div className="product-content">
               <div className="product-name">
                    <h3>{title}</h3>
                    
     
               </div>
               <div className="price-rating">
                    <h2>{price}</h2>
                    <div className="rating">
                         <i className="fa fa-star"></i>
                         <span>{ratings}</span>
                    </div>
               </div>

               </div>
          </div>
         </>
                           
                
    )
}


