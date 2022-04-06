
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
         { newProducts.filter(product => {
                if(searchTerm === ""){
                  return product
                }else if(product.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return product
                }
              }).map((product) => {
            return (
              <div>
            <AllProducts product={product} key={product._id} />
            </div>
            )
           
})}
        </div>
            </div>
      </div>
    );
  };
  
