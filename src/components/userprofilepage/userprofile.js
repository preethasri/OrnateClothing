import Navbar from "../navbar/navbar"
import {useNavigate} from "react-router-dom"
import "../userprofilepage/userprofile.css"
function UserProfilePage(){
    const navigate=useNavigate();
    return(
        <>
        <div>
          <Navbar />
          <div className="user-profile-container">
        <i className="fa fa-user"></i>
        <div className="user-profile-details">
            <h2>adarshbalika</h2>
            <p>adarshbalika@gmail.com</p>
            <p>female</p>
            <p>987654321</p>
            <div>
            <button className="go-to-address-btn" onClick={()=>navigate("/address")}>Edit</button>
            <button className="cancel-btn">Cancel</button>
        </div>
           
            
               
        
        </div>
        
     

    </div>
        </div>
        </>
    )
}
export {UserProfilePage}