import React, {useEffect} from 'react';
import styled from 'styled-components';
import bg from './dec.png';
import AOS from 'aos'
import 'aos/dist/aos.css';


const Aboutus = () => {

    useEffect(()=>{
        AOS.init({duration:2000})
    }, []);

  return (
    <Container>
        <Holder>
        <Wrapper>
        <H1 data-aos="fade-down">About us</H1>
           <Title>Who are we ?</Title>
           <Content1 data-aos="fade-down">
           Since you are on the About us page, we have to introduce ourselves.<br/>So...Hello, we are a friendly premium-cryptaseets team.
           <br/>
           <br/>
           <br/>
           It makes no sense to introduce a whole team of techies, designers and analysts, you can only be a director.<br/>Is that ok?Well, if it is, then an introductory word from our founder
           </Content1>
           <Down>
            <Line></Line>
            <Right data-aos="fade-down">
            The idea of ​​creating the premium-cryptassets project originated in 2017 when the cryptocurrency market was especially volatile. High <br/> volatility made me think about arbitrage deals. These transactions were supposed to be super-fast, and as we know, transferring funds to<br/> the exchange and between them takes a lot of time. Then I remembered the strategy of "Triangular (triple) arbitrage." This strategy can be<br/> used within the framework of 1 exchange and carry out fast transactions via API. I called my school friend, who at that time was already a<br/> successful developer, and I asked him to write a small test app for one of the exchanges leading at that time. In 3 hours I had a raw version <br/>of the trading bot, which worked almost as I wanted it to.<br/>There were fails, stuttering, belated orders, but this was only a draft version. Soon we hired analysts for training the bot to work in<br/>emergency situations - PUMP / DUMP - you can earn the most from them with triple arbitrage trading. By that time, my friend (who was a<br/> developer) had already made an almost full-fledged bot, and we started making money and still do.
            <br/>
            <br/>
            The idea originated in 2017, so why the platform was launched in 2020?
            <br/>
            <br/>
            The thing is that volatility has decreased since 2017, the bear market prevailed. In 2018, we had to upgrade the bot to a bear market and<br/> quick liquidation. Until mid-2018, we were still making edits and training the trading bot for our arbitrage. In early January 2019, we realized<br/> that the bot works perfectly with different movements, force majeure is excluded, so we decided to open our own company. We hired<br/> lawyers, marketing experts, and decided to adhere to the basic principles of the Internet company (anonymity and security for users). But<br/> again, the business stopped, lawyers said that we should adhere to the KYC and AML policies, which we categorically could not allow<br/> because we care about decentralization, anonymity and user safety. After all, KYC and AML did not protect a single exchange user from<br/> “exit-scam”, but only limited the possibilities of the sites and prevented the injection of money. I dare to assume there is “exit-scam” in<br/> famous exchanges, of course, not including force majeure circumstances like hacker atacks. We began to prepare documents, consult, and<br/> in October 2019, we officially registered our company under Hong Kong jurisdiction. A few months took to develop the platform and <br/>connect our trading bots, and now ... the platform was launched in the middle of April 2020.
            <br/>
            <br/>
            How did we open a company without KYC / AML?
            <br/>
            <br/>
            We work with leading analytical companies that track dark and gray transactions. As soon as such funds get into our system, we<br/> temporarily block our account before the proceedings, while ordinary users can easily withdraw up to 150 BTC per day without passing any<br/> verification. Based on the experience of other cryptocurrency companies, this is the best solution for ordinary users.
            <br/>
            <br/>
            Sorry, forgot to introduce myself
            <br/>
            <br/>
            My name is Hardy, and I am the CEO of premium-cryptaseets.com
            </Right>
           </Down>
           <Bottom>
            <H1 data-aos="fade-down">
            What does our platform offer?
            </H1>
            <br/>
            <br/>
            <Content data-aos="fade-down">
            premium-cryptaseets.com is a unique platform for arbitrage trading in cryptocurrency assets. Its functionality allows to carry out profitable<br/> transactions in a few clicks, no need to be a professional, or have experience in trading and understand the specifics of this activity. Our system<br/> allows engaging in arbitrage transactions in the simplest possible manner without registering on dozens of exchanges and using large<br/> amounts of money. By creating an account in our platform, you will get access to operations on popular trading platforms and will get guaranteed profits. The security level of the arbitrage trading platform is the highest. Funds storage in cold and hot wallets ensures the complete safety of our clients' funds, and modern data protection methods ensure reliable storage of information about user accounts.
            </Content>
            <ButtonHold>
                <Auto>Automated Trading</Auto>
                <Manual>Manual Trading</Manual>
            </ButtonHold>
            <TextHold>
                <Content data-aos="fade-down">
                <b>How does automated trading work?</b> <br/>
                You need to pay a fixed fee of 0.005 BTC (one-time) After payment,<br/> you will have the opportunity to create Lifelong Trading. The <br/> procedure is simple: click on the button, fill out a small form, confirm,<br/> done. Our robot adds your transaction to the life cycle. Every day you<br/> will receive a transaction report and a guaranteed daily percentage of<br/> 0.5% to 5% of the transaction amount.
                </Content>
                <Content>
                <b>How does manual trading work?</b>
                All transactions are created without any additional fees. The choice<br/> provides 3 different options for triangular arbitrage for each coin.<br/> Each option has its own profitability and maximum order execution time. The speed of order execution<br/> depends on the market and<br/> exchanges volatility. The profitability can be different for each<br/> transaction. Everything is individual and depends on many factors.
                </Content>
            </TextHold>
           </Bottom>
           <Last>
            <Content data-aos="fade-down">
            <b>Need more information on working with the platform?</b> 
            <br/>
            <br/>
            We recommend you to start with the Beginner’s Guide section. If you still have questions after exploring the section, you can visit the FAQ ,<br/>most likely you will find the answer to your question there.
            <br/>
            <br/>
            <b>Could not figure it out? Still need help?</b>
            <br/>
            <br/>
            You can ask our technical support a question on the Support page
            </Content>
           </Last>
        </Wrapper>
        </Holder>
    </Container>
  )
};

export default Aboutus;

const Container = styled.div`
width: 100%;
background: linear-gradient(120deg, #0F192C, #16243D);
height: auto;
display: flex;
justify-content: center;
align-items: center;
`;
const Holder = styled.div`
width: 100%;
height: 100%;
background-image: url(${bg});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
padding: 20px 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Wrapper = styled.div`
width: 75%;
height: 80%;
display: flex;
flex-direction: column;
/* border: 1px solid aliceblue; */
border-radius: 1rem;
padding: 10px 20px;
`;
const H1 = styled.h1`
color: #FFCC40;
`;
const Title = styled.div`
font-size: 20px;
color: silver;

`;
const Content1 = styled.div`
color: silver;
`;
const Down = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
margin: 30px 0;
`;
const Line = styled.div`
width: 2px;
height : 95vh;
background-color: #FFCC40;
`;
const Right = styled.div`
width: 95%;
color: silver;
`;
const Bottom = styled.div``;
const Content = styled.div`
color: silver;
margin:20px 0;
`;
const ButtonHold = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    width: 95%;
}
@media Screen and (max-width: 425px){
    width: 90%;
    flex-direction: column;
}
@media Screen and (max-width: 375px){
    width: 95%;
    flex-direction: column;
}
@media Screen and (max-width: 320px){
    width: 100%;
    flex-direction: column;
}
`;
const Auto = styled.div`
padding: 20px 100px;
background-color: #FFCC40;
color: #0F192C;
font-size: 18px;
font-weight: bold;
cursor: pointer;
border-radius: 0.5rem;

@media Screen and (max-width: 768px){
    padding: 10px 50px;
    text-align: center;
}
@media Screen and (max-width: 425px){
    text-align: center;
    width: 60%;

}
@media Screen and (max-width: 320px){
    text-align: center;
    width: 70%;
}

`;
const Manual = styled.div`
padding: 20px 100px;
background-color: #FFCC40;
color: #0F192C;
font-size: 18px;
cursor: pointer;
border-radius: 0.5rem;
font-weight: bold;


@media Screen and (max-width: 768px){
    padding: 10px 50px;
    text-align: center;
}
@media Screen and (max-width: 425px){
    text-align: center;
    width: 60%;
    margin-top: 15px;
}
@media Screen and (max-width: 320px){
    text-align: center;
    width: 70%;
}
`;
const TextHold = styled.div``;
const Last = styled.div``;


