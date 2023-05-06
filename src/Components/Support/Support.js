import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {FaQuestion, FaMailBulk,FaTelegramPlane, FaGlobe} from 'react-icons/fa'

const Support = () => {
  return (
    <Container>
        <Wrapper>
            <H1>Client support</H1>
            <CardHold>
                <Card>
                    <Icon/>
                    <Left>
                        <Title>FAQ</Title>
                        <P>If you have questions, you can search for the<br/> answer here or ask</P>
                        <Readmore to='/faqdet'>Read more</Readmore>
                    </Left>
                </Card>
                <Card>
                <Icon2/>
                    <Left>
                        <Title>Send request</Title>
                        <P>Can't find a solution to your problem?<br/> Contact cryptfield.com Client Support</P>
                        <Readmore to='/send_request'>Read more</Readmore>
                    </Left>
                </Card>
            </CardHold>
            <CardHold>
                <Card>
                <Icon3/>
                    <Left>
                        <Title>Beginner's Guide</Title>
                        <P>Everything you need for a successful<br/> start. Start earning now</P>
                        <Readmore to='https://gmail.com'>Read more</Readmore>
                    </Left>
                </Card>
                <Card>
                <Icon4/>
                    <Left>
                        <Title>Join the community</Title>
                        <P>You can find a lot of useful information on<br/> our social networks Telegram, Facebook and<br/> others</P>
                        <Readmore to='/faqdet'>Read more</Readmore>
                    </Left>
                </Card>
            </CardHold>
        </Wrapper>
    </Container>
  )
};

export default Support;

const Container = styled.div`
width: 100%;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
margin-top: 70px;
padding: 30px 0;
background-color: whitesmoke;

@media Screen and (max-width: 768px){
    height: auto;
}
`;
const Wrapper = styled.div`
width:  80%;
height: 100%;
display: flex;
flex-direction: column;

`;
const H1 = styled.div`
font-size: 35px;
font-weight: bold;
color: #463A5C;
`;
const CardHold = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 20px 0;

@media Screen and (max-width: 1024px){
    flex-direction: column;
    margin: 20px 0;
}
`;
const Card = styled.div`
box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
width: 40%;
height: 150px;
padding: 20px 20px;
border-radius: 0.7rem;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 1024px){
    width: 100%;
    justify-content: flex-start;
    margin: 20px 0;
    height: auto;
}
`;

const Icon = styled(FaQuestion)`
width: 50px;
height: 50px;
border-radius: 0.7rem;
background-color: lightgreen;
padding: 30px 30px;
color: #463A5C;
@media Screen and (max-width: 1024px){
    margin-right: 20px;
}
@media Screen and (max-width: 375px){
    height: 20px;
}
`;
const Icon2 = styled(FaMailBulk)`
width: 50px;
height: 50px;
border-radius: 0.7rem;
background-color: #FFEE53;
padding: 30px 30px;
color: #463A5C;
@media Screen and (max-width: 1024px){
    margin-right: 20px;
}
@media Screen and (max-width: 375px){
    height: 20px;
}
`;
const Icon3 = styled(FaTelegramPlane)`
width: 50px;
height: 50px;
border-radius: 0.7rem;
background-color: #FFEE53;
padding: 30px 30px;
color: #463A5C;
@media Screen and (max-width: 1024px){
    margin-right: 20px;
}
@media Screen and (max-width: 375px){
    height: 20px;
}
`;
const Icon4 = styled(FaGlobe)`
width: 50px;
height: 50px;
border-radius: 0.7rem;
background-color: lightgreen;
padding: 30px 30px;
color: #463A5C;

@media Screen and (max-width: 1024px){
    margin-right: 20px;
}
@media Screen and (max-width: 375px){
    height: 20px;
}
`;
const Left = styled.div``;
const Title = styled.div`
font-size: 20px;
font-weight: bold;
color: #463A5C;
margin-bottom: 10px;
`;
const P = styled.div`
color: #463A5C;
margin-bottom: 10px;
`;
const Readmore = styled(Link)`
text-decoration: none;
color: #FF4D4D;
transition: all 1s;

:hover{
    text-decoration: 1px underline #FF4D4D;
    transition: all 1s;
}
`;
