import React from "react";
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Modal = ({setModal}) =>{
    return(
        <Container setModal={setModal}>
            <Wrapper>
            <Hold onClick={() =>{
                setModal(false);
            }}>
            <FaTimes/>
            </Hold>
                <H1>Open manual order</H1>
                <One>
                    <Left>
                        <div>Balance</div>
                        <Balance>$0</Balance>
                    </Left>
                    <Bal>Replenish Balance</Bal>
                </One>
                <Two>
                    <InputHold>
                        <Name>Select Payment method</Name>
                        <Select >
                            <Options  value="Deposit Wallet">Deposit wallet</Options>
                            <Options value="with referral">Withdrawal wallet</Options>
                            <Options value="with referral">Bitcoin Wallet</Options>
                            {/* <options>Bitcoin</options> */}
                        </Select>
                    </InputHold>
                </Two>
                <Three>
                <InputHold>
                        <Name>Select Payment method</Name>
                        <Input placeholder="3000.00">
                        </Input>
                    </InputHold>
                </Three>
                <Button to='/walletpage'>Create Order</Button>
            </Wrapper>
        </Container>
    )
};


export default Modal;

const Hold = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #FF4D4D;
color: white;
background-color: #0F192C;
width: 30px;
height: 30px;
cursor: pointer;
`;

const Button = styled(Link)`
width: auto;
height: 30px;
padding:10px 12px;
text-decoration: none;
/* background-color: #FF4D4D; */
background-color: #0F192C;
border-radius: 0.4rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 15px;
font-weight: 500;
color: white;
cursor: pointer;
border: 1px solid #FF4D4D;
margin-top: 15px;

@media Screen and (max-width: 700px){
  margin-top: 10px;
  width: 96%;
  
}

`;

const Container = styled.div`
width: 95%;
height: 450px;
border-radius: 5px;
background-color: transparent;
display: flex;
justify-content: center;
margin-left: 25px;

`;
const Wrapper = styled.div`
width: 45%;
height: 90%;
padding: 15px;
background-color: #253255;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: rgba(197, 197, 255, 0.25) 0px 2px 5px -1px, rgba(80, 80, 80, 0.3) 0px 1px 3px -1px;

@media Screen and (max-width: 768px){
    width: 100%;
}


`;

const H1 =styled.div`
font-size: 30px;
font-weight: 500;
color: whitesmoke;

`;
const Left =styled.div`
width: 30%;
/* background-color:red; */
padding:10px;
display: flex;
flex-direction: column;
/* justify-content: flex-start; */
align-items: flex-start;
color: whitesmoke;
font-size: 16px;
font-weight: bold;
`;
const One =styled.div`
width: 100%;
width: 98%;
/* background-color:green; */
padding:10px;
display: flex;
justify-content: space-between;
align-items: center;
color: whitesmoke;
font-size: 16px;
font-weight: bold;
margin: 10px 0;

`;
const Two =styled.div`
width : 100%;
display: flex;
justify-content: space-between;


`;
const InputHold =styled.div`
width :100%;
`;
const Input = styled.input`
/* background-color: red; */
width: 97%;
padding: 13px 5px;
border: 1px solid whitesmoke;
background: transparent;
color: whitesmoke;

::placeholder{
    color: whitesmoke;
}
`;
const Name =styled.div`
color: whitesmoke;
margin-bottom: 10px;

`;
const Select =styled.select`
width: 100%;
padding: 15px 0;
background:transparent;
color: whitesmoke;

`;
const Options = styled.option`
width: 100%;
padding: 10px 0;
color: #000;
`;
// const Two =styled.div``;
const Three =styled.div`
width : 100%;
display: flex;
justify-content: space-between;
margin-top: 20px;
`;
const Bal =styled.div`
color: #FF4D4D;
`;
const Balance =styled.div``;
// const Button =styled.div``;


