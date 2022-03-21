import "./App.css";
 import {LandingPage,ProductPage} from "./pages"
 import{Route,Routes} from 'react-router-dom'
function App() {
  return (
     
       <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/products" element={<ProductPage />} />
       </Routes>
  
  );
}
export default  App;