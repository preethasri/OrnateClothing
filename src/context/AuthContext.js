import { createContext } from "react";
import {useContext,useState} from  "react"





const AuthContext=createContext()

const useAuth=()=>useContext(AuthContext)


const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        isAuthenticated:localStorage.getItem("Auth_TOKEN")?true :false ,
        user:JSON.parse(localStorage.getItem("WB_USER")),
        token:localStorage.getItem("AUTH_TOKEN") || "",
    })
    
    const toastProps={
        theme:"light",
        closeOnClick:true,
        autoClose:1000,
        pauseOnHover:true,
        position:"bottom-center",
    }
   
    

    return (
        <AuthContext.Provider value={{auth,setAuth,toastProps}}>
            {children}
        </AuthContext.Provider>
    )

}

export {AuthProvider,useAuth}