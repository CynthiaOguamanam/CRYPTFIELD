import React, {useEffect} from 'react';
import styled from 'styled-components';
import { SpinnerCircular } from 'spinners-react';
import LandingPage from './Land1/LandingPage'
import Land2 from './Land2/Land2'
import Land3 from './Land3/Land3'
import Land4 from './Land4/Land4'
import Land6 from './Land6/Land6'
import Land10 from './Land10/Land10'
import Discover from './Discover/Discover'
import Assetcryp from './AssetCryp/Assetcryp'
import Land9 from './Land9/Land9'
import EthScroll from './EthScroll'
import BitPage from './BitPage/BitPage';


const Landing = () => {

  const [loading, setLoading] = React.useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, [5000])
  });

  return (
    <div>
      {
        loading? <Div>
        <SpinnerCircular size={45} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /> 
       </Div> : <>
       <EthScroll/>
      <LandingPage/>
      <Land2/>
      <Land3/>
      <Land4/>
      <BitPage/>
      <Discover/>
      {/* <Land5/> */}
      <Assetcryp/>
      <Land6/>
      <Land10/>
      <Land9/>
      {/* <Land8/> */}
       </>
      }
    </div>
  )
}

export default Landing;

const Div = styled.div`
width: 100%;
height: 100vh;
position: fixed;
z-index: 100000;
background-color: #101C30;
top: 0;
display: flex;
justify-content: center;
align-items: center;

`;


