import React from "react";
import styled from "styled-components"

const Verify = () =>{
    return(
        <Container>
            <Wrapper>
                <Description>
                    <H1>Enter Verification Code</H1>
                    <Content>
                        Please enter the verification code sent to your email to complete your verification process.
                    </Content>
                </Description>
                <InputHold>
                    <Input placeholder="0"/>
                    <Line></Line>
                    <Input placeholder="0"/>
                   <Line></Line>
                    <Input placeholder="0"/>
                    <Line></Line>
                    <Input placeholder="0"/>
                    <Line></Line>
                    <Input placeholder="0"/>
                    <Line></Line>
                    <Input placeholder="0"/>
                </InputHold>
                <Button>Verify</Button>
            </Wrapper>
        </Container>
    )
};

export default Verify;

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #16243D;
display: flex;
justify-content:center;
align-items: center;
`;
const Wrapper = styled.div`
width: 80%;
height: 85%;
display: flex;
flex-direction: column;
align-items: center;
/* background-color: red; */
text-align: center;

`;
const Description = styled.div`
font-size: 20px;
color: lightgrey;

`;
const H1 = styled.div`
font-size: 30px;
`;
const Content = styled.div`
margin: 40px 0;
`;
const InputHold = styled.div`
background-color: #101B30;
width: 90%;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0;
border-radius: 1.3rem;

@media Screen and (max-width: 768px){
    width: 100%;
    height: 50px;

}
`;
const Input = styled.input`
width: 13%;
height: 95%;
background: none;
border: none;
outline: none;
color: lightgrey;


::placeholder{
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color: lightgrey;
};

@media Screen and (max-width: 768px){
    width: 18%;
    align-items: center;
    padding-bottom: -30px
}
`;
const Button = styled.div`
width: 20%;
background-color: #015FC9;
margin: 40px 0;
color: lightgrey;
padding: 15px 0;
border-radius: 0.5rem;
font-size: 18px;
font-weight: 500;
cursor: pointer;
`;
const Line = styled.div`
width: 1px;
height: 100%;
background-color: grey;
`;


