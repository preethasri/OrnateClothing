
import '../topproductcs/topproducts.css'



export default function TopProducts({ title, image,price,ratings,}){
    
    return(
        <div>
              <div className="top-products-card">
                     <div className="top-products-imgandwishlist">
                         <div className="top-products-img-bg">
                             <img src={image} alt={title}></img>
     
                         </div>
     
                         <div className="top-products-add-to-wishlist">
                             <i className="fa fa-heart"></i>
                         </div>
                     </div>
                     <div className="top-products-add-to-cart-container">
                         <button className="top-products-add-to-cart">Add To Cart</button>
                     </div>
                     <div className="top-products-product-content">
                         <div className="top-products-product-name">
                             <h3>{title}</h3>
                         </div>
     
                         <div className="top-products-price-rating">
                             <h2>{price}</h2>
                             <div className="top-products-rating">
                                 <i className="fa fa-star"></i>
                                 <span>{ratings}</span>
                             </div>
                         </div>
     
                     </div>
                 </div>
            </div>
            
        

    
    )
}