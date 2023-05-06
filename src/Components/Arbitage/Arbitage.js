import React from 'react';
import styled from 'styled-components';
import { FaBitcoin } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Arbitage = () => {
  return (
    <Container>
        <Wrapper>
            <H1>PLANS</H1>
            <Wrap>
                <Top>To create an order or automated trading, you need to go through <span style={{color: "#FF4D4D"}}>authorization.</span></Top>
            </Wrap>
                <Bottom>
                    <Topic>
                        <div>PLAN ID</div>
                        <div>DURATION</div>
                        <div>MIN - MAX</div>
                        <div></div>
                    </Topic>
                    <Line></Line>
                    <Topic2>
                        <Text><FaBitcoin style={{width: 30, height: 30, color: "#F7931A"}}/> BRONZE</Text>
                        <Text>7DAYS</Text>
                        <Text>$10,000 - $24,999</Text>
                        <Button to='/login'>LOGIN</Button>
                    </Topic2>
                    <Topic2>
                        <Text><FaBitcoin style={{width: 30, height: 30, color: "#F7931A"}}/> SILVER </Text>
                        <Text>7DAYS</Text>
                        <Text>$25,000 - $49,999</Text>
                        <Button to='/login'>LOGIN</Button>
                    </Topic2>
                    <Topic2>
                        <Text><FaBitcoin style={{width: 30, height: 30, color: "#F7931A"}}/> GOLD </Text>
                        <Text>7DAYS</Text>
                        <Text>$50,000 - $99,999</Text>
                        <Button to='/login'>LOGIN</Button>
                    </Topic2>
                    <Topic2>
                        <Text><FaBitcoin style={{width: 30, height: 30, color: "#F7931A"}}/> DIAMOND </Text>
                        <Text>7DAYS</Text>
                        <Text>$150,000 - $1,000,000</Text>
                        <Button to='/login'>LOGIN</Button>
                    </Topic2>
                </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Arbitage;

const Container = styled.div`
width: 100%;
height: auto;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
margin-top:70px;
`;
const Wrapper = styled.div`
width: 80%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
padding: 30px 0;

@media Screen and (max-width: 425px){
    height: auto;
}
`;
const H1 = styled.div`
font-size: 30px;
font-weight: bold;
color: #44395B;
`;
const Wrap = styled.div`
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
width: 97%;
margin: 20px 0;
padding: 45px 20px;
border-radius: 1rem;
`;
const Top = styled.div`
color: #44395B;
font-size: 17px;
font-weight: bold;
`;
const Bottom = styled.div`
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
width: 97%;
margin: 20px 0;
padding: 50px 20px;
border-radius: 0.8rem;

`;

const Line = styled.div`
width: 100%;
background-color: #44395B;
height: 1px;
margin: 10px 0;
`;
const Topic = styled.div`
/* background-color: red; */
width: 78%;
display: flex;
justify-content: space-between;
font-size: 18px;
color: #44395B;
font-weight: 450;

@media Screen and (max-width: 425px){
    display: none;
}
`;
const Topic2 = styled.div`
width: 84%;
/* background-color: green; */
color: #44395B;
display: flex;
justify-content: space-between;
margin: 0 0 40px 0;
transition: all 1s;
cursor: pointer;


:hover{
    background-color: #44395B;
    opacity: 80%;
    transition: all 700ms;
    padding: 0.3rem;
    border-radius: 0.5rem;
    color: white;
}

@media Screen and (max-width: 425px){
    border-radius: 10px;
    margin-bottom: 30px;
    line-height: 150%;
    position: relative;
    border-collapse: collapse;
    text-indent: initial;
    border-spacing: 2px;
    display: table;

    :hover{
        background: none;
        color: #44395B;
    }
}
`;
const Text = styled.div`
width: auto;
height: auto;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 17px;
font-weight: bold;

@media Screen and (max-width: 425px){
    margin-bottom: 15px;
}
`;
const Button = styled(Link)`
padding: 15px 20px;
background-color: #FF4D4D;
/* background-color: #44395B; */
border-radius: 0.5rem;
text-align: center;
color: white;
text-decoration: none;

@media Screen and (max-width: 425px){
    padding: 12px 20px;
}
`;