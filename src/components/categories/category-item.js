import "../categories/Categories.css"
import { useCategory } from "../../context/category-context"


export default function CategoryItem({categoryName,categoryImage}){
    const {navigateToCategory}=useCategory()
    return(
        <div>
            <div className="categoryItem-container" onClick={()=>navigateToCategory({categoryName})} >
                     <div className="category-img">
                        <img src={categoryImage} className="category-image" ></img>
                    </div>

                   <div className="category-info">
                       <div className="category-name">
                           {categoryName}
                       </div>
                       
                   </div>
                   

                
            </div>
            
        </div>
    )
}
