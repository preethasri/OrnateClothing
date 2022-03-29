
import {AllProducts} from "../allproducts/AllProducts"

import "../allproducts/allproducts.css"


import {useFilter} from "../../../context/filter-context"

import {filterByCategory,sortByPrice,sortByRating,filterByRange} from '../sortandfilters/index'

import {useProduct} from '../../../context/product-context'
export default function FinalProducts(){

    const {products,error}=useProduct()

    const {sortBy,men,women,hat,shoe,handbag,rating,range  } =useFilter()
    

    const filteredProducts = filterByCategory(
      products,men, women, shoe, hat,handbag
    );
    const sortedProducts = sortByPrice(sortBy,filteredProducts);
  
    const ratedProducts = sortByRating(sortedProducts,rating);
    const newProducts = filterByRange(ratedProducts, range);
   
    return (
      <div className="products">
        {error && <h1>{error}</h1>}
        <div className="products">
          <div className="product-grid-container">
        {newProducts &&
          newProducts.map((product) => {
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
  
