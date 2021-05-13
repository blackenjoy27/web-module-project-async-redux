import './App.css';
import InfoForm from "./components/InfoForm";
import AnimeQuote from "./components/AnimeQuote";
import styled from "styled-components";
import { connect } from "react-redux"
import { fetchAnime } from './actions';

const ContentDiv = styled.div`
    display:flex;
    flex-direction:column;
`
const RandAnimeBtn = styled.button`
    border:2px solid lime;
    width:15rem;
    height:2rem;
    margin: auto;
    border-radius:10px;
    background-color: white;
`
function App(props) {

 
  const anime = props.randAnime? props.randAnime:{
    anime:"Bleach",
    character:"Zangetsu",
    quote:"Ichigo... I hate the rain. Rain falls in this world, too. When your heart is in chaos, this sky becomes clouded. When you are sad, rain falls so terribly easy. Can you understand...the horrible feeling of being pelted by rain when you're all alone in this solitary world? If only to stop that rain, I shall lend you any strength. If you trust in me, I won't let a single drop of rain fall from that sky. Ichigo, trust me...you are not fighting alone."
  };
  return (
    <ContentDiv>
      <AnimeQuote data={anime}/>
      <RandAnimeBtn onClick={()=>props.dispatch(fetchAnime())}>Random Anime Quote</RandAnimeBtn>
      <InfoForm/>
    </ContentDiv>
  );
}

const mapStateToProps = (state)=>{
  return{
    randAnime: state.randomAnime
  }
}

export default connect(mapStateToProps)(App);
