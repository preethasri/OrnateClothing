import { createContext } from "react";
import {useContext,useState} from  "react"

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const AuthContext=createContext()

const useAuth=()=>useContext(AuthContext)


const AuthProvider=({children})=>{
    const signupHandler=async(formData)=>{
        
        try{
            setAuth({
                isAuthenticated:false,
                user:"",
                token:"",
            })
            
            const res=await axios.post("/api/auth/signup",{
               formData

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
    const toastProps={
        theme:"light",
        closeOnClick:true,
        autoClose:1000,
        pauseOnHover:true,
        position:"bottom-center",
    }
   
    const [auth,setAuth]=useState({
        isAuthenticated:localStorage.getItem("AUTH_TOKEN")? true :false,
        user:JSON.parse(localStorage.getItem("ornate_user")),
        token:localStorage.getItem("AUTH_TOKEN" || ""),

    })
    

    return (
        <AuthContext.Provider value={{auth,setAuth,toastProps,signupHandler}}>
            {children}
        </AuthContext.Provider>
    )

}

export {AuthProvider,useAuth}