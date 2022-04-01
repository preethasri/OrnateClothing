import {Link,useNavigate} from 'react-router-dom'
import {useWishList} from '../../context/WishListContext'
import "../wishlist/wishlist.css"
import Navbar from '../../components/navbar/navbar'

import { WishListProducts} from './wishlistProducts'

function WishList(){
    const {wishList}=useWishList();
    
    return(
        <>
        <Navbar />
        <div>
        {wishList.length !==0 ? (
             <div className='wishlist-container'>
                
                 <div  className='cards'>
                 {wishList.map((product) =>(
                     <WishListProducts key={product.id} product={product} />
                 ))}
                 </div>
             </div>

        ):(
                <div className='wishlist-container'>
                    <h1>Your wishlist is empty</h1>
                    <Link to="/productpage">
                        <button className='btn-primary'>shop now</button>
                    </Link>

                </div>
        )}
       </div>
       <br></br>

        </>
    )
}


  export {WishList}