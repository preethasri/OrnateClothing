import {useNavigate} from 'react-router-dom'
import "../wishlist/wishlist.css"
import {useAuth} from '../../context/AuthContext'
import {useWishList} from '../../context/WishListContext'
import "../wishlist/wishlist.css"
import {removeFromWishList} from '../../services/wishListService'
import { useCart } from '../../context/CartContext'
import { addToCart } from '../../services/cartService'
const WishListProducts=({product})=>{
    const {_id,title,image,price}=product
    const {
        auth:{token},
    }=useAuth();
    const {setWishList}=useWishList();
    const navigate=useNavigate();
    const{cart,setCart}=useCart();
    const isInCart=productId=>cart.find(cartProduct =>cartProduct._id ===productId)
                
    return(
        <>
           
            <div className="horizontal-card">
                <div className="horizontal-img-content">
                    <div className="horizontal-card-img">
                        <img src={image} alt={title} class="horizontal-img"></img>
                    </div>
                    <div className="horizontal-card-content">
                        <div className="horizontal-card-heading">
                            {title}
                        </div>
                        <div className="horizontal-card-para">
                            price:{price}
                        </div>
                        <div className="horizontal-card-btn">
                        {
                         isInCart(_id) ?(
                            <button className='remove-from-cart' onClick={()=>navigate("/cart")}>
                               Go To Cart
                            </button>
                       ):(
                            <button className='move-to-wishlist' onClick={async()=>{
                                 
                                      setCart(await addToCart(token,product))
                                 
                            }}>Add To Cart </button>
                       )

                   }
                        <button className="remove-from-wishlist" onClick={async () =>
                setWishList(await removeFromWishList(token, _id))
              }>Remove from wishlist</button>
                    </div>
                    </div>
                </div>
                
                    
                   
                


            </div>
        
        </>
    )
}
export {WishListProducts}