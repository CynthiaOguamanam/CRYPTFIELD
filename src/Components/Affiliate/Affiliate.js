import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Affiliate = () => {
  return (
    <Container>
        <Wrapper>
            <H1>Cryptfield Affiliate program is more profitable with friends.</H1>
            <Advice>
                <Cont>
                    <Title>Get your link</Title>
                    <P>Register and receive your personal affiliate link</P>
                </Cont>
                <Cont>
                    <Title>Invite friends</Title>
                    <P>Invite your friends, send them your affiliate link<br/> or ID.</P>
                </Cont>
                <Cont>
                    <Title>Get rewards</Title>
                    <P>Get 20% commission in real-time from<br/> partners' profit.</P>
                </Cont>
            </Advice>
            <Next>
                <Title>To display personal statistics, log in to your account or sign up</Title>
                <ButtonHold>
                    <Login to='/login'>Login</Login>
                    <Signup to='/register'>Sign up</Signup>
                </ButtonHold>
            </Next>
            <br/>
            <br/>
            <br/>
            <Bottom>
                <H1>Program details</H1>
                <Hold>
                <Content>
                Affiliate program is available for all platform<br/> users. You receive an affiliate link immediately<br/> after registration and you can find it in your<br/> account.
                <br/>
                <br/>
                The platform has an account verification<br/> system to identify multi-accounts created with<br/> the purpose of obtaining undue benefits. If<br/> multiple registrations are detected, these<br/> accounts will be blocked without the right to<br/> refund.
                </Content>
                <Content>
                The reward is received in real-time.As soon as<br/> the downstream partner receives profit from<br/> the automated order, you will receive a bonus<br/> in accordance with the level of the partner. In<br/> this case, money is accrued in the currency in<br/> which the participant made the order.
                <br/>
                <br/>
                Important Our affiliate program works only for<br/> automated orders. You will not receive affiliate<br/> rewards if your partner creates a manual order.
                </Content>
                <Content>
                Under the current partnership conditions, you<br/> will receive a reward at 3 levels for attracting<br/> new partners. For the first level you will receive<br/> 20% of profit, for level 2 5% and for level 3 - 3% .
                <br/>
                <br/>
                The number of partners involved, as well as the<br/> partner’s profit, has no limits. At the same time,<br/> the conditions of the current affiliate program<br/> can be changed in the future at the initiative of<br/> swiftcryptrade.com.
                </Content>
                </Hold>
            </Bottom>
            <Notice>
                <P style={{fontWeight:"bold"}}>*Important Notice</P>
                <PP>We reserve the right to make any changes to the existing affiliate program if necessary. In this case, the project participants will be notified in<br/> the news section or by mass mailing to the e-mails specified during registration.</PP>
            </Notice>
        </Wrapper>
    </Container>
  )
}

export default Affiliate;

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
align-items: center;

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
const Advice = styled.div`
width:  100%;
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
margin: 50px 0 40px 0;

@media Screen and (max-width: 425px){
    flex-direction: column;
}
`;
const Cont = styled.div`
color: #463A5C;
margin: 10px 0;
`;
const Title = styled.div`
font-size: 17px;
font-weight: 500;
color: #463A5C;
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
color: white;
background-color: #FF4D4D;
border-radius: 5px;
cursor: pointer;
padding: 0.5rem 2rem;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
text-decoration: none;
font-weight: 500;
:hover{
    transition: all 400ms;
    cursor: pointer;
}
`;
const Signup = styled(Link)`
color: white;
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
font-weight: 500;
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
color:  #463A5C;
@media Screen and (max-width :1024px){
    width: 30%;
}
@media Screen and (max-width :768px){
    width: 100%;
}
`;
const Notice = styled.div`
width: 96%;
border-radius: 0.7rem;
background-color: #463A5C;
color: white;
padding: 40px 30px;
margin: 30px 0;
`;
const PP = styled.div`
`;

