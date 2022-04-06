

function FilterReducer(state,action){
    const{men,women,hat,handbag,shoe}=state.category;
    
    switch(action.type){
        case "LOW_TO_HIGH":
            return{...state,sortBy:"LOW_TO_HIGH"};
        case "HIGH_TO_LOW":
            return{...state,sortBy:"HIGH_TO_LOW"};
        case "WOMEN" :
            return {
                ...state,
                category:{...state.category,women:!women},
            }
        case "MEN" :
            return {
                ...state,
                category:{...state.category,men:!men},
            }
        case "HAT" :
            return {
                ...state,
                category:{...state.category,hat:!hat},
            }
        case "HANDBAG":
            return{
                ...state,
                category:{...state.category,handbag:!handbag},
            }
        case "SHOE" :
            return {
                ...state,
                category:{...state.category,shoe:!shoe},
            }
        case "ABOVE_FOUR":
            return {...state,rating:"ABOVE_FOUR"}

        
        case "ABOVE_THREE":
            return {...state,rating:"ABOVE_THREE"}

        
        case "ABOVE_TWO":
            return {...state,rating:"ABOVE_TWO"}

        
        case "ABOVE_ONE":
            return {...state,rating:"ABOVE_ONE"}

        case "RANGE" :
            return{...state,range:action.payload};

        case "CLEAR" :
            return {
                ...state,
                sortBy:null,
                category:{
                    men:false,
                    women:false,
                    hat:false,
                    shoe:false,
                    handbag:false,
                  },
                    rating:null,
                    range:0,
          

            }
            default : 
            return state ;
    
}
}
export {FilterReducer}