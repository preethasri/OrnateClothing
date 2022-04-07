import CategoryItem from "./category-item" 
import "../categories/Categories.css"
import { useCategory } from "../../context/category-context"
import { useFilter } from "../../context/filter-context"
import { useProduct } from "../../context/product-context"

import { Link } from "react-router-dom"

export default function Categories(){
    const{categories,error:categoryError}=useCategory()
    
    
    return(
        <div>
               <h2 className="category-heading">Categories for you!!!</h2>
       
             
            {categoryError && <div>categoryError</div>}
            <Link to="/productpage">
            <div className="category-container">
            { categories.map(({_id,image,categoryName})=>(
               
                <CategoryItem key={_id}  categoryName={categoryName} categoryImage={image}  />
                
                
                
            ))}
            </div>
            </Link>
           
        
        </div>
    )
}

