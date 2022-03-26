import Navbar from '../../components/navbar/navbar'
import  Slider  from '../../components/slider/slider'
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/footer'
import TopProducts from '../../components/topproductcs/topproducts'



import {useProduct} from '../../context/product-context'




 function LandingPage(){
  const{products,error:productError}=useProduct()
  const topProducts=products.filter((product)=>product.isTopSelling)
  return(
    <div>
        <Navbar /> 
        <Slider /> 
        <Categories />
        <div className="top-products-container">
          <h2>Best selling Products</h2>
          {productError && <div>{productError}</div>}
          <div className='products'>
            <div className='product-grid-container'>
            {topProducts.map(({_id,title,image,ratings,price})=>(
              <TopProducts key={_id} title={title} image={image} ratings={ratings} price={price} />
            ))}
            </div>
          </div>
          
        </div>
       
        <Footer />
    </div>
  )
}
export {LandingPage}
