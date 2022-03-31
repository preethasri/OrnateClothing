import React,{useState}  from 'react';
import "../login/login.css"
import Navbar from "../../../components/navbar/navbar"
import Footer from '../../../components/footer/footer'

import {Link ,useNavigate} from 'react-router-dom'
import {useAuth} from "../../../context/AuthContext";
import {useTogglePassword} from "../Hooks/useTogglePassword";
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function Login(){
    toast.configure()
    const {passwordToggle,togglePassword}=useTogglePassword();
    const {setAuth,toastProps}=useAuth();
    const [signinData,setSignInData]=useState({
        email:"adarshbalika@gmail.com",
        password:"adarshbalika"
    })
    const navigate=useNavigate();
    const[error,setError]=useState("");
    const loginHandler=async(e)=>{
        e.preventDefault();
        try{
            setAuth({
                isAuthenticated:false,
                user:"",
                token:"",
            });
            setError("")
            const response=await axios.post(`api/auth/login`,{
                email:signinData.email,
                password:signinData.password,

            })
            console.log(response.status)
            console.log(signinData)
            localStorage.setItem("AUTH_TOKEN",response.data.encodedToken);
            localStorage.setItem("WB_AUTH",JSON.stringify(response.data.foundUser))
          
            setAuth(prev =>({
                ...prev,
                isAuthenticated:true,
                user:response.data.foundUser,
                token:response.data.encodedToken
            }))
            navigate("/landingpage")
            toast("loggedIn Successfully",toastProps)
       
        }
        catch(error){
            console.log(error);
            setError(error.response.data.errors[0]);  
        }
    }

    return(
         
        <div>
              <Navbar />
        <form onSubmit={(e)=>e.preventDefault()}>
        <div className="form">
            <div className="login-form">
                <h2>Sign-In</h2>
                <p>{error}</p>
                <label for="email">Email <br></br>
           <input 
            value={signinData.email}
           type="email"
           placeholder="enter your mail address" 
           name="email"
           className='input'
           
           required />
         </label>
                <label for="password">Password
           <input 
           type={passwordToggle.type}
           value={signinData.password}
           name="password"
           placeholder="enter your password" 
           className="input"
           
           required />
         </label>
         {passwordToggle.isEyeIcon ? (<i className="fa fa-eye" id="eye-icon"  onClick={togglePassword} aria-hidden="true"></i>) :(<i className="fa fa-eye-slash" id="eye-icon-slash" onClick={togglePassword} aria-hidden="true"></i>)}

                <div className='btns'>
                    <button onClick={loginHandler} className="sign-in-button-outlined">login with test credentials</button>
                    <button onClick={loginHandler} className="sign-in-button">login</button>
                </div>
            
            </div>
        </div>
    </form>
    <div className="sign-up-info">
        <p>new to Ornate ?</p>
        <Link to="/signup" >
            <button className="sign-up-button">create your Ornate account</button>
        </Link>
       
        <p>or</p>
        <Link to="/logout">
            <button className="log-out-button">Log out</button>
        </Link>

    
    </div>
    <Footer />
    </div>
    )
}
export {Login}