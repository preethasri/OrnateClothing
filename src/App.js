import "./App.css";
 import {LandingPage,ProductPage,Login,SignUp,Logout,WishList,CartManagement} from "./pages"
 import{Route,Routes} from 'react-router-dom'
function App() {
  return (
     
       <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/productpage" element={<ProductPage />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/logout" element={<Logout />} />
         <Route path="/wishlist" element={<WishList />} />
         <Route path="/cart" element ={<CartManagement />} />
         
       </Routes>
  
  );
}
export default  App;