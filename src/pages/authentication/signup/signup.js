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
    
    const [signup,setSignUp]=useState({
        input:{},
        error:"",
        passwordMatch:true,
        
    })
    
    const signUpInputHandler=(e)=>{
        const {name,value}=e.target;
        if (name === "confirmPassword") {
            setSignUp({
              ...signup,
              input: { ...signup.input, [name]: value },
              passwordMatch: value === signup.input.password ? true : false,
            });
          } else {
            setSignUp({
              ...signup,
              input: { ...signup.input, [name]: value },
            });
          }
        };
    let navigate=useNavigate();

    const signupHandler=async(signup,setSignUp)=>{
        
        try{
            setAuth({
                isAuthenticated:false,
                user:"",
                token:"",
            })
            
            const res=await axios.post("/api/auth/signup",{
               signup,setSignUp

            })
          
            if(res.status===201){
            localStorage.setItem("AUTH_TOKEN",res.data.encodedToken);

            localStorage.setItem("ornate_user",JSON.stringify(res.data.createdUser))
           setAuth(prev =>({
               ...prev,
               isAuthenticated:true,
               user:res.data.createdUser,
               token:res.data.encodedToken,
           }))
           navigate(`/`)
           toast(`welcome user`,toastProps)
           
        }
    }
        catch(error){
            console.log(error);
        }


    }
   
    return(
        <div>
            <Navbar />
             <form   onSubmit={(e)=>e.preventDefault()}>
        <div className="form">
            <div className="sign-up-form">
                <h2>Create Account</h2>
                <label for="firstName">Name
        <input type="text"
        placeholder="enter your name" 
        required
        name='firstName' 
        onChange={signUpInputHandler} 
        value={signup.input.firstName || ""}
         />
       </label>

            
                <label for="email">Email-id
        <input type="text" 
        placeholder="enter your mail address" 
        required
        name="email" 
        onChange={signUpInputHandler} 
        value={signup.input.email || ""}
         />
       </label>
                <label for="password">Password
        <input 
        placeholder="enter your password" 
        name="password"
        required 
        id="password"
        type={passwordToggle.type}
        onChange={signUpInputHandler} 
        value={signup.input.password || ""}
         />
        {passwordToggle.isEyeIcon ? (<i className="fa fa-eye" id="eye-icon"  onClick={togglePassword} aria-hidden="true"></i>) :(<i className="fa fa-eye-slash" id="eye-icon-slash" onClick={togglePassword} aria-hidden="true"></i>)}
        <br></br>
       </label>
                <label for="confirmPassword" className="confirm-password">Confirm-password
        <input 
        
        placeholder="confirm your password" 
        name="confirmPassword" 
        required
        id="confirmPassword"
        type={confirmPasswordToggle.type}
        onChange={signUpInputHandler} 
        value={signup.input.confirmPassword || ""}
         />
        {confirmPasswordToggle.isEyeIcon ? (<i className="fa fa-eye" id="eye-icon"  onClick={confirmTogglePassword} aria-hidden="true"></i>) :(<i className="fa fa-eye-slash" id="eye-icon-slash" onClick={confirmTogglePassword} aria-hidden="true"></i>)}
       <div>
       {!signup.passwordMatch ? (<div className="error">password do not match</div>):null}
        </div>
       </label>
                <button className="sign-up"  onClick={()=>{signupHandler(signup,setSignUp)}}>Continue
      </button>
            </div>
        </div>
    </form>
    <div className="login-form-info">
        <span>Already have an account? 
        <Link to="/login" >
            <button className="login-form-link" >Login</button>
        </Link>
        </span>
    </div>
    <button onClick={()=>navigate("/address")}>
         address
    </button>
    <div>
        <Footer />
        </div>
        </div>
    )
}
export {SignUp}