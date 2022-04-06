import "./cartmanagement.css"
import { useWishList } from "../../context/WishListContext";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { addToCart ,removeFromCart,quantityUpdateInCart} from "../../services/cartService";
import { addToWishList,removeFromWishList } from "../../services/wishListService";

const CartProducts=({product})=>{
    const {_id,title,image,price,categoryName,qty}=product;
    const {setCart}=useCart();
    const {
        auth:{token},
    }=useAuth();
    const{wishList,setWishList}=useWishList();
    const isInWishList = productId =>
    wishList.find(wishlistProduct => wishlistProduct._id === productId);
    return (
        <>
       
        
          <div className="cart-products">
            <div className="img-and-details">
            <div className="cart-product-image">
              <img src={image} alt={title}></img>
            </div>
            <div className="product-details">
              <span className="product-name">{title}</span>
              <span className="product-info">{categoryName}</span>
              <span  className="product-info">
             
                  <span> ₹{price} × {qty} </span>
                  <span>₹{price * qty} </span>
              </span>
              <div className="product-quantity">
                <button onClick={async()=> qty <=1 
                ?setCart(await removeFromCart(token, _id))
                :setCart(await quantityUpdateInCart(token ,"decrement",_id))}>
                    <i className="fa fa-minus"></i>
                </button>
                
                <input type="text" value={product.qty} className="product-qty" readOnly />

                <button onClick={
                    async()=>setCart(await quantityUpdateInCart(token,"increment", _id) )

                }>
                    <i className="fa fa-plus"></i>
                </button>
              </div>
                <div className="wishlist-and-cart">
                    <div className="move-to-wishlist-container">
                    {isInWishList(_id) ?(
                         <button className="remove-from-wishlist" onClick={async () =>
                              setWishList(await removeFromWishList(token, _id))
                            }>
                             Remove from Wishlist
                         </button>
                    ):(
                        <button className="move-to-wishlist"onClick={async () => {
                            
                              setWishList(await addToWishList(token, product));
                             
                          }}> Move To Wishlist</button>)}
                    </div>
                    <div className="remove-from-cart-container">
                        <button className="remove-from-cart" onClick={async()=>setCart(await removeFromCart(token, _id) )}>remove from cart</button>
                    </div>
               </div>
            </div>
            </div>
            
            </div>
              </>
              
    )

}
export default CartProducts