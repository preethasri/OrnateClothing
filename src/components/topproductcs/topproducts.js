
import '../topproductcs/topproducts.css'



export default function TopProducts({ title, image,price,ratings,}){
    
    return(
        <div>
           
               <div className='top-products'>
                
                 <div className="product-card">
                     <div className="imgandwishlist">
                         <div className="img-bg">
                             <img src={image} alt=""></img>
     
                         </div>
     
                         <div className="add-to-wishlist">
                             <i className="fa fa-heart"></i>
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
            </div>
            
            </div>

    
    )
}