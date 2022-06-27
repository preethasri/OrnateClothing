import { Order } from "../../components/order/Order";
import { useOrder } from "../../context/orderContext";
import Navbar from "../../components/navbar/navbar";
const UserOrders = () => {
  const {
    orderState: { orders },
  } = useOrder();
  console.log(orders)
  return (
       <>
       <Navbar />
       <h1 style={{textAlign:"center",marginBottom:"10px"}}>Your Orders</h1>
        <div className="address-info flex-total-center flex-column">
          {!orders.length && <h3 style={{textAlign:"center"}}>No orders available</h3>}
          {orders.map(order => (
            <Order key={order._id} order={order} />
          ))}
        </div>
     </>
  );
};
export { UserOrders };
