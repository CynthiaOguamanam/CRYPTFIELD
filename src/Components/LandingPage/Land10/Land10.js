import React, {useEffect} from 'react';
import styled from 'styled-components';
import {AiOutlineArrowDown} from 'react-icons/ai'
import {FaMoneyBill, FaChartBar, FaCoins} from 'react-icons/fa'
import slider1 from './slider1.jpg'
import 'aos/dist/aos.css';
import AOS from 'aos';
// import data from './land.json'

const Hero3 = () => {

  useEffect(()=>{
    AOS.init({duration:2000})
}, []);


  return (
    <Container>
        <Holder>
        <Wrapper>
            <Div1>
                <H1 data-aos="fade-down">Putting our investors first is <span style={{textDecoration: "10px solid orange"}}>Key</span></H1>
                <H4>We are committed to providing all our investors with exceptional service while offering our team the best training.</H4>
                <P data-aos="fade-down">The Premium-cryptassests is an International online broker that has been actively operating in the Crypto & Stocks Trading trading markets. With our advanced, web-based trading platform, you can trade on the largest lists of assets in the industry. From Currency pairs, and Commodities to stocks and indices, we have it all. Keep your trading costs down with competitive spreads, commissions and low margins. View spreads on our most popular cash instruments.</P>
            </Div1>
            <Div2>
                <H1 data-aos="fade-down">Experience more than Trading.</H1>
                <H4>We follow a very strict and disciplined process for investment, as we are aware, that we are dealing with our client’s funds. Investment means a lot to us, and we respect the trust of our clients.</H4>
                <P data-aos="fade-down">You relax and our platform generates profit for you. Distributed server load keeps the bot always in service. Only 0.005 BTC one-time and you get daily profit for a lifetime. A personalized plan that brings all aspects of your financial life together A strategic mix of insurance and investments working together for your goals Your go-to financial expert who helps keep your big picture, and dreams, in focus</P>
            </Div2>
            <Arrow/>
            <Line></Line>
            <Div3>
                <H1 data-aos="fade-down" style={{color: "#FDBA43"}}>Investment plans that suits your personality</H1>
                <P data-aos="fade-down">We create value by sticking to our consistent investment philosophy and disciplined research process</P>
                <BoxHold>
                <Box data-aos="fade-down">
                    <FaMoneyBill style={{color: "#FDBA43", width: "30px", height: "30px"}}/>
                    <Butn>Forex</Butn>
                </Box>
                <Box data-aos="fade-down">
                <FaChartBar style={{color: "#FDBA43", width: "30px", height: "30px"}}/>
                    <Butn>Stocks</Butn>
                </Box>
                <Box data-aos="fade-down">
                <FaCoins style={{color: "#FDBA43", width: "30px", height: "30px"}}/>
                    <Butn>Crypto</Butn>
                </Box>
                <Box data-aos="fade-down">
                <FaMoneyBill style={{color: "#FDBA43", width: "30px", height: "30px"}}/>
                    <Butn>Non-Farm Payroll</Butn>
                </Box>
                </BoxHold>
            </Div3>
        </Wrapper>
        </Holder>
    </Container>
  )
};

export default Hero3;

const Butn = styled.div`
padding: 5px 10px;
width: 90px;
background-color: #015FC9;
border-radius: 5px;
margin: 5px 0 0 0;
color: lightgrey;
font-size: 17px;
font-weight: bold;
`;
const Container = styled.div`
width: 100%;
height: auto;
background-image:url(${slider1});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
/* padding: 100px 0; */
display: flex;
justify-content: center;
align-items: center;
`;
const Holder =styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
padding: 100px 0;
background-color:#111D32;
opacity: 90%;

`;
const Wrapper = styled.div`
width: 80%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
`;
const Div1 = styled.div`
text-align: center;
`;
const H1 = styled.div`
color: #FDBA43;
font-size: 35px;
font-weight: 500;
`;
const H4 = styled.div`
font-size: 25px;
color: lightgrey;
margin-top: 15px;
`;
const P = styled.div`
color: lightgrey;
margin-top: 15px;
`;
const Div2 = styled.div`
margin-top: 85px;
text-align: center;
`;
const Arrow = styled(AiOutlineArrowDown)`
color: #FDBA43;
margin: 100px 0;
width: 40px;
height: 40px;

@media Screen and (max-width: 768px){
    margin: 50px 0;
}
`;

const Line = styled.div`
margin: 50px;
width: 100%;
height: 1px;
background-color: #999999;
`;
const Div3 = styled.div`
width: 100%;
text-align: center;
`;
const BoxHold = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin: 40px 0 0 0;

@media Screen and (max-width: 1024px){
    flex-wrap: wrap;
}
`;
const Box = styled.div`
border: 1px solid #FDBA43;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
width: 200px;
height: 150px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
cursor: pointer;

@media Screen and (max-width: 1024px){
width: 230px;
margin: 10px 0;
}

@media Screen and (max-width: 768px){
width: 300px;
}

`;


