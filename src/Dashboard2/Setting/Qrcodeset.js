import React from 'react'
import styled from 'styled-components'
import {AiFillHome,} from 'react-icons/ai'
import {BsQrCode} from 'react-icons/bs'
// import usdt from './
import bgbg from './bgbg.jpg';

const NewDashboard = () => {
  return (
    <Container>
        <Wrapper>
            <Hold2>
                <Div>
                    <H1>Two factor authentication</H1>
                    <Holder>
                        <Icon />
                        <Pagename>--update account</Pagename>
                    </Holder>
                </Div>
            </Hold2>
        </Wrapper>
        <Wrapper2>
            <Hold>
            <Title>Login Security</Title>
            <InputHold>
            <Left1>
                <Span>1. Install google authenticator on your device</Span>
                <Span>2. Your secret code is <span style={{fontSize: "16px", fontWeight: "500"}}>ytz2gg30uA1Qpfsaz</span></Span>
            </Left1>
            <Left1>
            <Qrcodee/>
            </Left1>
            <Left1>
                <Span>3. Please enter two factor token from google authenticator to verify correct setup</Span>
            </Left1>
            <Input2 type='number'/>
          <Button2>Enable</Button2>
          </InputHold>
            </Hold>
            <Hold>
            <Title>Login Security</Title>
            <InputHold>
            <Left1>
                <Span>Detect IP Address Change Sensitivity</Span>
            </Left1>
            <InHold>
                <Input type="checkbox"/>
                <Span>Disabled</Span>
            </InHold>
            <InHold>
                <Input type="checkbox"/>
                <Span>Medium</Span>
            </InHold>
            <InHold>
                <Input type="checkbox"/>
                <Span>High</Span>
            </InHold>
            <InHold>
                <Input type="checkbox"/>
                <Span>Paranoic</Span>
            </InHold>
                <Left1>
            <Span>Detect browser changes</Span>
                </Left1>
            <InHold>
                <Input type="checkbox"/>
                <Span>Paranoic</Span>
            </InHold>
            <InHold>
                <Input type="checkbox"/>
                <Span>Paranoic</Span>
            </InHold>
          <Button2>Set</Button2>
          </InputHold>
            </Hold>
        </Wrapper2>
    </Container>
  )
}

export default NewDashboard;

const Qrcodee = styled(BsQrCode)`
width: 300px;
height: 300px;
color: whitesmoke;

`;

const Span = styled.div`
color: whitesmoke;
font-size: 17px;
font-weight: 500;

`;
const InHold = styled.div`
width: auto;
/* background-color: red; */
display: flex;
justify-content: space-between;
align-items: center;
`;
const Input = styled.input`
`;
const Input2 = styled.input`
padding: 10px 30px;
border: 1.5px solid #FF4D4D;
outline: none;
background: none;
border-radius: 4px;
color: whitesmoke;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
    flex-direction:column;
    /* justify-content: space-around; */
    align-items: flex-start;
    border-radius: 0.7rem;
    padding: 15px;
    margin :10px 0;
@media Screen and (max-width: 768px){
    width: 100%;
    display: flex;
    border-radius: 0.7rem;
    margin :10px 0;
}
`;
const Left1 = styled.div`
    width: 86%;
    display: flex;
    flex-direction :column;
    margin: 15px 0;

@media Screen and (max-width: 768px){
    width: 92%;
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
    font-size: 20px;
    font-weight: 500;
    color: whitesmoke;
}
`;
const Button2 = styled.div`
width: 20%;
height: 30px;
padding: 7px;
background-color: #FF4D4D;
border-radius: 0.4rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 15px;
font-weight: 500;
color: white;
cursor: pointer;
margin-top: 15px;
@media Screen and (max-width: 768px){
  width: 96%;
}
`;


const Wrapper2 = styled.div`
width: 95%;
height: auto;
display: flex;
justify-content: space-around;
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
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: flex-start;
@media Screen and (max-width: 768px){
    width :80%;
    height: 100%;
    padding: 20px 0;
    margin-right: 30px;
    margin-top: 60px


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