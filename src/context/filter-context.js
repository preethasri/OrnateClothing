import {createContext} from 'react'
import {useContext,useReducer,useState} from 'react'

import { FilterReducer } from '../reducers/filterReducer'

const FilterContext=createContext()

const useFilter=()=> useContext(FilterContext)


const FilterProvider=({children})=>{
  const[searchTerm,setSearchTerm]=useState('')
    const [
      
        {
        sortBy,
        category:{men,women,hat,shoe,handbag},
        rating,
        range,
    },
    productsDispatch

    ]=useReducer(FilterReducer,{
      sortBy:null,
      category:{
          men:false,
          women:false,
          hat:false,
          shoe:false,
          handbag:false,
        },
          rating:null,
          range:0,

    })
   return(

    <FilterContext.Provider value= {{searchTerm,setSearchTerm,sortBy,men,women,hat,shoe,handbag,rating,range,productsDispatch}}>
        {children}

    </FilterContext.Provider>
   )

}
export {FilterProvider,useFilter} 