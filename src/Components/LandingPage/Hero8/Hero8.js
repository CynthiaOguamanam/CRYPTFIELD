import React from 'react';
import styled from 'styled-components';

const Hero8 = () => {
  return (
    <Container>
        <Wrapper>
            <H4>Start trading with CRYPTFIELD</H4>
            <H1>Fast account opening in 3 simple steps</H1>
            <Hold>
            <Div>
                <Numb>1</Numb>
                <H3>Register</H3>
                <P>Create an account today on our trading<br/> platform</P>
            </Div>
            <Div>
                <Numb>2</Numb>
                <H3>Fund</H3>
                <P>Fund your account using a wide range <br/> of funding methods.</P>
            </Div>
            <Div>
                <Numb>3</Numb>
                <H3>Trade</H3>
                <P>Access 180+ instruments across all <br/> asset classes inside the platform</P>
            </Div>
            </Hold>
            <Hold>
            <Bottom>
                <Time> 7.12 ms</Time>
                <P2>AVERAGE ORDER EXECUTION SPEED</P2>
            </Bottom>
            <Line></Line>
            <Bottom>
                <Time> 12+</Time>
                <P2>INTEGRATED LIQUIDITY PROVIDERS</P2>
            </Bottom>
            <Line></Line>
            <Bottom>
                <Time> 12,000</Time>
                <P2>EXECUTED ORDERS PER SECOND</P2>
            </Bottom>
            <Line></Line>
            <Bottom>
                <Time>$545 k</Time>
                <P2>AVERAGE TRADING VOLUME PER DAY</P2>
            </Bottom>
            </Hold>
            <Button>Setup your trading account</Button>
            <P2>Registration takes only 40 seconds!</P2>
        </Wrapper>
    </Container>
  )
}

export default Hero8;

const Container = styled.div`
width: 100%;
height: 100vh;
background: linear-gradient(45deg, #212846, #44395B);
display: flex;
justify-content: center;
align-items: center;

@media Screen and (max-width: 1024px){
    height: auto;
    padding-bottom: 20px
}
@media Screen and (max-width: 768px){
    height: auto;
}

`;

const Hold = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin :20px 0;

@media Screen and (max-width: 425px){
    flex-direction: column;
    align-items: center;
}
`;

const Wrapper = styled.div`
width: 80%;
height: 90%;
display: flex;
flex-direction: column;
align-items: center;

@media Screen and (max-width: 768px){
    width: 90%;
}

`;

const H1 = styled.div`
font-size: 35px;
color: whitesmoke;
margin: 10px 0 20px 0;
font-weight: 500;


@media Screen and (max-width: 768px){
    font-size: 25px;
    text-align: center;
}
`;
const H4 = styled.div`
font-size: 20px;
color: whitesmoke;
font-weight: 500px;
margin: 20px;
`;
const H3 = styled.div`
font-size: 25px;
font-weight: 400;
color: whitesmoke;
margin: 10px 0;
`;
const P = styled.div`
color: whitesmoke;
`;
const P2 = styled.div`
color: #FF4D4D
`;
const Time = styled.div`
color: whitesmoke;
font-size: 40px;

`;
const Div = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin: 10px 0 40px 0;
`;
const Numb = styled.div`
width: 90px;
height: 90px;
text-align: center;
background-color: #FF4D4D;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
font-size: 30px;
color: whitesmoke;
/* color: whitesmoke; */

@media Screen and (max-width: 768px){
    width: 60px;
    height:60px;
}
`;
const Bottom = styled.div`
text-align: center;
margin: 20px 0;
`;
const Line = styled.div`
width: 1px;
height: 100%;
background-color: silver;

@media Screen and (max-width: 768px){
    display: none;
}
`;
const Button = styled.div`
background-color: #FF4D4D;
width: 20%;
padding: 0.8rem 0.2rem;
text-align: center;
color: white;
border-radius: 0.5rem;
font-size: 17px;
font-weight: 500;
margin: 1rem 0;
cursor: pointer;
transition: all 400ms;


@media Screen and (max-width: 768px){
    width: 40%;
}
@media Screen and (max-width: 425px){
    width: 50%;
}
@media Screen and (max-width: 375px){
    width: 60%;
}
@media Screen and (max-width: 320px){
    width: 70%;
}

`;
// const H3 = styled.div``;


