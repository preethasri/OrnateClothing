
import {AllProducts} from "../allproducts/AllProducts"

import "../allproducts/allproducts.css"


import {useFilter} from "../../../context/filter-context"

import {filterByCategory,sortByPrice,sortByRating,filterByRange} from '../sortandfilters/index'

import {useProduct} from '../../../context/product-context'
export default function FinalProducts(){

    const {products,loader}=useProduct()

    const {sortBy,men,women,hat,shoe,handbag,rating,range  ,searchTerm} =useFilter()
    

    const filteredProducts = filterByCategory(
      products,men, women, shoe, hat,handbag
    );
    const sortedProducts = sortByPrice(sortBy,filteredProducts);
  
    const ratedProducts = sortByRating(sortedProducts,rating);
    const newProducts = filterByRange(ratedProducts, range);
   
    return (
      <div >
        {loader && <div class="loader"></div>}
        <div className="products">
          <div className="product-grid-container">
         { newProducts.filter(eachProduct => {
                if(searchTerm === ""){
                  return eachProduct
                }else if(eachProduct.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return eachProduct
                }
              }).map((eachProduct) => {
            return (
              <div>
            <AllProducts product={eachProduct} key={eachProduct._id} />
            </div>
            )
           
})}
        </div>
            </div>
      </div>
    );
  };
  
