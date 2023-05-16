import React from 'react';
import styled from 'styled-components';
import bgbg from './bg.jpg';
import {AiOutlineStock} from 'react-icons/ai'



const Farm = () =>{
    return(
        <Container>
            <Wrapper>
            <Hold2>
                <Div>
                    <H1>Farm</H1>
                    <Holder>
                        <Icon />
                        <Pagename>--Non-Farm Payroll</Pagename>
                    </Holder>
                </Div>
            </Hold2>
        </Wrapper>
        <Down>
            <p>
                <H1>Trade the <span style={{color:"#E8403B"}}>Non-Farm Payroll</span> market with Premium-cryptassets</H1>
                <br/>
                <br/>
                Nonfarm payroll refers to the number of paid U.S. employees, excluding farm employees, government employees, private household employees, and employees of nonprofit organizations. The nonfarm payroll number is released on the first Friday of every month by the Bureau of Labor Statistics (BLS) as part of the Employment Situation Report. The report also includes the unemployment rate, average hourly earnings, and the number of people participating in the labor force.
                </p>
                <Wrap2>
                <iframe title="iframe" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22kryptbased-assets.com%2Fforex.php%22%7D" style={{boxSizing: "border-box", display: "block", width: "100%",}}></iframe>
                </Wrap2>
        </Down>
        </Container>
    )
};

export default Farm;

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
    font-size: 30px;
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

