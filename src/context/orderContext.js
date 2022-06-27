import { createContext,useContext,useReducer,useEffect } from "react";
import {useAuth} from './AuthContext'
import { getOrderService,addOrderService } from "../services/order-service";
import { orderReducer,orderInitialState } from "../reducers/orderReducer";

import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const OrderContext=createContext()



const OrderProvider = ({ children }) => {
    const [orderState, orderDispatch] = useReducer(orderReducer, orderInitialState);
  
    const {
        auth:{isAuthenticated,token},toastProps
    }=useAuth()
  
    useEffect(() => {
      (async () => {
        if (isAuthenticated) {
          try {
            orderDispatch({ type: "INITIALIZE" });
  
            const { status, data } = await getOrderService(token);
  
            if (status === 200) {
              orderDispatch({ type: "SET_ORDERS", payload: data.orders });
            }
          } catch (err) {
             console.log(err)
          }
        } else {
          orderDispatch({ type: "SET_ORDERS", payload: [] });
        }
      })();
    }, [token]);
  
    const addOrder = async order => {
      try {
        orderDispatch({ type: "INITIALIZE" });
  
        const { status, data } = await addOrderService(order, token);
       
        if (status === 201) {
          orderDispatch({ type: "SET_ORDERS", payload: data.orders });
          toast("Order has been placed successfully");
        }
      } catch (err) {
         console.log(err)
      }
    };
  
    return (
      <OrderContext.Provider value={{ orderState, orderDispatch, addOrder }}>
        {children}
      </OrderContext.Provider>
    );
  };
  
  const useOrder = () => useContext(OrderContext);
  
  export { OrderProvider, useOrder };
  