import React from 'react'
import Filters from "./filters/filters"
import  FinalProducts from "./finalProducts/finalProducts"
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

export  function ProductPage(){
    return (
        <div className='product-page'>
            <Navbar />
            <Filters />
            <FinalProducts />
            <Footer />
        </div>
    )
}