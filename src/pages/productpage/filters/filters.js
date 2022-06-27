import "../filters/filters.css"
import { useFilter } from "../../../context/filter-context"
import {v4 as uuid} from  "uuid";

const ratingFilters=[
    {
        id:uuid(),
        rate:"4 star &above",
        forAndId:"four",
        ratingType:"ABOVE_FOUR",
    },
    {
        id:uuid(),
        rate:"3 star & above",
        forAndId:"three",
        ratingType:"ABOVE_THREE",
    },
    {
        id:uuid(),
        rate:"2 star & above",
        forAndId:"two",
        ratingType:"ABOVE_TWO",
    },
    {
        id:uuid(),
        rate:"1 star & above",
        forAndId:"one",
        ratingType:"ABOVE_ONE",
    },
]


export default  function Filters(){
   
    const {sortBy,men,women,shoe,hat,handbag,range,rating,productsDispatch}=useFilter();

    return(
        <div className="filter-container">
        <div className="filter-header">
            <h2>Filters</h2>
            <button className="clear-btn" onClick={()=>productsDispatch({type:"CLEAR"})}>clear</button>
        </div>
        <br></br>
        <div className="slider-for-price">
            <h3>{range}</h3> <br></br>
            <input type="range" value={range} min="100" max="1500"   onChange={(e)=>productsDispatch({type:"RANGE",payload:e.target.value})} /><br></br>
        </div>
        <br></br>
        <div className="filter-by-category">
            <h3>Category</h3>
            <label className="category-label" htmlFor="women">
            <input type="checkbox" 
            id="women"
             name="women" 
             checked={women}
              onChange={()=>productsDispatch({type:"WOMEN"})}/>women </label> <br></br>

            <label className="category-label" htmlFor="men">
            <input type="checkbox"  id="men" name="men" checked={men} onChange={()=>productsDispatch({type:"MEN"})}/>men </label><br></br>

            <label className="category-label" htmlFor="shoe">
            <input type="checkbox" id="shoe" name="shoe" checked={shoe} onChange ={()=>productsDispatch({type:"SHOE"})}/>shoe  </label><br></br>

            <label className="category-label" htmlFor="hat">
            <input type="checkbox" id="hat"  name="hat" checked={hat} onChange={()=>productsDispatch({type:"HAT"})}/>hat </label><br></br>

            <label className="category-label" htmlFor="handbag">
            <input type="checkbox" id="handbag" name="handbag" checked={handbag} onChange={()=>productsDispatch({type:"HANDBAG"})} />handbag </label><br></br>
        </div>
        <br></br>
        <div className="filter-by-rating">
            <h3>Rating</h3>
            {ratingFilters.map((ratings)=>{
                const{rate,forAndId,ratingType,id}=ratings;
                return(
                    <label key={id} className="rating-label" htmlFor={forAndId} >
                        <input type="radio" id={forAndId} name="rating" checked={rating ===ratingType}
                        onChange={()=>productsDispatch({type:ratingType})} />{rate} <br></br></label>
                )
            })}
            
        </div>
        <br></br>
        <div className="filter-by-price">
            <h3>Sort by</h3>
          <label className="sortby-label" htmlFor ="high-to-low">
              <input type="radio" id="high-to-low" name ="sortBy" checked={sortBy==="HIGH_TO_LOW" }onChange={()=>productsDispatch({type:"HIGH_TO_LOW"})} />High To Low <br></br>
          <label className="sortby-label" htmlFor ="low-to-high">
              <input type="radio" id="low-to-high" name ="sortBy" checked={sortBy==="LOW_TO_HIGH" }onChange={()=>productsDispatch({type:"LOW_TO_HIGH"})} />Low To High
          </label>
          </label>

        </div>
    </div>
    )
}