import {LOAD_RANDOM_QUOTE} from "../actions"


const initialValue = {
    randomAnime: null,
    arryOfRandomAnime:[]
}


const reducer = (state=initialValue, action)=>{
    switch(action.type){
        case(LOAD_RANDOM_QUOTE):
            return({
                ...state,
                randomAnime:action.payload
            })
        default:
            return state;
    }
}


export default reducer;