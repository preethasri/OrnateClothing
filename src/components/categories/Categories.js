import CategoryItem from "./category-item" 
import "../categories/Categories.css"
import { useCategory } from "../../context/category-context"

export default function Categories(){
    const{categories,error:categoryError}=useCategory()
    return(
        <div>
               <h2 className="category-heading">Categories for you!!!</h2>
        <div className="category-container">
         
            {categoryError && <div>categoryError</div>}
            {categories && categories.map(({_id,image,categoryName})=>(
                <CategoryItem key={_id}  categoryName={categoryName} categoryImage={image} />
                
            ))}
           
        </div>
        </div>
    )
}

