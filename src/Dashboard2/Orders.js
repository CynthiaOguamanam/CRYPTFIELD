import React from 'react';
import styled from 'styled-components';

const Orders = () =>{
  return(
    <Container>
      <Wrapper>
        <H1>Your deposits</H1>
        <Hold>
          <Bigbutton>
            Total: $0.00
          </Bigbutton>
          <One>
            <First>Starter</First>
            <Second>
              <Wrap>
                <h4>Plan</h4>
                <Div>
                  <div>Amount Spent ($)</div>
                  <div>Profit (%)</div>
                </Div>
              </Wrap>
            </Second>
          </One>
          <Two>No deposits for this plan</Two>
          <Three>
            <div style={{textAlign:"center", margin:"10px", color: "whitesmoke", fontWeight: "bold", fontSize: "16px"}}>Silver</div>
            <F2>
            <Wrap>
                <h4>Plan</h4>
                <Div>
                  <div>Amount Spent ($)</div>
                  <div>Profit (%)</div>
                </Div>
              </Wrap>
            </F2>
            <F3>
              <F2Div>
              <Left>Silver</Left>
              <Right>
              <Line></Line>
                <div>$10000.00 - $50000.00</div>
                <Line></Line>
                <div>330.00</div>
              </Right>
              </F2Div>
            </F3>
          </Three>
          <Two style={{marginTop: "20px"}}>No deposits for this plan</Two>
        </Hold>
      </Wrapper>
    </Container>
  )
};

export default Orders;

const Line = styled.div`
width: 1px;
background-color: grey;
height: 30px;

@media Screen and (max-width: 768px){
  display: none;
}
`;


const Left = styled.div`
padding-left :15px;

`;
const Right = styled.div`
padding-right :20px;
width: 34%;
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;

@media Screen and (max-width: 768px){
  width: 50%;
}
`;
const F2Div = styled.div`
width: 61.5%;
display: Flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
  width: 100%;
}
`;
const F3 = styled.div`
/* margin: 5px; */
font-size: 16px;
font-weight: bold;
color: whitesmoke;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
padding: 10px;


h4{
  color: whitesmoke;
  font-weight: bold;
  font-size: 16px;
}

`;

const F2 = styled.div`
width: 100%;
height: 40px;
background-color: #FF4D4D;
display: flex;
justify-content: flex-end;


`;
const Container = styled.div`
width: 100%;
height: auto;
background-color: #111C31;
display: flex;
justify-content: center;
align-items: center;
/* border-radius: 6px; */

`;
const Wrap = styled.div`
width: 60%;
height: 95%;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
  width: 100%;
  padding-left: 10px;
}

h4{
  color: whitesmoke;
  font-weight: bold;
  font-size: 16px;
}
`;
const Div = styled.div`
width :35%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding-right: 15px;

div{
  color: whitesmoke;
  font-weight: bold;
  font-size: 16px;
}
`;
const Wrapper = styled.div`
width: 100%;
height: 100%;
/* background-color: red; */
display :flex;
flex-direction: column;
padding: 10px;

`;
const One = styled.div`
width: 95%;
/* background-color: #192441; */
padding: 20px 25px;
margin-top: 30px;
display: flex;
flex-direction: column;
border-radius: 10px;


`;
const First = styled.div`
width: 100%;
height: 30px;
background-color: #192441;
border-radius: 3px 3px 0 0;
border-top: 1px solid grey;
border-left: 1px solid grey;
border-right: 1px solid grey;
color: whitesmoke;
display: flex;
justify-content: center;
align-items: center;
padding: 5px 0;
font-weight: bold;
font-size: 16px;
`; 
const Second = styled.div`
width: 100%;
height: 40px;
background-color: #FF4D4D;
border-radius: 0 0 3px 3px;
display: flex;
justify-content: flex-end;
align-items: center;
border-left: 1px solid grey;
border-right: 1px solid grey;
border-bottom: 1px solid grey;
`; 
const Two = styled.div`
width: 94%;
height: 30px;
background-color: #192441;
border-radius: 3px 3px 0 0;
margin-left: 23px;
padding: 10px 0;
color: whitesmoke;
padding-left: 15px;
font-weight: bold;
font-size: 16px;
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid grey;


@media Screen and (max-width: 768px){
width: 91%;
}

`;
const Three = styled.div`
width: 95.4%;
height: auto;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
background-color: #192441;
margin-left: 23px;
margin-top: 20px;
border-radius: 3px;
border: 1px solid grey;
`;
const H1 = styled.div`
font-size: 40px;
/* font-weight: bold; */
color: whitesmoke;
margin-bottom: 30px;
`;
const Bigbutton = styled.div`
width: 250px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
padding: 15px;
border-radius: 8px;
font-size: 20px;
font-weight: bold;
`;
const Hold = styled.div`
width: 95%;
background-color: #233053;
height: auto;
display: flex;
flex-direction: column;
padding: 20px 20px 20px 10px;
border-radius: 10px;

@media Screen and (max-width: 768px){
  width: 90%;
}

`;


