import { createContext } from "react";
import {useContext,useState,useEffect} from 'react'
import { useFilter } from "./filter-context";
import { useNavigate } from "react-router-dom";
const axios = require('axios')


const CategoryContext=createContext()

const useCategory=()=>useContext(CategoryContext)


const CategoryProvider=({children})=>{
    const[categories,setCategories]=useState([])
    const[error,setError]=useState('')
    const {productsDispatch}=useFilter()
    const navigate=useNavigate()
    
    
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
    
    const navigateToCategory = (category)=> {
        productsDispatch({ type: "CLEAR"});
        
        category.categoryName=="Men"  && productsDispatch({type:"MEN" ,payload:categories});
        category.categoryName=="Women"  && productsDispatch({type:"WOMEN" ,payload:categories});
        category.categoryName=="Shoes"  && productsDispatch({type:"SHOE" ,payload:categories});
        category.categoryName=="HandBags"  && productsDispatch({type:"HANDBAG" ,payload:categories});
        category.categoryName=="Hat"  && productsDispatch({type:"HAT" ,payload:categories});
        
        
         console.log(category.categoryName)
        
        navigate("/productpage");
      };
    return(
        <CategoryContext.Provider value={{categories,error,navigateToCategory}}>
            {children}
        </CategoryContext.Provider>
    )

}
export{CategoryProvider,useCategory}

