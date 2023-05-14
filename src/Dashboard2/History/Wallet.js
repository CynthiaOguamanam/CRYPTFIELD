import React from "react";
import styled from 'styled-components';
import {FaBitcoin, FaEthereum, FaDollarSign} from 'react-icons/fa';
import {SiTether} from 'react-icons/si';
import {BsBank} from 'react-icons/bs';
import bgbg from "./bgbg.jpg";
import doge  from './dogecoin.jpg';
import bnb from './bnb.png'
import ripple from './ripple.png'
import { Link } from "react-router-dom";

const History2 = () =>{
    return(
        <Container>
            <Dash>
                <Dashin>
                    <Divin>
                        <H1>Dashboard</H1>
                        <Holder>
                        <Icon />
                        <Pagename>--make deposit</Pagename>
                        </Holder>
                    </Divin>
                </Dashin>
            </Dash>
            <Wrapper>
                <Card>
                    <FaBitcoin style={{backgroundColor:"white", width: 259.9, height: 259.9, color: "orange", borderRadius: "50%"}}/>
                    <Div>
                        <Type>Bitcoin-BTC</Type>
                        <Limit>Limit: 1000 - 5000000 USD</Limit>
                    </Div>
                    <Div2>Charge - 0 USD + 0%</Div2>
                    <Div3>
                        <Button to='/walletid'>Deposit</Button>
                    </Div3>
                </Card>
                <Card>
                    <FaEthereum style={{borderRadius: "50%",padding: "10px",color:"silver",backgroundColor:"indigo", width: 240, height: 240}}/>
                    <Div>
                        <Type>ETHEREUM-ETH</Type>
                        <Limit>Limit: 1000 - 5000000 USD</Limit>
                    </Div>
                    <Div2>Charge - 0 USD + 0%</Div2>
                    <Div3>
                        <Button to='/walletid'>Deposit</Button>
                    </Div3>
                </Card>
                <Card>
                    <SiTether style={{borderRadius: "3px",padding: "10px",color:"silver",backgroundColor:"#27A17C", width: 250, height: 250}}/>
                    <Div>
                        <Type>Tether-Usdt</Type>
                        <Limit>Limit: 1000 - 5000000 USD</Limit>
                    </Div>
                    <Div2>Charge - 0 USD + 0%</Div2>
                    <Div3>
                        <Button to='/walletid'>Deposit</Button>
                    </Div3>
                </Card>
                <Card>
                    <Img src={doge} style={{padding: "10px",color:"silver", borderRadius: "5px", width: 250, height: 250}}/>
                    <Div>
                        <Type>DOGECOIN</Type>
                        <Limit>Limit: 1000 - 5000000 USD</Limit>
                    </Div>
                    <Div2>Charge - 0 USD + 0%</Div2>
                    <Div3>
                        <Button to='/walletid'>Deposit</Button>
                    </Div3>
                </Card>
                <Card>
                    <Img src={ripple} style={{borderRadius: "50%",padding: "10px", width: 250, height: 250}}/>
                    <Div>
                        <Type>Ripple</Type>
                        <Limit>Limit: 1000 - 5000000 USD</Limit>
                    </Div>
                    <Div2>Charge - 0 USD + 0%</Div2>
                    <Div3>
                        <Button to='/walletid'>Deposit</Button>
                    </Div3>
                </Card>
                <Card>
                    <Img src={bnb} style={{borderRadius: "50%",padding: "10px", width: 250, height: 250}}/>
                    <Div>
                        <Type>BNB</Type>
                        <Limit>Limit: 1000 - 5000000 USD</Limit>
                    </Div>
                    <Div2>Charge - 0 USD + 0%</Div2>
                    <Div3>
                        <Button to='/walletid'>Deposit</Button>
                    </Div3>
                </Card>
                <Card>
                    <BsBank style={{borderRadius: "5px",padding: "10px", width: 250, height: 250, color: "#015FC9"}}/>
                    <Div>
                        <Type>Bank Transfer</Type>
                        <Limit>Limit: 1000 - 5000000 USD</Limit>
                    </Div>
                    <Div2>Charge - 0 USD + 0%</Div2>
                    <Div3>
                        <Button to='/walletid'>Deposit</Button>
                    </Div3>
                </Card>
            </Wrapper>
        </Container>
    )
};

export default History2;


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
const Dash = styled.div`
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

const Dashin = styled.div`
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

const Divin = styled.div`
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
const Icon = styled(FaDollarSign)`
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
const Container = styled.div`
width: 100%;
background-color: #101C30;
display: flex;
flex-direction: column;
align-items: center;
`;
const Wrapper = styled.div`
margin-top: 70px;
width: 85%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;

@media Screen and (max-width: 768px){
    flex-direction: column;
    flex-wrap: wrap;
}
`;
const Card = styled.div`
box-shadow: rgba(17, 132, 194, 0.2) 0px 2px 8px 0px;
width: 30%;
height: auto;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
margin: 10px 0;

@media Screen and (max-width: 768px){
    width: 100%;
}

`;
const Img = styled.img`
/* background-color: #F56D50; */
/* color: #F56D50; */
`;
const Div = styled.div`
width: 90%;
border: 1px dashed grey;
border-radius: 0.2rem;
padding: 10px;
text-align:center;
margin: 10px 0;

@media Screen and (max-width: 768px){
    text-align: center;
}

`;
const Type = styled.div`
color: whitesmoke;
font-size: 17px;
border-bottom: 1px dashed grey;
`;
const Limit = styled.div`
color: whitesmoke;
font-size: 17px;
`;
const Div2 = styled.div`
color: whitesmoke;
font-size: 17px;

`;
const Div3 = styled.div`
color: whitesmoke;
font-size: 17px;
border-bottom: 1px dashed grey;
 border-left: 1px dashed grey;
 border-right: 1px dashed grey;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 10px 0;
 margin: 20px 0 10px 0
`;
const Button = styled(Link)`
width: 70%;
background-color: #015FC9;
text-align: center;
padding: 10px;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
color: whitesmoke;
`;