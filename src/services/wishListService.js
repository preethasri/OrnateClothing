import axios from 'axios';





export const  addToWishList=async(token,product,toastProps)=>{
    
    try{
        const response=await axios.post('/api/user/wishlist',
           {product},
           {headers:{
               authorization:token,
           }
        }
        )
        
      return  response.data.wishlist
    
    }
    catch(error){
        console.log(error)
    }
}
export  const removeFromWishList=async(token,productId)=>{
    
   
        try{
            const response=await axios.delete(`/api/user/wishlist/${productId}`,{
                headers:{authorization:token},
            })
           return response.data.wishlist;
            
        }catch(error){
            console.log(error)
            return error;
        }
    }
