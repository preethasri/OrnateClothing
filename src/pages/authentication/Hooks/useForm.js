import { useState } from "react"
import {omit} from "loadsh";


const useForm=()=>{
    const [formData,setFormData]=useState({});
    const[error,setError]=useState({});



const formHandler=(e)=>{
    
    const name=e.target.name;
    const value=e.target.value;
    validateForm(name,value);
    setFormData({...formData,[name]:value});

}
const validateForm=(name,value)=>{
    switch(name){
        case "confirmPassword":
        if(value!==formData.password){
            setError({
                ...error,
                isMatch:"incorrect password"
            })
        }
            else{
                const newObj=omit(error,"isMatch");
                setError(newObj)
            }
            break;

        
    }
}
  return {formData,error,formHandler}
}
export {useForm}