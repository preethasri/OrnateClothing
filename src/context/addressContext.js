import { createContext,useContext,useReducer,useEffect } from "react";
import {useAuth} from './AuthContext'
import { getAllAddress,addAddress,updateAddress,removeAddress } from "../services/address-services";
import { addressReducer,initialState } from "../reducers/addressReducer";
const AddressContext=createContext()

const AddressProvider=({children})=>{
    const [addressState,addressDispatch]=useReducer(addressReducer,initialState)

    const {
        auth:{isAuthenticated,token},
    }=useAuth()
    useEffect(()=>{
        (async()=>{
            if(isAuthenticated){
                try  {
                    
                    const {status,data}=await getAllAddress(token)
                    
                    if(status===200){
                        addressDispatch({type:"SET_ADDRESS",payload:data.address})
                    }
                
                
                }
                catch(err){
                    console.log(er)
                }
            }
                else {
                    addressDispatch({type:"SET_ADDRESS", payload:[]})
                }
            
        })()
    },[token])

  const addNewAddress=async address=>{
    try  {
        addressDispatch({type:"INITIALIZE"})
        const {status,data}=await addAddress(address,token)
      
        if(status===201){
            addressDispatch({type:"SET_ADDRESS",payload:data.address})
        }
    
    
    }
    catch(err){
        addressDispatch({type:"SET_ERROR",error:err.response.data[0]})
    }
}

const editAddress=async address=>{
    try  {
        addressDispatch({type:"INITIALIZE"})
        const {status,data}=await updateAddress(address,token)
      
        if(status===201){
            addressDispatch({type:"SET_ADDRESS",payload:data.address})
        }
    
    
    }
    catch(err){
        addressDispatch({type:"SET_ERROR",error:err.response.data[0]})
    }
}
    
const deleteAddress=async address=>{
    try  {
        addressDispatch({type:"INITIALIZE"})
        const {status,data}=await removeAddress(address,token)
      
        if(status===200){
            addressDispatch({type:"SET_ADDRESS",payload:data.address})
        }
    
    
    }
    catch(err){
        addressDispatch({type:"SET_ERROR",error:err.response.data[0]})
    }
}
   return(
    <AddressContext.Provider value={{addressState,addressDispatch,addNewAddress,editAddress,deleteAddress}}>
       {children}
    </AddressContext.Provider>
   ) 

 


}
const useAddress=()=>useContext(AddressContext)
export {AddressProvider,useAddress}