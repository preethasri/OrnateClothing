import React,{useState}  from 'react';
import "../logout/logout.css"
import Navbar from "../../../components/navbar/navbar"
import Footer from '../../../components/footer/footer'
import {Link,useNavigate} from 'react-router-dom'
 



function Logout(){
    const navigate=useNavigate();
  
    return(
        <div>
            <Navbar />
            <div className="logout-container">
        <i className="fa fa-user"></i>
        <div className="user-details">
            <h2>adarshbalika</h2>
            <p>adarshbalika@gmail.com</p>

            
            <input   className="logout-btn" type="button" value="Logout" onClick={()=>{
            
                    navigate("/")
                    window.location.reload()} 
                }
             />
               
        
        </div>
        
     

    </div>
    <br></br><br></br>
    <div>
    <Footer />
    </div>

        </div>
    )
}
export {Logout}