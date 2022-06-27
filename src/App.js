import "./App.css";
 import {LandingPage,ProductPage,Login,SignUp,WishList,CartManagement,SingleProductPage} from "./pages"
 
 import{Route,Routes} from 'react-router-dom'
import { UserProfilePage } from "./components/userprofilepage/userprofile";
import {Checkout} from './pages/checkout/checkout'

import { UserOrders } from "./pages/UserOrder/UserOrder";
function App() {
  return (
     
       <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/productpage" element={<ProductPage />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />
      
         <Route path="/wishlist" element={<WishList />} />
         <Route path="/cart" element ={<CartManagement />} />
        
         <Route path="/user" element={<UserProfilePage />}/>
         <Route path="products/:productId" element={<SingleProductPage />} />
         <Route path="/checkout" element={<Checkout />}/>
         <Route path="/user/orders" element={<UserOrders />}/>
         

         
       </Routes>
  
  );
}
export default  App;