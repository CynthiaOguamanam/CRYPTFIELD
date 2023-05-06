import React, { useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";
import logo from '../Assets/realogo.png'
import { AiFillMail, AiOutlineCopyrightCircle, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaBitcoin, FaLocationArrow } from 'react-icons/fa';
import Imgusdt from './usdt.png'
import eth from './eth.png'

const Footer = () => {

    useEffect(()=>{
        window.scroll({
            top: 0,
            left: 100,
            behavior: "smooth"
        })
    }, [])


  return (
    <Container>
        <Wrapper>
        <First>
            <Logo to='/' src={logo}/>
            <P style={{textDecoration:"none"}}>We want you to not just Trade in the<br/> world’s financial markets, but also<br/> with a simple and user friendly online<br/> platform.</P>
        </First>
        <Second>
            <Topic>USEFUL LINKS</Topic>
            <P to='/'>Home</P>
            <P to='/about_us'>About Us</P>
            <P to='/faq'>FAQ</P>
            <P to='/affiliate_program'>Affilliate Program</P>
        </Second>
        <Second>
            <Topic>MARKETS</Topic>
            <P to='/market'>Forex</P>
            <P to='/market'>Indices</P>
            <P to='/market'>Commodities</P>
            <P to='/market'>Market</P>
        </Second>
        <Second>
            <Topic>Contact</Topic>
            <P to='https://gmail.com'><AiFillMail/> info@cryptfield.com</P>
            <P><AiOutlinePhone/> +17600023162</P>
            <P to='/support'><AiOutlineMail/> support@cryptfield.com</P>
            <P to='/https://googlemap.com'><FaLocationArrow/> Georgia CA 12500</P>
        </Second>
            <ScrollToTop style={{
                    width: 70, color: "white", height: 50, border: "1px solid grey", background:"#FF4D4D", opacity: "80%",
                }} smooth/> 
        </Wrapper>
        <Line></Line>
        <Last>
            <Text>Copyright <Icon/>2023 Cryptfield. All Rights Reserved.</Text>
            <Logs>
                <FaBitcoin style={{width: 43, height: 43, color: "#F7931A"}}/>
                <Img src={eth} alt='eth'/>
                <Img src={Imgusdt} alt="usdt"/>
            </Logs>
        </Last>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
width: 100%;
height: 60vh;
border-top: 1px solid grey;
padding-top: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media Screen and (max-width: 425px){
    height: auto;
}

`;
const Icon = styled(AiOutlineCopyrightCircle)`
@media Screen and (max-width: 375px){
    display: none;
}
`;
const Wrapper = styled.div`
width: 80%;
height: 90%;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width:768px){
    width: 90%;
}
@media Screen and (max-width:425px){
    flex-direction: column;
    align-items: center;
}
`;
const First = styled.div`
width: 24%;
display: flex;
flex-direction: column;


@media Screen and (max-width:425px){
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
}

`;
const Second = styled.div`
width: 24%;
display: flex;
flex-direction: column;
height: auto;

@media Screen and (max-width:425px){
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 25px 0;
    height: auto;
}
`;
const Topic = styled.div`
font-size: 23px;
font-weight: 500;
margin-bottom: 10px;
cursor: pointer;
transition: all 1s;

:hover{
    color: grey;
    text-decoration: 1px underline grey;
    transition: all 1s;
};


@media Screen and (max-width:768px){
    font-size: 18px;
}
`;
const P = styled(Link)`
color: grey;
text-decoration: none;
:hover{
    text-decoration: 1px underline grey;
}
`;
const Img = styled.img`
width: 40px;
height: 40px;
`;
const Logo = styled(Link)`
width: 75px;
height: 75px;
`;
const Logs = styled.div`

`;
const Last = styled.div`
width: 80%;
display: flex;
justify-content: space-between;

@media Screen and (max-width:425px){
    width: 90%;
    flex-direction: column;
    align-items: center;
    height: auto;
}
`;
const Text = styled.div`
width: auto;
display: flex;
justify-content: space-between;
align-items: center;

@media Sreen and (max-width: 375px){
}
`;
const Line = styled.div`
width: 100%;
height: 1px;
margin: 20px 0;
background-color: silver;
`;
