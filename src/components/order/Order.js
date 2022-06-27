import { Link } from "react-router-dom";

const Order = ({ order }) => {
  const { orderedAt, orderId, amountPaid, deliveryAddress, orderedProducts } = order;

  return (
    <div className="horizontal-card">
    <div className="order-card">
      <h3 className="text-success">Order Confirmed!!!</h3>

      <div className="order-info flex-column">
        <small className="text-gray">{orderedAt}</small>
        <br></br>
        <span >OrderId: {orderId}</span>
        <br></br>
        <span className="order-amount">Total:₹ {amountPaid}</span>
        <br></br>
      </div>

      <div className="text-card-para">
        <span className="text-semibold">Delivery Address:</span>
        <div>
          <h4>{deliveryAddress.name}</h4>
          <address className="card-text">
            <span>{deliveryAddress.street}</span>
            <span>{deliveryAddress.state}</span>
            <span>{deliveryAddress.country}</span>
            <span>{deliveryAddress.zipCode}</span>
            <span>{deliveryAddress.mobile}</span>
          </address>
        </div>
      </div>
      {orderedProducts.map(({ id, _id, image, title, description, qty }) => (
        <Link
          to={`/products/details/${id}`}
          key={_id}
          className="link-tag"
        >
           <div className="horizontal-card">
            <div className="horizontal-img-content">
            <div className="horizontal-card-img">
          

               <img  src={image} alt={title} className="horizontal-img"/>
            </div>
          
          <div className="horizontal-card-content">
      
              <span className="horizontal-card-heading">{title}</span>
              <br></br>
              <span className="horizontal-card-para">{description}</span>
              <br></br>
              <span className="horizontal-card-para">qty:{qty}</span>
            </div>
        
          </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
    
  );
};
export { Order };
