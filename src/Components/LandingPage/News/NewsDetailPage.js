import React from 'react';
// import Onecard from './OneCard';
import styled from 'styled-components'
import {AiOutlineArrowRight} from 'react-icons/ai';
// import avatar2 from './crypt3.jpg'
// import avat from './pic.jpg'



const NewsDetailPage = () => {
  return (
    <Container>
      <H1>News and Analysis</H1>
      <Wrapper>
        <Left>
        <Div>
        <Title>How to invest in Cryptocurrency</Title>
        <p>CRYPTOCURRENCY HAS BEEN MAKING HEADLINES IN RECENT YEARS AS AN INVESTMENT OPTION WITH POTENTIALLY HIGH RETURNS. HOWEVER, WITH ANY INVESTMENT COMES RISK, AND IT'S IMPORTANT TO UNDERSTAND THE BASICS BEFORE DIVING IN....
        Another common reason to invest in cryptocurrency is the desire for a reliable, long-term store of value. Unlike fiat money, most cryptocurrencies have a limited supply, capped by mathematical algorithms. To make a purchase with cryptocurrency, investors usually have to convert it into fiat currency..
        
        </p>
        </Div>
        <br/>
        <br/>
        <Div>
        {/* <Title>How to invest in Cryptocurrency</Title> */}
        <p>
        1. Transaction speed
If you want to send someone money in the United States, there are few ways to move money or assets from one account to another faster than you can with cryptocurrency. Most transactions at U.S. financial institutions settle in three to five days. A wire transfer usually takes at least 24 hours. Stock trades settle in three days.

But one of the advantages of cryptocurrency transactions is that they can be completed in a matter of minutes. Once the block with your transaction in it is confirmed by the network, it's fully settled and the funds are available to use.
<br/>
<br/>
2. Transaction costs
The cost of transacting in cryptocurrency is relatively low compared to other financial services. For example, it's not uncommon for a domestic wire transfer to cost $25 or $30. Sending money internationally can be even more expensive.

Cryptocurrency transactions are usually less expensive. However, you should note that demand on the blockchain can increase transaction costs. Even so, median transaction fees remain lower than wire transfer fees even on the most congested blockchains.
<br/>
<br/>
3. Accessibility
Anyone can use cryptocurrency. All you need is a computer or smartphone and an internet connection. The process of setting up a cryptocurrency wallet is extremely fast compared to opening an account at a traditional financial institution. There's no ID verification. There's no background or credit check.

Cryptocurrency offers a way for the unbanked to access financial services without having to go through a centralized authority. There are many reasons a person may be unable or unwilling to get a traditional bank account. Using cryptocurrency can allow people who don't use traditional banking services to easily make online transactions or send money to loved ones.
<br/>
<br/>
4. Security
Unless someone gains access to the private key for your crypto wallet, they cannot sign transactions or access your funds. However, if you lose your private key, there's also no way to recover your funds.

Furthermore, transactions are secured by the nature of the blockchain system and the distributed network of computers verifying transactions. As more computing power is added to the network, it becomes even more secure.

Any attack on the network and attempt to modify the blockchain would require enough computing power to confirm multiple blocks before the rest of the network can verify the ledger's accuracy. For popular blockchains such as Bitcoin (CRYPTO:BTC) or Ethereum (CRYPTO:ETH), that kind of attack is prohibitively expensive.

Instances of hacked cryptocurrency accounts are usually tied to poor security at a centralized exchange. If you keep your crypto assets in your own wallet, it's far more secure.
<br/>
<br/>
5. Privacy
Since you don't have to register for an account at a financial institution to transact with cryptocurrency, you can maintain a level of privacy. Transactions are pseudonymous, which means you have an identifier on the blockchain -- your wallet address -- but it doesn't include any specific information about you.

This level of privacy can be desirable in many cases (both innocent and illicit). That said, if someone connects a wallet address with an identity, all of the transaction data is public. There are several ways to further mask transactions, as well as several coins that are privacy-focused to enhance the private nature of cryptocurrency.
<br/>
<br/>
6. Transparency
All cryptocurrency transactions take place on the publicly distributed blockchain ledger. There are tools that allow anyone to look up transaction data, including where, when, and how much of a cryptocurrency someone sent from a wallet address. Anyone can also see how much crypto is stored in a wallet.

This level of transparency can reduce fraudulent transactions. Someone can prove they sent money and that it was received or they can prove they have the funds available for a transaction.
<br/> 
<br/> 

The Bottom Line
While it's clear there are many reasons to be skeptical of digital currencies, many traditional investors have been won over to the new asset class. The blockchain space is frequently described as a transformative industry, with the potential to disrupt the world in the same way that the internet did in the 1990s.
        </p>
        </Div>

        </Left>

        <Right>
        <Latest>
          <One>
            <h1 style={{color: "#263238"}}>Latest News</h1>
            <Line></Line>
          </One>
          <Two>
            <AiOutlineArrowRight/>
            <p style={{width: "90%"}}>Investing in stocks can be a great way to grow your wealth over the long term</p>
          </Two>
          <Two>
            <AiOutlineArrowRight/>
            <p style={{width: "90%"}}>Stocks, also known as equities, represent a share in ownership of a company.When you buy a stock, you're essentially buying a piece of the company.</p>
          </Two>
        </Latest>
        <Latest>
          <One>
            <h1 style={{color: "#263238"}}>Latest News</h1>
            <Line></Line>
          </One>
          <Two>
            <AiOutlineArrowRight/>
            <p style={{width: "90%"}}>Investing in stocks can be a great way to grow your wealth over the long term</p>
          </Two>
          <Two>
            <AiOutlineArrowRight/>
            <p style={{width: "90%"}}>Stocks, also known as equities, represent a share in ownership of a company.When you buy a stock, you're essentially buying a piece of the company.</p>
          </Two>
        </Latest>
        <Latest>
          <One>
            <h1 style={{color: "#263238"}}>Latest News</h1>
            <Line></Line>
          </One>
          <Two>
            <AiOutlineArrowRight/>
            <p style={{width: "90%"}}>Investing in stocks can be a great way to grow your wealth over the long term</p>
          </Two>
          <Two>
            <AiOutlineArrowRight/>
            <p style={{width: "90%"}}>Stocks, also known as equities, represent a share in ownership of a company.When you buy a stock, you're essentially buying a piece of the company.</p>
          </Two>
        </Latest>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NewsDetailPage;

const Container = styled.div`
height: auto;
/* height: 100vh; */
width: 100%;
background-color: #0E192B;
background-color: #16233C;
display: flex;
flex-direction: column;
align-items:center;
padding: 40px 0;
`;
const Wrapper = styled.div`
width: 85%;
display: flex;
justify-content:  space-between;
/* background-color: peru; */
height: auto;

@media Screen and (max-width: 768px){
flex-direction: column;
align-items:center;
}
`;
const Left = styled.div`
width: 80%;
flex-wrap: wrap;
display: flex;
flex-direction: column;
align-items: center;

@media Screen and (max-width: 768px){
    justify-content: space-around;
    width: 90%;
    flex-direction: row;
}
`;
const Div = styled.div`


p{
  /* text-transform: uppercase; */
  color: lightgrey;
}
`;
const H1 = styled.div`
color: #fff;
font-family: Cam;
font-style: oblique;
font-size: 40px;
font-weight: bold;
width: 85%;
MARGIN: 30PX 0;

@media Screen and (max-width: 768px){
    font-size: 25px;
margin: 30px 0 30px 35px;
}
@media Screen and (max-width: 425px){
    font-size: 20px;
    margin-top: 20px;
}
`;

const Title = styled.div`
color: lightgrey;
font-weight: 500;

@media Screen and (max-width: 425px){
    font-size: 14px;
}
`;

const Right = styled.div`
flex-wrap: wrap;
display: flex;
flex-direction: column;
align-items: center;

@media Screen and (max-width: 768px){
    justify-content: space-around;
    width: 90%;
    flex-direction: row;
}
`;

const Latest = styled.div`
width: 221px;
height: 401px;
background-color: white;
border-top: 3px solid #1441A3;
box-shadow:   rgb(0 0 0 / 30%) 0px 1px 3px 0px, rgb(27 31 35 / 15%) 0px 0px 0px 1px;
border-radius: 4px;
:hover{
transform: scale(1.01);
cursor:  pointer;
}
transition: all 500ms;
margin: 20px 0;
padding-bottom: 15px;
`;
const One = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 15px;
line-height: 20px;
margin-bottom: 15px;
`;
const Two = styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;
margin-left: 15px;
width: 90%;
color: red;
font-weight: 500;
font-style: oblique;
`;

const Line = styled.div`
width: 90%;
height: 3px;
opacity: 35%;
background-color: #263238;
`;

