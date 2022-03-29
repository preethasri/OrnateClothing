import {createContext} from 'react'
import {useContext,useReducer} from 'react'

import { FilterReducer } from '../reducers/filterReducer'

const FilterContext=createContext()

const useFilter=()=> useContext(FilterContext)


const FilterProvider=({children})=>{
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

    <FilterContext.Provider value= {{sortBy,men,women,hat,shoe,handbag,rating,range,productsDispatch}}>
        {children}

    </FilterContext.Provider>
   )

}
export {FilterProvider,useFilter} 