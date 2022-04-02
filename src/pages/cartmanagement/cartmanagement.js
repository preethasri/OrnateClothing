import "./cartmanagement.css"
import CartProducts from "./cartProducts"
import {useCart} from '../../context/CartContext'
import NavBar from '../../components/navbar/navbar'
import { Link } from "react-router-dom"


const CartManagement=()=>{
    const  { cart }=useCart();
    const getTotalPrice=cart.reduce(
        (acc,{price,qty})=>acc+price *qty,
        0)
    return (
        <div >
            <NavBar />
            {cart.length >0 ?(
                <div>
            <div  className="cart">
                <div className="cart-container">
                    {cart.map(product =>(
                       <CartProducts key={product.id}  product={product} />
                    ))}
                </div>
                </div>
                 <div className="price-details">
  
                 <h4>PRICE DETAILS </h4>
                <hr></hr>
                 <div className="item-price">
                     <span className="details">price({cart.length}items)</span>
                     <span className="final-details"> ₹{getTotalPrice}</span>
                 </div>
                 
                     <div className="delivery-charges">
                     <span className="details">delivery-charge</span>
                     <span className="final-details">FREE</span>
                 </div> 
                <hr></hr>
                 <div className="total-amount">
                     <span className="details">total Amount</span>
                     <span className="final-details">₹{getTotalPrice}</span>
                     </div>
                    <hr></hr> 
                     <div className="place-order">
                     <button className="place-order-btn">Buy Now</button>
                     </div>
             </div>
             </div>
            
            ):(
               <div className="cart-info">
                   <h1>your cart is Empty</h1>
                   <Link to="/productpage">
                        <button className='btn-primary'>shop now</button>
                    </Link>

               </div>
            )
           }
       
        </div>

  

    )
}
export  {CartManagement}