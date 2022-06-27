import React, {useState} from 'react'
import Navbar from '../../components/navbar/navbar'
import "../singleProductPage/singleProductPage.css"
import { useNavigate,Link,useParams } from 'react-router-dom'
import {useAuth,useWishList,useCart,useProduct} from '../../context/index'
import { addToWishList } from '../../services/wishListService'
import { addToCart } from '../../services/cartService'


export const SingleProductPage=()=>{
    const {productId}=useParams();
    const navigate=useNavigate();
    const {products}=useProduct();
      const {auth:{isAuthenticated,token},}=useAuth()
    const{wishList,setWishList}=useWishList();
    const {cart,setCart}=useCart();
   
    const singleProduct=products?.find((product)=>product.id===productId)

    return(
        <div>
            <Navbar />
        {singleProduct && (
        <div className='single-product-page-container'>
            
                <div className='single-product-details'>
                    <div className='single-product-image'>
                        <img src={singleProduct.image} alt={singleProduct.title}></img>
                    </div>
                    <div className='single-product-info-box'>
                        <div className='singl-product-info-row'>
                            <h2>{singleProduct.title}</h2>
                            <p>price:₹{singleProduct.price}</p>
                        </div>
                        <div className='single-product-content'>
                        <span className='product-category'>{singleProduct.categoryName}</span>
                        <span>{singleProduct.description}</span>
                       </div>
                       <div className='cart-wishlist-btns'>
                       <div className="add-to-cart-container">
                   {
                       cart.find(cartProduct =>cartProduct.id ===productId) ?(
                            <button className='add-to-cart-btn-outline' onClick={()=>navigate("/cart")}>
                               Go To Cart
                            </button>
                       ):(
                            <button className='add-to-cart-btn-primary' onClick={async()=>{
                                 if(isAuthenticated){
                                      setCart(await addToCart(token,singleProduct))
                                      toast(`${singleProduct.title} added to cart`,toastProps)
                                 }else{
                                      navigate("/login")
                                 }
                            }}>
                                Add To Cart
                            </button>
                       )

                   }
               </div>
               <div>
              { wishList.find(wishlistProduct => wishlistProduct.id === productId) ?(
                         <button className='remove-from-wishlist-btn'  onClick={()=>navigate("/wishlist")}>
                              Remove from Wishlist
                         </button>
                    ):(
                        <button className='add-to-wishlist-btn' onClick={async () => {
                         if (isAuthenticated) {
                           setWishList(await addToWishList(token, singleProduct));
                           toast(`${singleProduct.title} added to wishlist`,toastProps)
                         } else {
                           navigate("/login");
                         }
                       }}>
                             Add To Wishlist
                        </button>
                    )}
               </div>
                        
                    </div>
                </div>
                </div>
                </div>
            
            )}
        
    
        </div>
    )
}