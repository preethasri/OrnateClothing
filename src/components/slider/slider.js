import "../slider/slider.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'

export default function Slider(){
    const[slideIndex,setSlideIndex]=useState(0)

    const handleLeftClick=()=>{
        setSlideIndex(slideIndex>0 ?slideIndex-1:2)
    }
    const handleRightClick=()=>{
        setSlideIndex(slideIndex<2 ?slideIndex+1 :0)
    }
    const Slide =styled.div`
        display: flex;
        align-items: center;
        width:100vw;
        height:100vh;
        background-color: #${(props) => props.bg};
      
    `
    const Wrapper=styled.div`
        height:100%;
        display: flex;
        transition:all 1.5s ease;
        transform: translate(${props=>props.slideIndex * -100 }vw);
    `
  return(


      <div>
          <div className="slider-container">
              <div className="arrow-icon-left" onClick={handleLeftClick}>
                 <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </div>
              <Wrapper slideIndex={slideIndex}>
                   
                       <Slide style={{backgroundColor:"#f6abb6"}}>
                           <div  className="img-container">
                               <img src="/assets/sliderImages/womenTop.png" className="img-slide"></img>
                           </div>
                           <div className="info-slide">
                               <div className="info-title">Summer Sale</div>
                               <div className="info-description">Don't miss the sale .Discount for 30%. </div>
                               <Link to="/products" className="shop-now-btn">Shop Now</Link>
                           </div>
                          
                       </Slide>
                       <Slide style={{backgroundColor:"#90CCF4"}}>
                           <div className="img-container">
                               <img src="/assets/sliderImages/menSuit.png" className="img-slide"></img>
                           </div>
                           <div className="info-slide">
                               <div className="info-title">Wedding sale</div>
                               <div className="info-description">flat 20% off for wedding suits </div>
                                 <Link to="/products" className="shop-now-btn">Shop Now</Link>
                           </div>
                          
                       </Slide>
                       <Slide style={{backgroundColor:"#F3D250"}}>
                           <div  className="img-container">
                               <img src="/assets/sliderImages/midiDress.png"className="img-slide"></img>
                           </div>
                           <div className="info-slide">
                               <div className="info-title">Winter Sale</div>
                               <div className="info-description">products price starts at just Rs.499</div>
                               <Link to="/products" className="shop-now-btn">Shop Now</Link>
                           </div>
                           
                       </Slide>
                
              </Wrapper>
              <div className="arrow-icon-right" onClick={handleRightClick}>
                 <i className="fa fa-arrow-right" aria-hidden="true"></i>
                 
              </div>
          </div>

      </div>
  )
}
