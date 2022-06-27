import Navbar from '../../components/navbar/navbar'
import  Slider  from '../../components/slider/slider'
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/footer'
import TopProducts from '../../components/topproductcs/topproducts'

import "../../components/topproductcs/topproducts.css"

import {useProduct} from '../../context/product-context'




 function LandingPage(){
  const{products,error:productError}=useProduct()
  const topProducts=products.filter((product)=>product.isTopSelling)
  return(
    <div className='homepage'>
        <Navbar /> 
        <Slider /> 
        <Categories />
        <div className="top-products-container">
          <h2>Best selling Products</h2>
          </div>
          {productError && <div>{productError}</div>}
          <div className='top-products'>
            <div className='top-products-grid-container'>
            {topProducts.map((product)=>(
             
              <TopProducts product={product} />
              
            ))}
            </div>
          </div>
          
        
       
        <Footer />
    </div>
  )
}
export {LandingPage}
