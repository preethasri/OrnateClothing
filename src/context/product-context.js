import {createContext} from 'react'
import { useContext,useState,useEffect } from 'react'

const axios=require('axios')


const ProductContext=createContext()

const useProduct=()=>useContext(ProductContext)


const ProductProvider=({children})=>{
    const[products,setProducts]=useState([])
    const [error,setError]=useState("")

   useEffect(()=>{
       const getProducts= async()=>{
           try{
               setError('')
               const res= await axios.get("/api/products")
               setProducts(res.data.products)
             
           }
           catch(err){
               setError(err.message)

           }
       }
      getProducts()
   },[])
  
    return(
        <ProductContext.Provider value={{products,error}}>
            {children}
        </ProductContext.Provider>
    )

}
export{ProductProvider,useProduct}