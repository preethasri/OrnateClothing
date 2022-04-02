import {useNavigate} from 'react-router-dom'
import "../wishlist/wishlist.css"
import {useAuth} from '../../context/AuthContext'
import {useWishList} from '../../context/WishListContext'
import "../wishlist/wishlist.css"
import {removeFromWishList} from '../../services/wishListService'

const WishListProducts=({product})=>{
    const {_id,title,image,price}=product
    const {
        auth:{token},
    }=useAuth();
    const {setWishList}=useWishList();
    const navigate=useNavigate();
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
                        <button className="add-to-cart">add to cart</button>
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