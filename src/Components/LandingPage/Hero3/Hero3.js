import React from 'react';
import styled from 'styled-components';
import {AiOutlineArrowDown} from 'react-icons/ai'
import {FaMoneyBill, FaChartBar, FaCoins} from 'react-icons/fa'


const Hero3 = () => {
  return (
    <Container>
        <Wrapper>
            <Div1>
                <H1>Putting our investors first is <span style={{textDecoration: "10px solid orange"}}>Key</span></H1>
                <H4>We are committed to providing all our investors with exceptional service while offering our team the best training.</H4>
                <P>The Crypfield is an International online broker that has been actively operating in the Crypto & Stocks Trading trading markets. With our advanced, web-based trading platform, you can trade on the largest lists of assets in the industry. From Currency pairs, and Commodities to stocks and indices, we have it all. Keep your trading costs down with competitive spreads, commissions and low margins. View spreads on our most popular cash instruments.</P>
            </Div1>
            <Div2>
                <H1>Experience more than Trading.</H1>
                <H4>We follow a very strict and disciplined process for investment, as we are aware, that we are dealing with our client’s funds. Investment means a lot to us, and we respect the trust of our clients.</H4>
                <P>You relax and our platform generates profit for you. Distributed server load keeps the bot always in service. Only 0.005 BTC one-time and you get daily profit for a lifetime. A personalized plan that brings all aspects of your financial life together A strategic mix of insurance and investments working together for your goals Your go-to financial expert who helps keep your big picture, and dreams, in focus</P>
            </Div2>
            <Arrow/>
            <Line></Line>
            <Div3>
                <H1>Investment plans that suits your personality</H1>
                <P>We create value by sticking to our consistent investment philosophy and disciplined research process</P>
                <BoxHold>
                <Box>
                    <FaMoneyBill style={{color: "#44395B", width: "30px", height: "30px"}}/>
                    <Butn>Forex</Butn>
                </Box>
                <Box>
                <FaChartBar style={{color: "#44395B", width: "30px", height: "30px"}}/>
                    <Butn>Stocks</Butn>
                </Box>
                <Box>
                <FaCoins style={{color: "#44395B", width: "30px", height: "30px"}}/>
                    <Butn>Crypto</Butn>
                </Box>
                <Box>
                <FaMoneyBill style={{color: "#44395B", width: "30px", height: "30px"}}/>
                    <Butn>Non-Farm Payroll</Butn>
                </Box>
                </BoxHold>
            </Div3>
        </Wrapper>
    </Container>
  )
}

export default Hero3;

const Butn = styled.div`
padding: 5px 10px;
width: 80px;
background-color: #FD6A4F;
border-radius: 5px;
margin: 5px 0 0 0;
`;

const Container = styled.div`
width: 100%;
height: auto;
background-color: whitesmoke;
display: flex;
justify-content: center;
align-items: center;
padding: 100px 0;
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
color: #44395B;
font-size: 35px;
font-weight: 500;
`;
const H4 = styled.div`
font-size: 25px;
color: #999999;
margin-top: 15px;
`;
const P = styled.div`
color: #192441;
margin-top: 15px;
`;
const Div2 = styled.div`
margin-top: 85px;
text-align: center;
`;
const Arrow = styled(AiOutlineArrowDown)`
color: #FD6A4F;
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
border: 1px solid #FD6A4F;
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


