import axios from 'axios';
import {createContext} from 'react'
import {useContext,useState,useEffect} from 'react'
import {useAuth} from './AuthContext'
import { clearCartService } from '../services/cartService';
const CartContext=createContext();

const useCart=()=>useContext(CartContext)


const CartProvider=({children})=>{
    const [cart,setCart]=useState([])
    const {
        auth:{isAuthenticated,token},
    }=useAuth();
    useEffect(()=>{
        if(isAuthenticated){
            (async()=>{
                try{
                    const response=await axios.get("/api/user/cart",{
                        headers:{
                            authorization:token,
                        }
                    })
                    const cart=response.data.cart;
                    setCart(cart)
                }catch(error){
                    console.log(error)
                }
            })();
        }else{
            setCart([])
        }
    },[isAuthenticated,token])
    const clearCart = async (setcart, token) => {
        try {
          const res = await axios.post(
            "/api/user/cart/clearCart",
            {},
            { headers: { authorization: token } }
          );
          setcart(res.data.cart);
        } catch (error) {
          console.error(error);
        }
      };
    return(

        <CartContext.Provider value={{cart,setCart,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
export {useCart,CartProvider}