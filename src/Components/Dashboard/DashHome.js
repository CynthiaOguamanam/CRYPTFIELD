import React from 'react'
import styled from 'styled-components';
import { FaBitcoin, FaDollarSign} from 'react-icons/fa';
import usdt from './usdt.png'
import eth from './eth.png'
import line from './line.png'


const DashHome = () => {
  return (
    <Container>
      <Title>Dashboard</Title>
      <First>
        <Circle><img src={line} alt='line'/></Circle>
        <Left>
          <Text>Current balance</Text>
          <Price>$0</Price>
          <RecHold>
            <Rec>
              <FaBitcoin style={{color: "gold", width: 30, height: 30, marginRight: "5px"}}/>
              0.00$
            </Rec>
            <Rec>
              <img src={usdt} alt='usdt'/>
              0.00$
            </Rec>
            <Rec>
              <img src={eth} alt='eth'/>
              0.00$
            </Rec>
            <Rec>
              <FaDollarSign style={{color: "gold", width: 30, height: 30}}/>
              0.00$
            </Rec>
          </RecHold>
        </Left>
      </First>
      <Next>
        <Dep>
          <One>
            <P>Deposited</P>
            <Price2>$0.00</Price2>
          </One>
          <Two>
            <Button1>Replenish</Button1>
            <Button2>Replenishment History</Button2>
          </Two>
        </Dep>
        <With>
        <One>
            <P>Withdrawal</P>
            <Price2>$0.00</Price2>
          </One>
          <Two>
            <Button1>Withdrawal</Button1>
            <Button2>Withdrawal History</Button2>
          </Two>
        </With>
      </Next>
      <Next2>
        <Dep2>
          <Topic>Financial Orders</Topic>
          <Mid>
            <ButHold>
            <H5>Last Deposit</H5>
            <BigBut>$ N/A</BigBut>
            </ButHold>
            <ButHold>
            <H5>Last Deposit</H5>
            <BigBut>$ N/A</BigBut>
            </ButHold>
          </Mid>
          <Last>
            <ButtonHold>
              <Button1>Create deposit</Button1>
              <Button2>Withdraw</Button2>
            </ButtonHold>
          </Last>
        </Dep2>
        <With2>
        <Topic>Earning Information</Topic>
          <Mid>
            <ButHold>
            <H5>Earned Total</H5>
            <BigBut>$0.00</BigBut>
            </ButHold>
            <ButHold>
            <H5>Active Deposits</H5>
            <BigBut>$0.00</BigBut>
            </ButHold>
          </Mid>
          <Last>
            <ButtonHold>
              <Button1>Earnings</Button1>
              <Button2>Your Deposits</Button2>
            </ButtonHold>
          </Last>
        </With2>
      </Next2>
    </Container>
  )
}

export default DashHome;

const Dep2 = styled.div`
background-color: #19244190;
width: 45%;
height: 90%;
border-radius: 0.5rem;
padding: 20px;
display: flex;
flex-direction: column;

@media Screen and (max-width: 768px){
flex-direction: column;
width: 100%;
align-items: center;
margin-bottom: 20px;
}
`;
const Mid = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const ButtonHold = styled.div`
width: 80%;
margin-right: 30px;

@media Screen and (max-width: 768px){
  width: 55%;
}
`;
const H5 = styled.div`
font-size: 15px;
font-weight: 500;
color: whitesmoke;
`;
const BigBut = styled.div`
width: 80%;
text-align: center;
padding: 10px;
background-color: whitesmoke;
color: #192441;
border-radius: 0.3rem;
margin-top: 10px;
font-size: 20px;
font-weight: 500;
`;
const ButHold = styled.div`
/* background-color: red; */
width: 45%;
margin: 30px 0;

`;
const Last = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
// const Butto = styled.div``;

const Container = styled.div`
width: 90%;
margin-left: 30px;
display: flex;
flex-direction: column;

`;
const Title = styled.div`
font-size: 40px;
color: whitesmoke;
font-weight: bold;
`;
const First = styled.div`
width: 100%;
height: 250px;
margin: 30px 0;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
  width: 100%;
  height: auto;
  flex-direction: column;
}
/* background-color: #233053; */
background-color: #19244190;
border-radius: 0.5rem;
padding: 20px 0;

@media Screen and (max-width: 768px){
  flex-direction: column;
}
`;
const Circle = styled.div`
width :250px;
height: 250px;
border-radius: 50%;
background-color: #394565;
display: flex;
justify-content: center;
/* border: 1px solid red; */
`;
const Left = styled.div`
width: 65%;
display: flex;
flex-direction: column;

`;
const Text = styled.div`
color: whitesmoke;
font-size: 17px;
font-weight: bold;
`;
const Price = styled.div`
color: green;
font-size: 25px;
font-weight: bold;
`;
const RecHold = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Rec = styled.div`
color: whitesmoke;
width: 20%;
background-color: #192441;
padding: 10px 5px;
border-radius: 0.3rem;
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 30px;
  height: 30px;
  margin-right: 5px;
}
`;

const Next2 = styled.div`
width: 103.5%;
height: 300px;
margin: 30px 0;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: red; */
padding: 20px 10px;

@media Screen and (max-width: 768px){
flex-direction: column;
height: auto;
margin-top: 170px;
padding: 0;
width: 100%;

}
`;
const Next = styled.div`
width: 103.5%;
height: 200px;
margin: 30px 0;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: red; */
padding: 20px 0;

@media Screen and (max-width: 768px){
flex-direction: column;
width: 100%;
}
@media Screen and (max-width: 425px){
flex-direction: column;
width: 90%;
}
`;
const Dep = styled.div`
background-color: #19244190;
width: 45%;
height: 90%;
border-radius: 0.5rem;
padding: 20px;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
flex-direction: column;
width: 100%;
align-items: center;
margin-bottom: 20px;
}

`;
const One= styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* background-color: red; */

`;
const P= styled.div`
color: whitesmoke;
font-size:20px;
font-weight: bold;

`;
const Price2= styled.div`
color: whitesmoke;
font-size:20px;
font-weight: bold;

`;
const Two= styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* background-color: red; */

`;
const Button1= styled.div`
background-color: #FF4D4D;
width: 100%;
padding: 10px;
border-radius: 0.3rem;
display: flex;
justify-content: center;
align-items: center;
box-shadow: rgba(253, 254, 255, 0.3) 0px 1px 2px 0px, rgba(255, 255, 255, 0.15) 0px 1px 3px 1px;
margin-bottom: 5px;
color: whitesmoke;
cursor: pointer;


`;
const Button2= styled.div`
width: 100%;
padding: 10px;
border-radius: 0.3rem;
display: flex;
justify-content: center;
align-items: center;
margin-top: 5px;
border: 1px solid #FF4D4D;
color: whitesmoke;
cursor: pointer;
`;

const With2 = styled.div`
background-color: #19244190;
width: 45%;
height: 90%;
border-radius: 0.5rem;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;

@media Screen and (max-width: 768px){
flex-direction: column;
width: 100%;
align-items: center;
margin-bottom: 20px;
}
`;
const With = styled.div`
background-color: #19244190;
width: 45%;
height: 90%;
border-radius: 0.5rem;
padding: 20px;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
flex-direction: column;
width: 100%;
align-items: center;
margin-bottom: 20px;
}
`;

const Topic = styled.div`
font-size: 18px;
font-weight: 500;
color: whitesmoke;
`;

