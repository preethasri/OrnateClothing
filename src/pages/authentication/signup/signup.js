import React,{useState} from 'react'
import '../signup/signup.css'
import Navbar from "../../../components/navbar/navbar"
import Footer from '../../../components/footer/footer'
import {useTogglePassword} from "../Hooks/useTogglePassword"
import {Link,useNavigate} from "react-router-dom"
import  {useAuth} from '../../../context/AuthContext'
import axios from 'axios'
import { stringify } from 'uuid'
import { useForm } from '../Hooks/useForm'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 
function SignUp(){
    toast.configure();
    const {setAuth,toastProps}=useAuth();
    const {passwordToggle,togglePassword,confirmPasswordToggle,confirmTogglePassword}=useTogglePassword()
    
    const {formData,formHandler,error}=useForm();
    let navigate=useNavigate();

    const signupHandler=async(e)=>{
        e.preventDefault();
        try{
            setAuth({
                isAuthenticated:false,
                user:"",
                token:"",
            })
            
            const res=await axios.post("/api/auth/signup",{
               formData

            })
            console.log(res.status)
            if(res.status===201){
            localStorage.setItem("AUTH_TOKEN",res.data.encodedToken);

            localStorage.setItem("WB_USER",JSON.stringify(res.data.createdUser))
           setAuth(prev =>({
               ...prev,
               isAuthenticated:true,
               user:res.data.createdUser,
               token:res.data.encodedToken,
           }))
           navigate(`/landingpage`)
           toast(`welcome ${formData.name}`,toastProps)
        }
    }
        catch(error){
            console.log(error);
        }

    }
    return(
        <div>
            <Navbar />
             <form action="">
        <div className="form">
            <div className="sign-up-form">
                <h2>Create Account</h2>
                <label for="firstName">Name
        <input type="text"
        placeholder="enter your name" 
        name='name'
    
        onChange={formHandler}
        required />
       </label>

            
                <label for="email-id">Email-id
        <input type="text" 
        placeholder="enter your mail address" 
        name="email-id" 
        
        onChange={formHandler}

        required  />
       </label>
                <label for="password">Password
        <input 
        placeholder="enter your password" 
        name="password" 
        type={passwordToggle.type}
        onChange={formHandler}

        required />
        {passwordToggle.isEyeIcon ? (<i className="fa fa-eye" id="eye-icon"  onClick={togglePassword} aria-hidden="true"></i>) :(<i className="fa fa-eye-slash" id="eye-icon-slash" onClick={togglePassword} aria-hidden="true"></i>)}
        <br></br>
       </label>
                <label for="confirm-password" className="confirm-password">Confirm-password
        <input 
        
        placeholder="confirm your password" 
        name="confirmPassword" 
        id="confirmPassword"
        type={confirmPasswordToggle.type}
        onChange={formHandler}

        required />
        {confirmPasswordToggle.isEyeIcon ? (<i className="fa fa-eye" id="eye-icon"  onClick={confirmTogglePassword} aria-hidden="true"></i>) :(<i className="fa fa-eye-slash" id="eye-icon-slash" onClick={confirmTogglePassword} aria-hidden="true"></i>)}
        {error.isMatch && <span className="error">{error.isMatch}</span>}
       </label>
                <button className="sign-up" onClick={signupHandler}>Continue
      </button>
            </div>
        </div>
    </form>
    <div className="login-form-info">
        <span>Already have an account? 
        <Link to="/login" >
            <button className="login-form-link">Login</button>
        </Link>
        </span>
    </div>
    <div>
        <Footer />
        </div>
        </div>
    )
}
export {SignUp}