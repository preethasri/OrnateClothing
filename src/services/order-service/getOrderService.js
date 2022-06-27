import axios from 'axios'

const getOrderService = async token => {
    return await axios.get("/api/user/orders", {
      headers: { authorization: token },
    });
  };
  export { getOrderService };
  