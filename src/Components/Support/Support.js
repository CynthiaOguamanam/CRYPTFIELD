import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {FaQuestion, FaMailBulk,FaTelegramPlane, FaGlobe} from 'react-icons/fa';
import AOS from 'aos'
import 'aos/dist/aos.css';
import slider from './slider.jpg'

const Support = () => {

    useEffect(()=>{
        AOS.init({duration:2000})
    }, []);

  return (
    <Container>
        <Holder>
        <Wrapper>
            <H1 data-aos="fade-down">Client support</H1>
            <CardHold>
                <Card>
                    <Icon/>
                    <Left>
                        <Title data-aos="fade-down">FAQ</Title>
                        <P data-aos="fade-down">If you have questions, you can search for the<br/> answer here or ask</P>
                        <Readmore data-aos="fade-down" to='/faqdet'>Read more</Readmore>
                    </Left>
                </Card>
                <Card>
                <Icon2/>
                    <Left>
                        <Title data-aos="fade-down">Send request</Title>
                        <P data-aos="fade-down">Can't find a solution to your problem?<br/> Contact cryptfield.com Client Support</P>
                        <Readmore data-aos="fade-down" to='/sendrequest'>Read more</Readmore>
                    </Left>
                </Card>
            </CardHold>
            <CardHold>
                <Card>
                <Icon3/>
                    <Left>
                        <Title data-aos="fade-down">Beginner's Guide</Title>
                        <P data-aos="fade-down">Everything you need for a successful<br/> start. Start earning now</P>
                        <Readmore data-aos="fade-down" to='https://gmail.com'>Read more</Readmore>
                    </Left>
                </Card>
                <Card>
                <Icon4/>
                    <Left>
                        <Title data-aos="fade-down">Join the community</Title>
                        <P data-aos="fade-down">You can find a lot of useful information on<br/> our social networks Telegram, Facebook and<br/> others</P>
                        <Readmore data-aos="fade-down" to='/faqdet'>Read more</Readmore>
                    </Left>
                </Card>
            </CardHold>
        </Wrapper>
        </Holder>
    </Container>
  )
};

export default Support;

const Holder = styled.div`
width: 100%;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #16243D;
opacity: 90%;
padding: 0px 0 30px 0;


@media Screen and (max-width: 1280px){
    height: auto;
}

`;


const Container = styled.div`
width: 100%;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
/* padding: 0px 0 30px 0; */
background-image: url(${slider});
background-size: cover;
background-position: center;
background-repeat: no-repeat;

@media Screen and (max-width: 1280px){
    height: auto;
}
`;
const Wrapper = styled.div`
width:  80%;
height: 100%;
display: flex;
flex-direction: column;

@media Screen and (max-width: 1280px){
    height: auto;
}

`;
const H1 = styled.div`
font-size: 35px;
font-weight: bold;
color: lightgrey;
margin-top: 40px
`;
const CardHold = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 60px 0 20px 0;

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
background-color: #101B2F;
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
background-color: #015FC9;
padding: 30px 30px;
color: lightgrey;
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
background-color: #FECD38;
padding: 30px 30px;
color: #463A5C;

@media Screen and (max-width: 1024px){
    margin-right: 10px;
}
@media Screen and (max-width: 375px){
    height: 20px;
}
`;
const Icon3 = styled(FaTelegramPlane)`
width: 50px;
height: 50px;
border-radius: 0.7rem;
background-color: #FECD38;
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
background-color: #015FC9;
padding: 30px 30px;
color: lightgrey;

@media Screen and (max-width: 1024px){
    margin-right: 20px;
}
@media Screen and (max-width: 375px){
    height: 20px;
}
`;
const Left = styled.div`
width : 70%;

`;
const Title = styled.div`
font-size: 20px;
font-weight: bold;
color: lightgrey;
margin-bottom: 10px;
`;
const P = styled.div`
color: lightgrey;
margin-bottom: 10px;
`;
const Readmore = styled(Link)`
text-decoration: none;
color: #F13A57;
transition: all 1s;

:hover{
    text-decoration: 1px underline #FF4D4D;
    transition: all 1s;
}
`;
