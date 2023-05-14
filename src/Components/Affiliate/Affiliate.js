import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AOS from 'aos'
import 'aos/dist/aos.css';

const Affiliate = () => {

    useEffect(()=>{
        AOS.init({duration:2000})
    }, []);

  return (
    <Container>
        <Wrapper>
            <H1 data-aos="fade-down">Premium-Cryptassets Affiliate program is more  <span style={{color: "#FFCC40"}}>profitable</span> with friends.</H1>
            <Advice>
                <Cont>
                    <Title data-aos="fade-down">Get your link</Title>
                    <P data-aos="fade-down">Register and receive your personal affiliate link</P>
                </Cont>
                <Cont>
                    <Title data-aos="fade-down">Invite friends</Title>
                    <P data-aos="fade-down">Invite your friends, send them your affiliate link<br/> or ID.</P>
                </Cont>
                <Cont>
                    <Title data-aos="fade-down">Get rewards</Title>
                    <P data-aos="fade-down">Get 20% commission in real-time from<br/> partners' profit.</P>
                </Cont>
            </Advice>
            <Next>
                <Title data-aos="fade-down">To display personal statistics, log in to your account or sign up</Title>
                <ButtonHold>
                    <Login to='/login'>Login</Login>
                    <Signup to='/register'>Sign up</Signup>
                </ButtonHold>
            </Next>
            <br/>
            <br/>
            <br/>
            <Bottom>
                <H1 data-aos="fade-down">Program details</H1>
                <Hold>
                <Content data-aos="fade-down">
                Affiliate program is available for all platform users. You receive an affiliate link immediately after registration and you can find it in your account.
                <br/>
                <br/>
                The platform has an account verificationsystem to identify multi-accounts created with the purpose of obtaining undue benefits. If multiple registrations are detected, these accounts will be blocked without the right to refund.
                </Content>
                <Content data-aos="fade-down">
                The reward is received in real-time.As soon as the downstream partner receives profit from the automated order, you will receive a bonus in accordance with the level of the partner. In this case, money is accrued in the currency in which the participant made the order.
                <br/>
                <br/>
                Important Our affiliate program works only for automated orders. You will not receive affiliate rewards if your partner creates a manual order.
                </Content>
                <Content data-aos="fade-down">
                Under the current partnership conditions, you will receive a reward at 3 levels for attracting new partners. For the first level you will receive 20% of profit, for level 2 5% and for level 3 - 3% .
                <br/>
                <br/>
                The number of partners involved, as well as the partner’s profit, has no limits. At the same time, the conditions of the current affiliate program can be changed in the future at the initiative of premium-cryptassets.
                </Content>
                </Hold>
            </Bottom>
            <Notice>
                <P data-aos="fade-down" style={{fontWeight:"bold"}}>*Important Notice</P>
                <PP>We reserve the right to make any changes to the existing affiliate program if necessary. In this case, the project participants will be notified in the news section or by mass mailing to the e-mails specified during registration.</PP>
            </Notice>
        </Wrapper>
    </Container>
  )
}

export default Affiliate;

const Container = styled.div`
width: 100%;
height: auto;
background-color: #16243D;
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
align-items: center;

@media Screen and (max-width:425px){
    text-align: center;
    width: 90%;
}
`;
const H1 = styled.div`
font-size: 35px;
font-weight: 500;
color:  lightgrey;
margin-top: -10px;
/* margin: 5px 0 10px 0; */

@media Screen and (max-width: 768px){
    font-size: 25px;
}
`;
const Advice = styled.div`
width:  100%;
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
margin: 50px 0 40px 0;

@media Screen and (max-width: 500px){
    flex-direction: column;
}
`;
const Cont = styled.div`
color: lightgrey;
margin: 10px 0;
`;
const Title = styled.div`
font-size: 17px;
font-weight: 500;
color: lightgrey;
`;
const Next = styled.div`
margin-top: 30px;
`;
const P = styled.div`
font-size: 16px;

`;
const ButtonHold = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 20px;
`;
const Login = styled(Link)`
color: #0F192C;
/* background-color: #015FC9; */
background-color: #FFCC40;
border-radius: 5px;
cursor: pointer;
padding: 0.5rem 2rem;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
text-decoration: none;
font-weight: bold;
:hover{
    transition: all 400ms;
    cursor: pointer;
}
`;
const Signup = styled(Link)`
color: #0F192C;
/* background-color: #015FC9; */
background-color: #FFCC40;
border-radius: 5px;
cursor: pointer;
padding: 0.5rem 2rem;
text-align: center;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
font-weight: bold;
:hover{
    transition: all 400ms;
    cursor: pointer;
}
`;
const Bottom = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;

`;
const Hold = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    flex-direction: column;
}
`;
const Content = styled.div`
color:  lightgrey;
width: 30%;
@media Screen and (max-width :1280px){
    width: 30%;
}
@media Screen and (max-width :768px){
    width: 100%;
}
`;
const Notice = styled.div`
width: 96%;
border-radius: 0.7rem;
background-color: #0F192C;
color: lightgrey;
padding: 40px 30px;
margin: 30px 0;

@media Screen and (max-width: 768px){
    width: 90%;
}
`;
const PP = styled.div`
`;

