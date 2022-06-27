import "./cartmanagement.css"
import CartProducts from "./cartProducts"
import {useCart} from '../../context/CartContext'
import NavBar from '../../components/navbar/navbar'
import { Link } from "react-router-dom"
import { BillDistribution } from "./BillDistribution"

const CartManagement=()=>{
    const  { cart }=useCart();
    const getTotalPrice=cart.reduce(
        (acc,{price,qty})=>acc+price *qty,
        0)
    return (
        <div>
            <NavBar />
            <div className="cart-container" >
        
            {cart.length >0 ?(
                <div className="cart">
           
                <div className="cart-cards">
                    {cart.map(product =>(
                       <CartProducts key={product._id}  product={product} />
                    ))}
                </div>
                
           {cart.length > 0 && <BillDistribution />}
        
                </div>
              
            
            
            ):(
               <div className="cart-info">
                   <h1>your cart is Empty</h1>
                   <Link to="/productpage">
                        <button className='btn-primary'>shop now</button>
                    </Link>

               </div>
            )
            
           }</div>
        </div>
       
  

    )
}
export  {CartManagement}