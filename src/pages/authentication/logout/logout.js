import React,{useState}  from 'react';
import "../logout/logout.css"
import Navbar from "../../../components/navbar/navbar"
import Footer from '../../../components/footer/footer'
import {Link} from 'react-router-dom'


function Logout(){
    return(
        <div>
            <Navbar />
            <div className="logout-container">
        <i className="fa fa-user"></i>
        <div className="user-details">
            <h2>adarshbalika</h2>
            <p>adarshbalika@gmail.com</p>

            <Link to="/login" >
            <button className="login-form-link">Login</button>
        </Link>
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