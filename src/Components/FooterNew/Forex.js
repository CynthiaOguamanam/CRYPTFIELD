import React from 'react';
import styled from 'styled-components';
import bgbg from './bg3.jpg';
import {AiOutlineStock} from 'react-icons/ai'



const Forex = () =>{
    return(
        <Container>
            <Wrapper>
            <Hold2>
                <Div>
                    <H1>Forex</H1>
                    <Holder>
                        <Icon />
                        <Pagename>--Forex Trade</Pagename>
                    </Holder>
                </Div>
            </Hold2>
        </Wrapper>
        <Down>
            <p>
                <H1>Trade the <span style={{color:"#E8403B"}}>FOREX</span> market with Premium-cryptassets</H1>
                <br/>
                <br/>
                The FX market is one of the world’s biggest markets. You can trade currency pairs from every corner of the world. However, there are a handful of pairs that are worth mentioning: more traded than any other currency pairs, the ‘majors’ dominate the FX market. The four most traded currency pairs in the world have been coined the ‘majors’. They involve the following currencies: euro, US dollar, Japanese yen and pound sterling

                <br/>
                <br/>
                WHY PREMIUM-CRYPTASSETS?
                <br/>
                We trade profitably, the most popular pairs like the EUR/USD, followed by the USD/JPY, GBP/USD and USD/CHF pairs respectively. There are a few other currencies that deserve to be mentioned. Informally known as the ‘commodity pairs’, the AUD/USD or ‘Aussie’, USD/CAD and NZD/USD are all frequently traded currency pairs. Unsurprisingly, this group of currencies derives its nickname from the fact that they come from countries that possess large quantities of natural resources.
                <br/>
                <br/>
                Forex (FX) is a portmanteau of the words foreign [currency] and exchange. Foreign exchange is the process of changing one currency into another for various reasons, usually for commerce, trading, or tourism. According to a 2022 triennial report from the Bank for International Settlements (a global bank for national central banks), the daily global volume for forex trading reached $7.5 trillion in 2022.
                <br/>
                <br/>
                We suggest that clients who are interested in cryptocurrency approach them as speculative investments and consider their goals as well as the risks involved.
                </p>
                <Wrap2>
                <iframe title="iframe" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22kryptbased-assets.com%2Fforex.php%22%7D" style={{boxSizing: "border-box", display: "block", width: "100%",}}></iframe>
                </Wrap2>
                
        </Down>
        </Container>
    )
};

export default Forex;

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

