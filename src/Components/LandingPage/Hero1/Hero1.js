import React, { useEffect } from 'react';
import styled from 'styled-components'
import {HiArrowDown} from 'react-icons/hi'
import green from '../../Assets/green.png'
import blue from '../../Assets/blue.png'
import yellow from '../../Assets/yellow.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';



const Hero1 = () => {

    useEffect(()=>{
        AOS.init({duration:2000})
    }, []);


  return (
    <Container>
        <Wrapper>
            <Left>
                <Green data-aos='fade-down' src={green} alt='green_image'/>
                <Text>
                    <H66>SWIFT CRYPTO TRADE</H66>
                    <HiArrowDown style={{color: "#42385A"}}/>
                </Text>
                <Bottom>
                    <Yellow data-aos='fade-right' src={yellow} alt='yellow_image'/>
                    <Blue data-aos='fade-left' src={blue} alt='blue_image'/>
                </Bottom>
            </Left>
            <Right>
                <H1>CRYPT FIELD</H1>
                <H4>CRYPTFIELD CRYPTO TRADE PLATFORM</H4>
                <H6>Our platform is suitable for all traders, both beginners, and <br/> professionals. Triangular or triple arbitrage is the result of a price<br/> difference between the three currencies when exchange rates do not<br/> match. Such discrepancies are common in the cryptocurrency market.<br/> Using our software and powerful servers, we make arbitrage <br/>transactions within 1 exchange almost in real-time. <br/>
                We are committed to providing all our investors with exceptional service while <br/> offering our team the best training.
                </H6>
                <ButtonHold>
                    <Started to='/register'>Get Started</Started>
                    <Readmore to='/support'>Read More</Readmore>
                </ButtonHold>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Hero1;

const ButtonHold = styled.div`
width: 45%;
height: auto;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;

@media Screen and (max-width: 1024px){
width: 70%;
}
@media Screen and (max-width: 425px){
width: 100%;
}
/* background-color: green; */
`;
const Started = styled(Link)`
background-color: #FF4D4D;
padding: 0.5rem 1.3rem;
color: white;
border-radius: 0.3rem;
box-shadow: #FF4D4D 0px 2px 5px 0px, #FF4D4D 0px 1px 1px 0px;
cursor: pointer;
text-decoration: none;
`;
const Readmore = styled(Link)`
color: #42385A;
/* border: 1px solid #FF4D4D; */
padding: 0.5rem 1.5rem;
text-align: center;
border-radius: 0.3rem;
/* box-shadow: #FF4D4D 0px 0px 0.25em, #FF4D4D 0px 0.25em 1em; */
box-shadow: #FF4D4D 0px -0.5px 3px 0px, #FF4D4D 0px 1px 2px 0px;
cursor: pointer;
text-decoration: none;

`;

const Container = styled.div`
width:  100%;
height: 80vh;
background-color: #fff;
/* #37436C */
display: flex;
justify-content: center;
margin-top: 70px;

@media Screen and (max-width: 1024px){
height: auto;
padding-bottom: 20px;
}
`;
const Wrapper = styled.div`
width: 80%;
height: 90%;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
    width: 90%;
}
`;
const Left = styled.div`
width: 45%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media Screen and (max-width: 768px){
width: 80%;
margin-top: 30px;
}
@media Screen and (max-width: 425px){
width: 100%;
margin-top: 30px;
}
`;
const Green = styled.img`
width: 12rem;
height: 12rem;
margin-bottom: 50px;

@media Screen and (max-width: 1024px){
width: 8rem;
height: 8rem;
}
@media Screen and (max-width: 375px){
width: 6rem;
height: 6rem;
}

`;
const Yellow = styled.img`
width: 12rem;
height: 12rem;

@media Screen and (max-width: 1024px){
width: 8rem;
height: 8rem;
}
@media Screen and (max-width: 375px){
width: 6rem;
height: 6rem;
}
`;
const Blue = styled.img`
width: 12rem;
height: 12rem;

@media Screen and (max-width: 1024px){
width: 8rem;
height: 8rem;
}
@media Screen and (max-width: 375px){
width: 6rem;
height: 6rem;
}
`;
const Text = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
margin-top: 50px;
text-align: center;
width: 8%;
height: 100px;
justify-content: space-between;

@media Screen and (max-width: 768px){
    width: 20%;
}
@media Screen and (max-width: 425px){
    width: 30%;
}
@media Screen and (max-width: 375px){
width: 40%;
}
`;
const Bottom = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Right = styled.div`
width: 50%;
font-family: 'Montserrat' 'san-serif';
margin-top: 80px;

@media Screen and (max-width: 768px){
    width: 90%;
}
`;
const H1 = styled.div`
font-size: 55px;
font-weight: bold;
color: #42385A;

`;
const H4 = styled.div`
font-size: 23px;
color: #42385A;
margin: 10px 0 0 0;
`;
const H6 = styled.div`
font-size: 16px;
color: #42385A;
margin: 15px 0 0 0;
`;
const H66 = styled.div`
font-size: 18px;
color: #42385A;
margin: 15px 0 0 0;

`;
/* const Right = styled.div``;
const Right = styled.div``;
const Right = styled.div``; */
