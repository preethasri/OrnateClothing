import "./App.css";
 import {LandingPage,ProductPage,Login,SignUp,Logout} from "./pages"
 import{Route,Routes} from 'react-router-dom'
function App() {
  return (
     
       <Routes>
         <Route path="/landingpage" element={<LandingPage />} />
         <Route path="/productpage" element={<ProductPage />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/logout" element={<Logout />} />
       </Routes>
  
  );
}
export default  App;