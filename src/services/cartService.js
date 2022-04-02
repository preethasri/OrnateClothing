import axios from 'axios';

export const addToCart=async(token,product)=>{
    try{
        const response=await axios.post("/api/user/cart",
        {product},
        {
        headers:{
            authorization :token,
        }}
        )
        return response.data.cart;
    }catch(error){
        console.log(error)
        return error;
    }
}
export const removeFromCart=async(token,productId)=>{
    try{
        const response=await axios.delete(`/api/user/cart/${productId}`,{
            headers:{
                authorization:token,
            }
        })
        return response.data.cart;
    }catch(error){
        console.log(error);
        return error
    }
}

export const quantityUpdateInCart=async(token,action,productId)=>{
    try{
        const response=await axios.post(`/api/user/cart/${productId}`,
        {action:{type:action,}},
        {headers:{
            authorization:token,
        }}
        )
        return response.data.cart;
    }catch(error){
        console.log(error)
        return error;
    }
    
}


