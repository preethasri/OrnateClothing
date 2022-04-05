import "../categories/Categories.css"



export default function CategoryItem({categoryName,categoryImage,}){
    return(
        <div>
            <div className="categoryItem-container">
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
