import axios from "axios";

export const LOAD_RANDOM_QUOTE = "LOAD_RANDOM_QUOTE";
export const FETCH_FAIL = "FETCH_FAIL";





export const fetchAnime = ()=> {
    return(dispatch=>{
        axios.get("https://animechan.vercel.app/api/random")
        .then(res=>{
            dispatch({type:LOAD_RANDOM_QUOTE, payload:res.data});
        })
        .catch(e=>{
            console.log("Something is wrong");
        })
    })
}


export const changeTheRandomQuote = (quote)=>{
    return {type: LOAD_RANDOM_QUOTE, payload: quote};
}
