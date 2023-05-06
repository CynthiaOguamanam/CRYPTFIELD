import React from 'react';
import styled from 'styled-components';


const Sendrequest = () => {
  return (
    <Container>
        <Wrapper>
            <H1>Ask a Question</H1>
        <Notice>
                <P style={{fontWeight:"bold"}}>*Important Notice</P>
                <PP>We reserve the right to make any changes to the existing affiliate program if necessary. In this case, the project participants will be notified in<br/> the news section or by mass mailing to the e-mails specified during registration.</PP>
            </Notice>
            <Form onSubmit='submit'>
                <Top>
                    <InputHold>
                        <Title>Choose a support department</Title>
                        <Select>
                            <option value="technical issue">Technical issue</option>
                            <option value="Assistance and collaboration issue">Assistance and collaboration issue</option>
                            <option value="Account issue">Account issue</option>
                            <option value="Other questions">Other questions</option>
                        </Select>
                    </InputHold>
                    <InputHold>
                        <Title>Your email for replay</Title>
                        <Input type='email' placeholder='email'/>
                    </InputHold>
                </Top>
                <Middle>
                    <InputHold>
                        <Title>Appeal header</Title>
                        <Input placeholder='About my order'/>
                    </InputHold>
                    <InputHold>
                        <Title>Your username</Title>
                        <Input placeholder='username'/>
                    </InputHold>
                </Middle>
                    <InputHold2>
                        <Title>Write your question</Title>
                        <Input2 placeholder='describe your question / issue'/>
                    </InputHold2>
                    <Button>Send</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Sendrequest;

const Container = styled.div`
width: 100%;
height: auto;
background-color: whitesmoke;
display: flex;
justify-content: center;
align-items: center;
padding: 20px 0;
`;
const Wrapper = styled.div`
width: 80%;
height: 100%;
padding: 100px 0;
display: flex;
flex-direction: column;
/* align-items: center; */

@media Screen and (max-width:425px){
    text-align: center;
}
`;
const H1 = styled.div`
font-size: 35px;
font-weight: 500;
color:  #463A5C;
margin: 15px 0;

@media Screen and (max-width: 768px){
    font-size: 30px;
}
`;

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;

`;
const Notice = styled.div`
width: 96%;
border-radius: 0.7rem;
background-color: #463A5C;
color: white;
padding: 40px 30px;
margin: 30px 0;

@media Screen and (max-width: 768px){
    width: 90%;
}
`;
const P = styled.div`
font-size: 16px;
`;
const PP = styled.div``;
const Top = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    flex-direction: column;
}
`;
const InputHold = styled.div`
width: 40%;
display: flex;
flex-direction: column;
margin: 10px 0;
@media Screen and (max-width: 768px){
    width: 100%;
    align-items: flex-start;
}

`;
const InputHold2 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 10px 0;
@media Screen and (max-width: 768px){
    width: 100%;
    align-items: flex-start;
}

`;
const Title = styled.div`
font-size: 17px;
font-weight: 500;
color: #463A5C;
`;
const Select = styled.select`
padding: 15px 5px;
outline: none;
border-radius: 0.4rem;
border: 1px solid #3B314E;
color: grey;

@media Screen and (max-width: 768px){
    margin: 10px 0;
    width: 100%;
}
`;
const Input = styled.input`
padding: 15px 0 15px 10px;
border-radius: 0.4rem;
outline: none;
border: 1px solid #3B314E;
color: grey;

@media Screen and (max-width: 768px){
    margin: 10px 0;
    width: 100%;
}
`;
const Input2 = styled.input`
padding: 20px 0 300px 10px;
border-radius: 0.4rem;
outline: none;
border: 1px solid #3B314E;
color: grey;
width:  100%;
@media Screen and (max-width: 768px){
    margin: 10px 0;
    width: 100%;
}

`;
const Middle = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    flex-direction: column;
}
`;
const Button = styled.button`
color: white;
font-weight: bold;
background-color: #FF4D4D;
border-radius: 5px;
cursor: pointer;
padding: 0.5rem 2rem;
text-align: center;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
border: none;
outline: none;
width: 200px;
height: 50px;
:hover{
    transition: all 400ms;
    cursor: pointer;
}

@media Screen and (max-width: 425px){
    margin: 10px 0;
    width: 100%;
}
`;

