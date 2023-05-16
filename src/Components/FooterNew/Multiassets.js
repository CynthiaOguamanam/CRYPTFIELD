import React from 'react';
import styled from 'styled-components';
import bgbg from './bg8.jpg';
import {AiOutlineStock} from 'react-icons/ai'


const Multiassets = () =>{
    return(
        <Container>
            <Wrapper>
            <Hold2>
                <Div>
                    <H1>Multi-Assets</H1>
                    <Holder>
                        <Icon />
                        <Pagename>--Multiassets</Pagename>
                    </Holder>
                </Div>
            </Hold2>
        </Wrapper>
        <Down>
            <p>
                <H1>Why Multi assets?</H1>
                <br/>
                <br/>
                Since 2002, against the backdrop of some of the most challenging financial conditions in history, our robust and repeatable multi asset investment process and experienced Multi Asset Group have achieved equity-like returns with lower relative volatility.
        <br/>
        WHAT IS A DIVIDEND?
        <br/>
        A dividend is a payment made by a corporation to its stockholders, usually out of its profits. Dividends are typically paid regularly (e.g. quarterly) and made as a fixed amount per share of stock.
        <br/>
        <br/>
        <Wrap2>
        <iframe title='btc' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22NASDAQ%3AAAPL%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box",display: "block", height: "100%", width: "100%"}}></iframe>
        <iframe title='eth' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3ABTCUSDT%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
        <iframe title='alt' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22FX%3AEURUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
        </Wrap2>
        <br/>
        <br/>
        MULTI ASSET INCOME
        <br/>
        Multi-asset income solutions designed to provide clients with stable, sustainable income in today’s low-yield environment.
        <br/>
        <br/>
        MULTI ASSET TARGETED RETURN<br/>
        Multi-asset income solutions designed to provide clients with stable, sustainable income in today’s low-yield environment.
        <br/>
        <br/>
        Balanced
        <br/>
        Aims to deliver a long-term annualized return in excess of cash / inflation, with considerably less risk than equity.
        </p>
        <br/>
        <br/>
        </Down>
        </Container>
    )
};

export default Multiassets;

const Container = styled.div`
background-color: #16233C;
width :100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
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
    margin-left: 180px;
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

const Icon = styled(AiOutlineStock)`
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

const Down = styled.div`
width: 80%;
height: auto;
display: flex;
flex-direction: column;


p{
    color: lightgrey;
}
`;

const Wrap2 = styled.div`
width: 100%;
height: auto;
margin: 35px 0;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    flex-direction: column;
    with: 100%;
    justify-content: center;
    align-items: center;
}


`;
