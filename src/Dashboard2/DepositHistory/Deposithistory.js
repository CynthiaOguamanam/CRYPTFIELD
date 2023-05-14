import React from 'react'
import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
// import usdt from './
import bgbg from './bgbg.jpg';

const DepositHistory = () => {
  return (
    <Container>
        <Wrapper>
            <Hold2>
                <Div>
                    <H1>Deposit History</H1>
                    <Holder>
                        <Icon />
                        <Pagename>--make deposit</Pagename>
                    </Holder>
                </Div>
            </Hold2>
        </Wrapper>
        <Wrapper2>
            <LeftHold>
              <InputHold2>
                <Title>Date</Title>
                <Right2>10/05/2023</Right2>
              </InputHold2>
              <InputHold2>
                <Title>Transaction Id</Title>
                <Right2>P2Cr004BC2DffyM</Right2>
              </InputHold2>
              <InputHold2>
                <Title>Amount</Title>
                <Right2>2000 USD</Right2>
              </InputHold2>
              <InputHold2>
                <Title>Status</Title>
                <Button2>Pending</Button2>
              </InputHold2>
              <InputHold2>
                <Title>Geteway</Title>
                <Right2>Bitcoin BTC</Right2>
              </InputHold2>
            </LeftHold>
            <Wrap2>
                <iframe title='btc' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22NASDAQ%3AAAPL%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box",display: "block", height: "100%", width: "32%"}}></iframe>

                <iframe title='eth' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3ABTCUSDT%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box", display: "block", height: "100%", width: "32%"}}></iframe>
                <iframe title='alt' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22FX%3AEURUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box", display: "block", height: "100%", width: "32%"}}></iframe>
                </Wrap2>
        </Wrapper2>
    </Container>
  )
}

export default DepositHistory;

export const BottomDiv = styled.div`
/* background-color: #BF1E24; */
width: 90%;
height: 100%;
border: 1px solid silver;
margin-bottom: 30px;

@media Screen and (max-width: 768px){
    height: auto;
    width: 83%;
    margin-top: 30px;
}
`;

const Wrap2 = styled.div`
/* width: 100%; */
width: 97%;
height: auto;
padding: 40px 30px 40px 30px;
/* border: 1px solid #FFCC40; */
border-radius: 0.6rem;
background-color: #111D32;
display: flex;
justify-content: space-between;
align-items: center;
/* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
margin-top: 40px;

@media Screen and (max-width: 768px){
    width: 100%;
    background:none;
    box-shadow: none;
    padding: 0 0 0 0;

}
`;

const LeftHold = styled.div`
width: 50%;
background-color: #16233C;
height: 100%;
display: flex;
flex-direction: column;
align-items:center;
padding: 20px;
margin-top: 30px;

@media Screen and (max-width: 768px){
  width: 80%;
  background-color: #16233C;
}

`;

const Right2 = styled.div`
color: whitesmoke;
font-size: 15px;
font-weight: 500;

@media Screen and (max-width: 768px){
  font-size: 17px;
}
`;


const InputHold2 = styled.div`
  width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin :10px 0;
@media Screen and (max-width: 768px){
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 47px;
    margin :10px 0;
    margin-left: 10px;

}
`;

const Title = styled.div`
/* display: none; */
font-size: 15px;
    font-weight: 500;
    color: whitesmoke;
@media Screen and (max-width: 768px){
    /* display: block; */
    font-size: 20px;
    font-weight: 500;
    color: whitesmoke;
}
`;
const Button2 = styled.div`
width: auto;
height: 30px;
padding: 7px;
background-color: #FF4D4D;
border-radius: 0.4rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 15px;
font-weight: 500;
color: white;
cursor: pointer;
@media Screen and (max-width: 768px){
  
}
`;


const Wrapper2 = styled.div`
width: 95%;
height: auto;
display: flex;
flex-direction: column;
/* justify-content: space-between; */
align-items: center;
@media Screen and (max-width: 768px){
/* display: block; */
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
/* background-color: red; */
}

`;

const Container = styled.div`
width: 100%;
   height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  background-color: #0F192C;
@media Screen and (max-width: 768px){
    display: block;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  background-color: #0F192C;
}

`;

const Wrapper = styled.div`
 width: 100%;
    height: 40vh;
    /* min-height: max-content; */
    background-image: url(${bgbg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

@media Screen and (max-width: 768px){
    display: block;
    width: 100%;
    height: 40vh;
    /* min-height: max-content; */
    background-image: url(${bgbg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
`;

const Hold2 = styled.div`
/* display: none; */
width: 100%;
    height: 40vh;
    background-color: #0F192C;
    opacity: 75%;
    display: flex;
    align-items:center;
@media Screen and (max-width: 768px){
    display: block;
    width: 100%;
    height: 40vh;
    background-color: #0F192C;
    opacity: 75%;
    display: flex;
    align-items:center;
}

`;

const Div = styled.div`
/* display: none; */
width: auto;
    height: auto;
    /* background-color: red; */
    margin-left: 80px;
@media Screen and (max-width: 768px){
    width: auto;
    height: auto;
    /* background-color: red; */
    margin-left: 80px;
}

`;
const H1 = styled.div`
font-size: 45px;
    color: whitesmoke;
    font-weight: bold;
@media Screen and (max-width: 768px){
    /* display: block; */
    font-size: 45px;
    color: whitesmoke;
    font-weight: bold;
}
`;
const Holder = styled.div`
display: block;
    width: auto;
    display: flex;
    align-items: center;

@media Screen and (max-width: 768px){
    display: block;
    width: auto;
    display: flex;
    align-items: center;
    /* justify-content: ; */
} 
`;
const Pagename = styled.div`
/* display: none; */
font-size: 25px;
color: #FF4D4D;
font-weight: bold;
display: block;
display: flex;
justify-content: flex-start;
@media Screen and (max-width: 768px){
font-size: 25px;
color: #FF4D4D;
font-weight: bold;
display: block;
display: flex;
justify-content: flex-start;
}
`;
const Icon = styled(AiFillHome)`
    color: #FF4D4D;
    width: 30px;
    height: 30px;

@media Screen and (max-width: 768px){
    /* display: block; */
    color: #FF4D4D;
    width: 30px;
    height: 30px;

}
`;