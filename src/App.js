import "./App.css";
 import {LandingPage,ProductPage,Login,SignUp,Logout,WishList,CartManagement} from "./pages"
 import { AddressContainer } from "./components/addressManagement/addressContainer";
 import{Route,Routes} from 'react-router-dom'
import { UserProfilePage } from "./components/userprofilepage/userprofile";
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
         <Route path="/address" element={<AddressContainer />}/>
         <Route path="/user" element={<UserProfilePage />}/>
         
       </Routes>
  
  );
}
export default  App;