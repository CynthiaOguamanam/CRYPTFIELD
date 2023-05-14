import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { 
    AiFillCopy,
     AiOutlineCloud, AiOutlineCreditCard, AiOutlineDollar, AiOutlineWallet} from 'react-icons/ai'
import {AiFillHome, AiFillProfile, AiOutlineCodeSandbox} from 'react-icons/ai'
// import usdt from './
import bgbg from './bgbg.jpg';
import {useParams} from "react-router-dom";
import axios from 'axios';
import Modal from "../Order/Modal"

const NewDashboard = () => {

  const [modal, setModal] = useState(false)

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
                        <Pagename>--Home</Pagename>
                    </Holder>
                </Div>
            </Hold2>
        </Wrapper>
        <Wrapper2>
            <Hold>
            <InputHold>
            <Left1>
                <Title>Referral Links</Title>
              <Linkput>https://premium-cryptassets/123ref_io
              <AiFillCopy style={{width: 45, height: 45, color: "#FF4D4D"}}/>
               </Linkput>
            </Left1>
          </InputHold>
            <InputHold>
            <Left>
              <Title>Deposit Wallet Balance</Title>
              <Price>${data?.depositWalletbalance}.00</Price>
            </Left>
            <Right>
              <AiOutlineDollar style={{width: 45, height: 45, color: "#FF4D4D"}}/>
            </Right>
          </InputHold>
            <InputHold>
            <Left>
              <Title>Interest Wallet Balance</Title>
              <Price>${data?.interestWalletbalance}.00</Price>
            </Left>
            <Right>
              <AiOutlineWallet style={{width: 45, height: 45, color: "#FF4D4D"}}/>
            </Right>
          </InputHold>
            <InputHold>
            <Left>
              <Title>Total Invest</Title>
              <Price>${data?.totalInvest}.00</Price>
            </Left>
            <Right>
              <AiOutlineCodeSandbox style={{width: 45, height: 45, color: "#FF4D4D"}}/>
            </Right>
          </InputHold>
            <InputHold>
            <Left>
              <Title>Total Deposit</Title>
              <Price>${data?.totalDeposit}.00</Price>
            </Left>
            <Right>
              <AiOutlineCreditCard style={{width: 45, height: 45, color: "#FF4D4D"}}/>
            </Right>
          </InputHold>
            <InputHold>
            <Left>
              <Title>Total Withdrawal</Title>
              <Price>${data?.totalWithdraw}.00</Price>
            </Left>
            <Right>
              <AiOutlineCloud style={{width: 45, height: 45, color: "#FF4D4D"}}/>
            </Right>
          </InputHold>
            <InputHold>
            <Left>
              <Title>Referral earnings</Title>
              <Price>$10</Price>
            </Left>
            <Right>
              <AiFillProfile style={{width: 45, height: 45, color: "#FF4D4D"}}/>
            </Right>
          </InputHold>
            </Hold>
            <LeftHold>
              <InputHold2>
                <Title>Date:</Title>
                <Right2></Right2>
              </InputHold2>
              <InputHold2>
                <Title>Transaction Id:</Title>
                <Right2></Right2>
              </InputHold2>
              <InputHold2>
                <Title>Gateway:</Title>
                <Right2>{data?.gateWay}</Right2>
              </InputHold2>
              <InputHold2>
                <Title>Status:</Title>
                <Right2>{data?.status}</Right2>
                {/* <Button2>{data?.status}</Button2> */}
              </InputHold2>
              <InputHold2>
                <Title>Post Balance:</Title>
                <Right2>{data?.currentBalance}</Right2>
              </InputHold2>
        <Button3 onClick={() =>{
          setModal(true);
        }}>Make Deposit</Button3>
              <Wrap2>
                <iframe title='btc' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22NASDAQ%3AAAPL%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box",display: "block", height: "100%", width: "32%"}}></iframe>

                <iframe title='eth' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3ABTCUSDT%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box", display: "block", height: "100%", width: "32%"}}></iframe>
                <iframe title='alt' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22FX%3AEURUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box", display: "block", height: "100%", width: "32%"}}></iframe>
                </Wrap2>
            </LeftHold>
        </Wrapper2>
        <BottomDiv>
        <iframe style={{width: "100%", height: "600px", margin: "80px 0"}} title='frame' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A500%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22swiftcryptrade.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22swiftcryptrade.com%2F%3Fa%3Dhome%22%7D" ></iframe>
        </BottomDiv>
        {
          modal? (<ModalHold><Modal setModal={setModal}/></ModalHold>) : null
        }
    </Container>
  )
}

export default NewDashboard;

const ModalHold= styled.div`
    position: fixed;
    height: 50vh;
    width: 90%;
    background-color: transparent;
    bottom: 120px;
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

const Wrap2 = styled.div`
/* width: 100%; */
width: 97%;
height: auto;
padding: 40px 30px 40px 30px;
/* border: 1px solid #FFCC40; */
border-radius: 0.6rem;
background-color: #111D32;
display: flex;
justify-content: space-between;
align-items: center;
/* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
margin-top: 40px;

@media Screen and (max-width: 768px){
    width: 100%;
    background:none;
    box-shadow: none;
    padding: 0 0 0 0;

}
`;

const LeftHold = styled.div`
width: 50%;
/* background-color: yellow; */
height: 100%;
display: flex;
flex-direction: column;
align-items:center;
padding-right: 20px;

@media Screen and (max-width: 768px){
  width: 80%;
  background-color: #16233C;
}

`;

const Right2 = styled.div`
color: whitesmoke;
font-size: 15px;
font-weight: 500;

@media Screen and (max-width: 768px){
  font-size: 17px;
}
`;

const Linkput = styled.div`
color: whitesmoke;
width: 100%;
    background-color: #111D32;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border-radius: 0.3rem;

@media Screen and (max-width: 768px){
    /* display: block; */
    color: whitesmoke;
    background-color: #111D32;
    height: 50px;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border-radius: 0.3rem;
}

`;

const InputHold2 = styled.div`
  width: 100%;
    /* height: auto; */
    /* min-height: max-content; */
    /* background-color: #16233C; */
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
  /* padding: 10px 0; */
    /* border-radius: 0.7rem; */
    padding: 20px;
    margin :10px 0;
@media Screen and (max-width: 768px){
    /* display: block; */
    width: 70%;
    /* height: auto; */
    /* min-height: max-content; */
    /* background-color: #015FC9; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  /* padding: 10px 0; */
    /* border-radius: 0.7rem; */
    padding: 20px 47px;
    margin :10px 0;
    margin-left: 10px;

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
    padding: 5px 0 5px 20px;
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
const Left = styled.div`
/* display: none; */
width: 70%;
    display: flex;
    flex-direction :column;
@media Screen and (max-width: 768px){
    /* display: block; */
    width: 70%;
    display: flex;
    flex-direction :column;
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

const Button3 = styled.button`
width: 140px;
height: 60px;
padding: 7px;
background-color: #FF4D4D;
border-radius: 0.4rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 15px;
font-weight: 500;
text-decoration: none;
color: white;
cursor: pointer;
margin-top: 50px;
border: none;
@media Screen and (max-width: 768px){
  
}
`;
const Price = styled.div`
font-size: 20px;
    font-weight: 500;
    color: whitesmoke;
@media Screen and (max-width: 768px){
    /* display: block; */
    font-size: 20px;
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
const Right = styled.div`
 width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #111D32;
    border-radius: 0.4rem;

@media Screen and (max-width: 768px){
    display: block;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #111D32;
    border-radius: 0.4rem;
}
`;

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