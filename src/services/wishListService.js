import axios from 'axios';





const addToWishList = async (token, product) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        {
            headers: {
              authorization: token,
            },
          }
      );
      return response.data.wishlist;
    } catch (error) {
      console.error("ERROR", error);
      return error;
    }
  };
  export { addToWishList };
  
  const removeFromWishList = async (token, productID) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${productID}`, 
      
      {
        headers: {
          authorization: token,
        },
      }
      );
      return response.data.wishlist;
    } catch (error) {
      console.error("ERROR", error);
      return error;
    }
  };
  export { removeFromWishList };
  
