import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
    display:flex;
    flex-direction:column;
    padding:1rem;
    border: 2px solid silver;
    border-radius: 10px;
    margin:1rem;
    background-color: white;
`

const AnimeQuote = (props)=>{
    const {data} = props;
    
    return (
        <ContentDiv>
            <h1>{`Anime: ${data.anime}`}</h1>
            <h2>{`Character: ${data.character}`}</h2>
            <p><strong>Quote: </strong>{data.quote}</p>
        </ContentDiv>
        

    )
}


export default AnimeQuote;