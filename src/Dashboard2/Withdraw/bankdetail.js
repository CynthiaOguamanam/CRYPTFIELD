import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
// import usdt from './
import bgbg from './bgbg.jpg';
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import qrcode from "./qrcode.jpeg"

const BankTransfer = () => {


const [data, setData] = useState()
  const {userid} = useParams()
  const url = `https://calm-erin-coral-wrap.cyclic.app/api/userdata/${userid}`

  useEffect(() =>{
    axios.get(url).then(res => setData(res.data.data))
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [])

  console.log("This is the data",data)

  return (
    <Container>
        <Wrapper>
            <Hold2>
                <Div>
                    <H1>{data?.userName} Dashboard</H1>
                    <Holder>
                        <Icon />
                        <Pagename>--Confirm Deposit</Pagename>
                    </Holder>
                </Div>
            </Hold2>
        </Wrapper>
        <Wrapper2>
            <Hold>
            <InputHold>
            <Left1>
                <Title>Please send your payment to this wallet address: 
                  <Title>16QHjLEwjJNaCnTQJkHKdP<br/>fD6bb1NrUSYd</Title>
                </Title>
                <Box>
                  <img src={qrcode} alt="wallet qr code"/>
                </Box>
                <TitleHold>
                  <Title>Plan: </Title>
                  <Titlename>Silver</Titlename>
                </TitleHold>
                <TitleHold>
                  <Title>Profit: </Title>
                  <Titlename>330.00% after 14days</Titlename>
                </TitleHold>
                <TitleHold>
                  <Title>Principal Return: </Title>
                  <Titlename>Included in profit</Titlename>
                </TitleHold>
                <TitleHold>
                  <Title>Principal Withdraw: </Title>
                  <Titlename>Available with 0.00% fee</Titlename>
                </TitleHold>
                {/* <TitleHold>
                  <Title>Credit Amount: </Title>
                  <Titlename>$10000.00</Titlename>
                </TitleHold> */}
                <TitleHold>
                  <Title>Deposit Fee: </Title>
                  <Titlename>0.00% + $0.00 (min: $0.00 max: $0.00)</Titlename>
                </TitleHold>

                <Title>Required Information:</Title>
                <TitleHold>
                  <Titlename>Transaction ID</Titlename>
                  <Input/>
                </TitleHold>

                <ButtonHold>
                  <Button to='/dashboard/:userid'>Save</Button>
                  <Button to='/walletpage'>Cancel</Button>
                </ButtonHold>
            </Left1>
          </InputHold>
            </Hold>
        </Wrapper2>
        <BottomDiv>
        <iframe style={{width: "100%", height: "600px", margin: "80px 0"}} title='frame' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A500%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22swiftcryptrade.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22swiftcryptrade.com%2F%3Fa%3Dhome%22%7D" ></iframe>
        </BottomDiv>
    </Container>
  )
}

export default BankTransfer;

const Box = styled.div`
width: 100%;
height: 300px;
/* background-color: red; */
margin: 30px 0;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const Button = styled(Link)`
width: 40%;
background-color: #015FC9;
text-align: center;
padding: 10px;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
color: whitesmoke;
`;

const Input = styled.input`
width: 200px;
height: 40px;
`;

const ButtonHold= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    width: 80%;

    @media Screen and (max-width: 768px){
      flex-wrap: wrap;
    }
`;
const TitleHold= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    width: 80%;

    @media Screen and (max-width: 768px){
      flex-wrap: wrap;
    }
`;
const Titlename= styled.div`
  color: whitesmoke;
`;

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


const InputHold = styled.div`
  width: 100%;
    /* height: auto; */
    /* min-height: max-content; */
    background-color: #16233C;
    display: flex;
    justify-content: space-around;
    align-items: center;
  /* padding: 10px 0; */
    border-radius: 0.7rem;
    padding: 45px 0 45px 20px;
    margin :10px 0;
@media Screen and (max-width: 768px){
    /* display: block; */
    width: 100%;
    /* height: auto; */
    /* min-height: max-content; */
    /* background-color: #015FC9; */
    display: flex;
    justify-content: space-around;
    align-items: center;
  /* padding: 10px 0; */
    border-radius: 0.7rem;
    padding: 10px 0 10px 20px;
    margin :10px 0;
}
`;
const Left1 = styled.div`
/* display: none; */
width: 86%;
    display: flex;
    flex-direction :column;
    margin-right: 30px;
@media Screen and (max-width: 768px){
    /* display: block; */
    width: 92%;
    display: flex;
    flex-direction :column;
    margin-left: 20px
}
`;

const Title = styled.div`
/* display: none; */
font-size: 15px;
    font-weight: 500;
    color: whitesmoke;
@media Screen and (max-width: 768px){
    /* display: block; */
    font-size: 17px;
    font-weight: 500;
    color: whitesmoke;
}
`;

// const Icon2 = styled(AiOutlineDollar)`
// display: none;

// @media Screen and (max-width: 768px){
// display: block;
// color: #FF4D4D;
// width: 50px;
// height: 50px;
// }
// `;


const Wrapper2 = styled.div`
width: 95%;
height: auto;
display: flex;
justify-content: space-between;
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

const Hold = styled.div`
width :40%;
    height: 100%;
    /* background-color: red; */
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
@media Screen and (max-width: 768px){
    /* display: block; */
    width :80%;
    height: 100%;
    /* background-color: red; */
    padding: 20px 0;

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