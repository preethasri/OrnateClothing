import { useState } from "react";
import {v4 as uuid} from 'uuid'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from "../../context/CartContext";
import { CouponModal } from "./CouponModal";
import { couponsData } from "./couponsData";
import { useLocation,useNavigate } from "react-router-dom";
import {useOrder,useAddress} from '../../context'
import dayjs from "dayjs";
import {compose,offerFunctions,priceCalculator} from './utils'

const BillDistribution =({selectedAddress})=>{
    const[isCouponModalOpen,setIsCouponModalOpen]=useState(false)
   
    const [coupons,setCoupons]=useState(couponsData)
    const {cart,setCart,clearCart}=useCart()
    const {pathname}=useLocation()
    const {addOrder}=useOrder()

    const {addressState:{address},}=useAddress()
    const navigate=useNavigate()
    const totalPrices=priceCalculator(cart)
    const totalPrice=totalPrices.price+totalPrices.deliverCharges

    const finalPrice=compose(...offerFunctions(coupons))(totalPrice)

   const loadScript=async url=>{
      return new Promise(resolve =>{
        const script=document.createElement("script")
        script.src=url;

        script.onload=()=>{
            resolve(true)
        }
        script.onerror=()=>{
            resolve(false)
        }
       document.body.appendChild(script)
    })
   }
   const displayRazorpayModal=async()=>{
    const res=await loadScript("https://checkout.razorpay.com/v1/checkout.js")

      if(!res){
        toast("Something went wrong",toastProps)
        return 
      }
      const options = {
        key: "rzp_test_T2stBLqynf5XXk",
        amount: finalPrice * 100,
        currency: "INR",
        name: "",
        description: "Thanks for shopping with us!",
        image: "/assets/favicon.ico",
        handler: function (response) {
          const paymentId = response.razorpay_payment_id;
          const orderId = uuid();
  
          const newOrders = {
            paymentId,
            orderId,
            amountPaid: finalPrice,
            orderedProducts: [...cart],
            deliveryAddress: selectedAddress,
            orderedAt: dayjs().format("DD/MM/YYYY hh:mmA"),
          };
          addOrder(newOrders);
          clearCart();
          navigate("/user/orders");
        },
        theme: {
          color: "#F05524",
        },
        
       prefill: {
          name: "swetha srinivasan",
          email: "abc@example.com",
          contact: "9876543210",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };
  
    const handlePayment = () => {
      displayRazorpayModal();
    };
  
   return(
    <section className="bill-distribution">
       

       <CouponModal
        totalPrice={totalPrice}
        isCouponModalOpen={isCouponModalOpen}
        setIsCouponModalOpen={setIsCouponModalOpen}
        coupons={coupons}
        setCoupons={setCoupons}
      />

      {pathname === "/checkout" && (
        <div className="coupon">
          <h3>Coupons</h3>
          <button
            className="btn btn-outline coupon-btn"
            onClick={() => setIsCouponModalOpen(true)}
          >
            Coupons<i className="fas fa-tag text-secondary-color text-bold"></i>
          </button>
        </div>
      )}
        <h3>Purchased Items</h3>
        
        <div className="bill">
          {
             cart.map(product =>(
              <div className="bill-unit" key={product._id}>
              <p>{product.title}</p>
              <p>₹{product.price} x {product.qty}</p>
              </div>
             ))
          }
        </div>
        <hr />
        <h3>Price Details</h3>
        <hr />
        <div className="bill">
          <div className="bill-unit">
            <p>Price ({cart.length} items)</p>
            <p>{totalPrices.price}</p>
          </div>
          <div className="bill-unit">
            <p>Delivery charges <span className="text-small">(₹ 100 for products below ₹1000 )</span>{""}
             </p>
             <p>₹{totalPrices.deliverCharges}</p>

          </div>
       </div>
       <hr />
       <div className="bill-unit">
        <h3>Total Amount</h3>
        <h3>₹{finalPrice}</h3>
          
       </div>
       <hr 
       /> 
       {pathname==="/checkout" && selectedAddress &&(
        <>
        <h3>Delivery Address</h3>
        <hr />
        <div>
          <h4>{selectedAddress.name}</h4>
          <address className="card-text">
            <span>{selectedAddress.street}</span>
            <span>{selectedAddress.state}</span>
            <span>{selectedAddress.country}</span>
            <span>{selectedAddress.zipcode}</span>
            <span>{selectedAddress.mobile}</span>
           
          </address>
        </div>
        </>
       )}
       <div className="card-cta">
        {pathname ==="/checkout" ?(
          <button  disabled={!selectedAddress}
          className="btn btn-primary"
          onClick={handlePayment}
           >
            Proceed to Pay

          </button>

        ):(
          <button className="btn btn-primary"
          onClick={()=>{
            navigate("/checkout")
          }}
          
          >Place Order

          </button>

        )
      }

       </div>
    </section>
   )

}
export {BillDistribution}