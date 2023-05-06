import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bg from './dec.png';


const Faq = () => {
  return (
    <Container2>
    <Container>
        <Wrapper>
            <H1>FAQ</H1>
            <Holder>
            <Wrap>
                <Title>Beginner's Guide</Title>
                <P to='/howreg'>How to register an account</P>
                <P>How to replenish the wallet</P>
                <P>How to create an arbitage order</P>
                <P>How to withdraw funds</P>
            </Wrap>
            <Wrap>
                <Title>Security</Title>
                <P>Account Security Enhancement</P>
                <P>How to replenish the wallet</P>
                <P>What is 2-factor authentication?</P>
                <P>Enable or Disable 2FA</P>
            </Wrap>
            </Holder>
            <Holder>
            <Wrap>
                <Title>Affiliate Program</Title>
                <P>How to get a personal link</P>
                <P>What is an affiliate program?</P>
                <P>Wha are tracks?</P>
                <P>Partner Tips</P>
            </Wrap>
            <Wrap>
                <Title>Possible problems</Title>
                <P>Registration failed</P>
                <P>Replenishment problem</P>
                <P>Withdrawal problem</P>
                <P>Orders problem</P>
            </Wrap>
            </Holder>
            <Wrap>
                <Title>How to check the status of the orders?</Title>
                <P to='/change_email'>How to change the email address?</P>
                <P to='/change_password'>How to change the current password?</P>
            </Wrap>
        </Wrapper>
    </Container>
    </Container2>
  )
};

export default Faq;

const Container2 = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(120deg, #192441,#463A5C);

`;
const Container = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
margin: 70px 0;
padding: 30px 0;
background-image: url(${bg});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;
const Wrapper = styled.div`
width: 75%;
height: auto;
display: flex;
flex-direction: column;
padding: 30px 0;
`;
const H1 = styled.div`
font-size: 30px;
font-weight: bold;
color: whitesmoke;
margin-bottom: 30px;
`;
const Wrap = styled.div`
/* background-color: green; */
width: 40%;
display: flex;
flex-direction: column;


@media Screen and (max-width: 768px){
    width: 100%;
}
`;
const Title = styled.div`
font-size: 20px;
font-weight: bold;
color: whitesmoke;
margin-bottom: 20px;
`;
const P = styled(Link)`
color: #ff4d4d;
cursor: pointer;
text-decoration: none;
transition: all 1s;
/* letter-spacing: 2.5px; */
font-family: poppins;

:hover{
    text-decoration: 1px underline #ff4d4d;
    transition: all 1s;
}
`;
const Holder = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
margin: 30px 0;

@media Screen and (max-width: 768px){
    flex-direction: column;

}
`;

