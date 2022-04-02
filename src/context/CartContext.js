import axios from 'axios';
import {createContext} from 'react'
import {useContext,useState,useEffect} from 'react'
import {useAuth} from './AuthContext'

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
    return(
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}
export {useCart,CartProvider}