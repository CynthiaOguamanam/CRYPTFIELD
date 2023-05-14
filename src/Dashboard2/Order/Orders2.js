import React from 'react'
import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
// import usdt from './
import bgbg from './bgbg.jpg';

const Orders = () => {

  return (
    <Container>
        <Wrapper>
            <Hold2>
                <Div>
                    <H1>Arbitrage Offers</H1>
                    <Holder>
                        <Icon />
                        <Pagename>--Orders</Pagename>
                    </Holder>
                </Div>
            </Hold2>
        </Wrapper>
        <Wrapper2>
            <Hold>
            <InputHold>
            <Left1>
                <Title>Which order is better? Automated or manual?</Title>
              <Linkput>Let's investigate all the pros and cons of each of the orders!.
               </Linkput>
            </Left1>
          </InputHold>
        </Hold>
        </Wrapper2>
        <BottomDiv> 
          <One>
            <div>PLAN ID</div>
            <div>PLAN NAME</div>
          </One>
          <Line></Line>
          <Two>
            <div>Plan ID: 1</div>
            <div>Starter</div>
            <div>Calculate your profit</div>
            <Button2>Create Order</Button2>
          </Two>
          <Two>
            <div>Plan ID: 1</div>
            <div>Starter</div>
            <div>Calculate your profit</div>
            <Button2>Create Order</Button2>
          </Two>
          <Two>
            <div>Plan ID: 1</div>
            <div>Starter</div>
            <div>Calculate your profit</div>
            <Button2>Create Order</Button2>
          </Two>
        </BottomDiv>
    </Container>
  )
}

export default Orders;

const One = styled.div`
width: 35%;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 10px;
color: whitesmoke;
font-size: 17px;
font-weight: bold;
margin: 10px 0;

@media Screen and (max-width: 768px){
    /* flex-wrap: wrap; */
    width: 94%;
    display: none;
}

`;
const Two = styled.div`
width: 98%;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 10px;
color: whitesmoke;
font-size: 16px;
font-weight: bold;
margin: 10px 0;
flex-wrap: wrap;

@media Screen and (max-width: 768px){
    width: 96%;
}

`;
const Line = styled.div`
width: 98%;
height: 1px;
background-color: grey;
margin-left: 13px;
margin-top: 10px;
margin-bottom: 10px;

@media Screen and (max-width: 768px){
    width: 93%;
}

`;

export const BottomDiv = styled.div`
background-color: #16233C;
width: 96%;
height: 100%;
/* border: 1px solid silver; */
margin-bottom: 30px;
display: flex;
flex-direction: column;
/* align-items: center; */
border-radius: 10px;
padding: 20px 0;
display: flex;
flex-direction: column;

@media Screen and (max-width: 768px){
    height: auto;
    width: 83%;
    margin-top: 30px;
}
`;

// const Wrap2 = styled.div`
// /* width: 100%; */
// width: 97%;
// height: auto;
// padding: 40px 30px 40px 30px;
// /* border: 1px solid #FFCC40; */
// border-radius: 0.6rem;
// background-color: #111D32;
// display: flex;
// justify-content: space-between;
// align-items: center;
// /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
// margin-top: 40px;

// @media Screen and (max-width: 768px){
//     width: 100%;
//     background:none;
//     box-shadow: none;
//     padding: 0 0 0 0;

// }
// `;

// const LeftHold = styled.div`
// width: 50%;
// /* background-color: yellow; */
// height: 100%;
// display: flex;
// flex-direction: column;
// align-items:center;
// padding-right: 20px;

// @media Screen and (max-width: 768px){
//   width: 80%;
//   background-color: #16233C;
// }

// `;

// const Right2 = styled.div`
// color: whitesmoke;
// font-size: 15px;
// font-weight: 500;

// @media Screen and (max-width: 768px){
//   font-size: 17px;
// }
// `;

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
    border: 1px solid #E24E47;
    margin-top: 30px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

@media Screen and (max-width: 768px){
    color: whitesmoke;
    background-color: #111D32;
    height: 70px;
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border-radius: 0.3rem;
    /* margin-right: 40px; */
}

`;

// const InputHold2 = styled.div`
//   width: 100%;
//     /* background-color: #16233C; */
//     border-bottom: 1px solid grey;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   /* padding: 10px 0; */
//     /* border-radius: 0.7rem; */
//     padding: 20px;
//     margin :10px 0;
// @media Screen and (max-width: 768px){
//     /* display: block; */
//     width: 70%;
//     /* height: auto; */
//     /* min-height: max-content; */
//     /* background-color: #015FC9; */
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   /* padding: 10px 0; */
//     /* border-radius: 0.7rem; */
//     padding: 20px 47px;
//     margin :10px 0;
//     margin-left: 10px;

// }
// `;
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
    padding: 25px 0 25px 20px;
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
    padding: 30px 0 30px 20px;
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
// const Left = styled.div`
// /* display: none; */
// width: 70%;
//     display: flex;
//     flex-direction :column;
// @media Screen and (max-width: 768px){
//     /* display: block; */
//     width: 70%;
//     display: flex;
//     flex-direction :column;
// }
// `;
const Title = styled.div`
/* display: none; */
font-size: 15px;
    font-weight: 500;
    color: whitesmoke;
@media Screen and (max-width: 768px){
    /* display: block; */
    font-size: 20px;
    font-weight: 500;
    color: whitesmoke;
}
`;
const Button2 = styled.div`
width: auto;
height: 30px;
padding:10px 12px;
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

@media Screen and (max-width: 700px){
  margin-top: 10px;
  width: 100%;
  
}

`;
// const Price = styled.div`
// font-size: 20px;
//     font-weight: 500;
//     color: whitesmoke;
// @media Screen and (max-width: 768px){
//     /* display: block; */
//     font-size: 20px;
//     font-weight: 500;
//     color: whitesmoke;
// }
// `;

// const Right = styled.div`
//  width: 80px;
//     height: 80px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #111D32;
//     border-radius: 0.4rem;

// @media Screen and (max-width: 768px){
//     display: block;
//     width: 80px;
//     height: 80px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #111D32;
//     border-radius: 0.4rem;
// }
// `;

const Wrapper2 = styled.div`
width: 95%;
height: auto;
display: flex;
flex-direction: column;
/* justify-content: space-between; */
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
    width :100%;
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




