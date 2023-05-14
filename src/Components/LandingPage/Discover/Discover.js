import React, { useEffect } from 'react';
import styled from 'styled-components';
import pic from './hm.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Discover = () =>{

    useEffect(()=>{
        AOS.init({duration:2000})
      }, []);

    return(
        <Container>
            <Wrapper>
                 <Right data-aos="fade-down">
                    <H1>
                    OUR ADVISORS CONNECT YOUR FINANCES TO WHAT YOU WANT OUT OF LIFE AND CREATE A PLAN DESIGNED TO MAKE IT HAPPEN, REVEALING POSSIBILITIES WHILE PROTECTING YOU FROM THE UNEXPECTED—TODAY AND EVERY DAY AFTER.
                    </H1>
                    <Line></Line>
                    <P>A personalized plan that brings all aspects of your financial life together A strategic mix of insurance and investments working together for your goals Your go-to financial expert who helps keep your big picture, and dreams, in focus</P>
                    <H5>Multi-award winner</H5>
                    <P>We’ve been consistently recognised by our industry and have won the highest accolades for our products, platform and service.</P>
                    <Button>About Us</Button>
                </Right>
                <Left>
                    {/* <img src={pic} alt='rectangle'/> */}
                    <Rec></Rec>
                </Left>
            </Wrapper>
        </Container>
    )
};

export default Discover;

const Container = styled.div`
/* background: linear-gradient(120deg, #192441,#463A5C); */
width: 100%;
height: 80vh;
/* height: auto; */
display: flex;
justify-content: center;
align-items: center;
padding: 30px 0;
background-color: #111D32;

@media Screen and (max-width: 1280px){
    height: auto;
    width: 100%;

}
`;
const Wrapper = styled.div`
width: 75%;
height: 95%;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 1024px){
    width: 100%;
    align-items: center;
    flex-direction: column;
    /* flex-wrap:wrap; */
    /* background-color: red; */
}

@media Screen and (max-width: 768px){
    height: auto;
}
@media Screen and (max-width: 425px){
    width: 100%;
}

`;
const Left = styled.div`
width: 45%;
height:100%;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 1280px){
    width: 75%;
    position: relative;
    display: flex;
    justify-content: center;
    /* background-color: red; */
    img{
        display: none;
    /* right: 800px; */
    left:0;
    }
};

@media Screen and (max-width: 768px){
    width: 90%;
    justify-content: center;

    img{
    display: none
    }
};

@media Screen and (max-width: 425px){
    right: 50px;
    width: 100%;
    height: 50%;
    /* display: none; */
}

`;
const Right = styled.div`
width: 50%;
height: auto;
display:flex;
flex-direction: column;

@media Screen and (max-width: 1280px){
    width: 45%;
    margin: 50px 0;
}
@media Screen and (max-width: 768px){
    width: 45%;
    margin-top: 40px;
}
@media Screen and (max-width: 500px){
    width: 90%;
    margin-top: 40px;
}
`;
const Rec = styled.div`
height: 520px;
background-color: #015FC9;
border-radius: 0.5rem;
margin-top: 20px;
/* margin-left: 150px; */
width:80%;
background-image: url(${pic});
background-repeat: no-repeat;
background-size: cover;
background-position: center;

/* @media Screen and (max-width: 1280px){
    width:80%;
    background-image: url(${pic});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    position: relative;
} */
@media Screen and (max-width: 768px){
    width:70%;
    margin-left: 85px;
}
@media Screen and (max-width: 425px){
    width: 100%;
}
`;
const H1 = styled.div`
font-size: 20px;
font-weight: 500;
color: silver;
`;
const H5 = styled.div`
font-size: 17px;
font-weight: 500;
margin: 10px 0;
color: silver;

`;
const Line = styled.div`
width: 100%;
height :1px;
background-color :#015FC9;
margin:30px 0;

`;
const P = styled.div`
margin: 20px 0;
color: silver;
`;

const Button = styled.div`
background-color: #015FC9;
width: 30%;
padding: 0.8rem 0.2rem;
text-align: center;
color: white;
border-radius: 0.5rem;
font-size: 17px;
font-weight: 500;
margin-top: 2rem;
cursor: pointer;
transition: all 400ms;
:hover{
    background: none;
    transition: background-color 1s;
    border: 1px solid silver;
}

@media Screen and (max-width: 1024px){}
`;