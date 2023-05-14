import React from 'react'
              // <P>Account Name</P>
import { MainContainer, 
    H1,
    DivContainer,
    Name,
    P,
    P1,
    Date,
    P2,
    P3,
    Input,
    InputDiv,
    Label,
    ButtonDiv,
    Button,
    Date2
 } from './StyledSetting';

const Setting = () => {
  return (
    <MainContainer>
        <H1>Edit Account</H1>
        <DivContainer>
           <Name>
              <P>Account Name:</P>
              <P1>Brewer</P1>
           </Name>
           <Date2>
              <P2>Registration Date:</P2>
              <P3>May-5-2023 09:53:15 AM</P3>
           </Date2>
           <InputDiv>
             <Label>Your Full Name:</Label>
             <Input type='text'/>
           </InputDiv>
           <Date>
           <Label>New Password:</Label>
             <Input type='password'/>
           </Date>
           <InputDiv>
             <Label>Re-Type Password:</Label>
             <Input type='password'/>
           </InputDiv>
           <Date>
           <Label>Your Bitcoin Address:</Label>
             <Input type='text'/>
           </Date>
           <InputDiv>
             <Label>Your E-mail Address:</Label>
             <Input type='email'/>
           </InputDiv>
           <ButtonDiv>
               <Button>Change Action Data</Button>
           </ButtonDiv>
        </DivContainer>
    </MainContainer>
  )
}

export default Setting;