import React from 'react';
import styled from 'styled-components';
import bg from './bgg.jpg'

const Hero9 = () => {
  return (
    <Container>
        <Wrapper>
            <H1>Get $100 Bonus</H1>
            <P>Get $100 Bonus On Your First Plan</P>
            <Button>SIGNUP</Button>
        </Wrapper>
    </Container>
  )
}

export default Hero9;

const Container = styled.div`
width: 100%;
height: 35vh;
display: flex;
justify-content: center;
align-items: center;
padding: 40px 0;

/* @media Screen and (max-width: 768px){
  width: 90%;
} */

`;
const Wrapper = styled.div`
width: 78%;
height: 90%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 20px;
background-image: url(${bg});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
border-radius: 1rem;


@media Screen and (max-width: 768px){
    align-items: center;
    width: 80%;
}
`;
const H1 = styled.div`
font-size: 25px;
font-weight: 500;
color: white;
margin-bottom: 5px;
`;
const P = styled.div`
font-size: 17px;
font-weight: 300;
color: white;
margin: 15px 0 20px 0;
`;
const Button = styled.div`
padding: 0.7rem 1rem;
background-color: white;
border-radius: 0.6rem;
width: 100px;
height: 20px;
color: #44395B;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;