import axios from "axios";
import { createContext } from "react";
import { useContext,useState,useEffect } from "react";

import {useAuth} from './AuthContext'
const WishListContext=createContext()

const useWishList=()=>useContext(WishListContext)
  
const WishListProvider=({children})=>{
    const[wishList,setWishList]=useState([])
    const {
        auth:{isAuthenticated,token},
    }=useAuth();
 
    useEffect(()=>{
        if(isAuthenticated){
            (async ()=>{
                try{
                    const response=await axios.get("/api/user/wishlist",{
                        headers:{
                            authorization:token,
                        },

                    })
                    const wishList=response.data.wishlist;
                    setWishList(wishList)
                }
                catch(error){
                    console.log(error)
                }
            })();
        }else{
            setWishList([])
        }
    },[isAuthenticated,token])
    return(
      <WishListContext.Provider value={{wishList,setWishList}}>
          {children}

      </WishListContext.Provider>
    )

}
export {useWishList,WishListProvider}