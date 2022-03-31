import { useEffect } from "react";
import {useNavigate} from 'react-router'
import { useAuth } from "../context/AuthContext";

function LoginService(){
    const navigate=useNavigate();
    const {token}=useAuth();

    useEffect(()=>{
        !token &&navigate('/login')
    })
}
export {LoginService};