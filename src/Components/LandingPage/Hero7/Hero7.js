import React, { useEffect } from 'react';
import styled from 'styled-components'
import {AiOutlinePercentage, AiOutlinePropertySafety, AiOutlineQuestion} from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero7 = () => {

    useEffect(()=>{
        AOS.init({duration:2000})
      }, []);

  return (
    <Container>
        <Wrapper>
            <Top>
               <H1>Why We Are Different</H1>
               <P>Our vision is to provide access to the world’s markets easier, faster and at <br/> a lower cost than what exists in the market today.</P>
            </Top>
            <Bottom>
                <Div>
                    <IconHold data-aos="flip-left"><AiOutlinePercentage style={{width: 35, height: 35}}/></IconHold>
                    <H4>INSTITUTIONAL INVESTMENT</H4>
                    <span>When you select kryptbased-assets.com to <br/> manage institutional assets, you will generate a <br/> better ROI</span>
                </Div>
                <Line></Line>
                <Div>
                    <IconHold  data-aos="flip-right"><AiOutlinePropertySafety style={{width: 35, height: 35}}/></IconHold>
                    <H4>REAL ASSETS</H4>
                    <span>Investors looking to add a broad real assets<br/> allocation to their private markets</span>
                </Div>
                <Line></Line>
                <Div>
                    <IconHold  data-aos="flip-left"><AiOutlineQuestion style={{width: 35, height: 35}}/></IconHold>
                    <H4>ALTERNATIVES</H4>
                    <span>As a pioneer in alternative investing cryptfield <br/> has a long track record of managing investors money</span>
                </Div>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Hero7;

const Container = styled.div`
width: 100%;
height: 80vh;
background-color: whitesmoke;
display: flex;
justify-content: center;
align-items: center;

@media Screen and (max-width: 1024px){
    height: auto;
    padding: 30px 0;
}
`;
const Wrapper = styled.div`
width: 80%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;
const Top = styled.div`
width: 100%;
text-align: center;
margin: 30px 0;
`;
const Bottom = styled.div`
width :100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 60px;

@media Screen and (max-width: 768px){
    flex-direction: column;
}
`;
const H1 = styled.div`
font-size: 30px;
font-weight: 500;
color: #42385A;
margin-bottom: 20px;
`;
const H4 = styled.div`
color: #42385A;
font-size: 20px;
margin-bottom: 10px;
font-weight: 500;
`;
const P = styled.div`
font-size: 23px;
font-weight: lighter;
color : grey;
`;
const Div = styled.div`
width: 30%;
height: auto;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;

@media Screen and (max-width: 768px){
    width :90%;
}

`;
const Line = styled.div`
width: 1px;
height :100%;
background-color :grey;
margin:30px 0;

`;
const IconHold = styled.div`
width: 60px;
height: 60px;
border-radius: 3rem;
display: flex;
justify-content: center;
align-items: center;
/* background-color: #FF4D4D; */
background-color: #42385A;
color: white;
margin-bottom: 10px;
`;


