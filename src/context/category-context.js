import { createContext } from "react";
import {useContext,useState,useEffect} from 'react'
const axios = require('axios')


const CategoryContext=createContext()

const useCategory=()=>useContext(CategoryContext)


const CategoryProvider=({children})=>{
    const[categories,setCategories]=useState([])
    const[error,setError]=useState('')
    
    useEffect(()=>{
        const getCategory = async () => {
            try {
                const res = await axios.get('/api/categories');
                setCategories(res.data.categories);
            } catch (err) {
            
                setError(err.message)
            }
        };
        
        getCategory();
    },[])
    return(
        <CategoryContext.Provider value={{categories,error}}>
            {children}
        </CategoryContext.Provider>
    )

}
export{CategoryProvider,useCategory}

