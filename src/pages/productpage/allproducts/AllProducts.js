import React from 'react'
import "../allproducts/allproducts.css"
import { useNavigate ,Link} from "react-router-dom"
import { useWishList } from "../../../context/WishListContext"
import { addToWishList } from "../../../services/wishListService"
import { removeFromWishList } from "../../../services/wishListService"
import { useAuth } from '../../../context/AuthContext'
import { useCart } from '../../../context/CartContext'
import { addToCart } from '../../../services/cartService'
import { toast } from 'react-toastify'

export  const AllProducts = ({ product }) => {
     const{   _id,
          title,
          image,
          price,
          categoryName,
          ratings,
          isTopSelling,
          id
     } =product
          
          const {auth:{isAuthenticated,token},}=useAuth()
          const{wishList,setWishList}=useWishList();
          const {cart,setCart}=useCart();
          const navigate=useNavigate();
          const isInWishList = productId =>
    wishList.find(wishlistProduct => wishlistProduct._id === productId);
      
    const isInCart=productId=>cart.find(cartProduct =>cartProduct._id ===productId)
       console.log(_id)         
   const {toastProps}=useAuth();
   
    return(
            <>
             
               <div className="product-card">
               <div className="imgandwishlist">
               <div className="img-bg">
               <Link to={`/products/${id}`}>
                    <img src={image} alt=""></img>
                    </Link>
               </div>
               <div className="add-to-wishlist">
                    {isInWishList(_id) ?(
                         <button  onClick={async () =>
                              setWishList(await removeFromWishList(token, _id))
                              
                            }>

                                  <i className="fas fa-heart" ></i>
                         </button>
                    ):(
                        <button onClick={async () => {
                         if (isAuthenticated) {
                           setWishList(await addToWishList(token, product));
                           toast(`${product.title} added to wishlist`,toastProps)
                         } else {
                           navigate("/login");
                         }
                       }}>
                               <i className="far fa-heart"></i>
                        </button>
                    )}
               </div>
               </div>

               <div className="add-to-cart-container">
                   {
                       isInCart(_id) ?(
                            <button className='add-to-cart-btn-outline' onClick={()=>navigate("/cart")}>
                               Go To Cart
                            </button>
                       ):(
                            <button className='add-to-cart-btn-primary' onClick={async()=>{
                                 if(isAuthenticated){
                                      setCart(await addToCart(token,product))
                                      toast(`${product.title} added to cart`,toastProps)
                                 }else{
                                      navigate("/login")
                                 }
                            }}>
                                Add To Cart
                            </button>
                       )

                   }
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


