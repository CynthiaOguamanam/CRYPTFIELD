import React from 'react';
import Onecard from './OneCard';
import {
  Container, Wrapper, Left, Right, One, Two, Line, Latest, Button, H1
} from './NewsStyle'
import {AiOutlineArrowRight} from 'react-icons/ai';
import avatar2 from './crypt3.jpg'
import avat from './pic.jpg'



const News = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
      <H1>News and Analysis</H1>
           <div style={{marginTop: "20px"}}>
           <Onecard description="CRYPTOCURRENCY HAS BEEN MAKING HEADLINES IN RECENT YEARS AS AN INVESTMENT OPTION WITH POTENTIALLY HIGH RETURNS. HOWEVER, WITH ANY INVESTMENT COMES RISK, AND IT'S IMPORTANT TO UNDERSTAND THE BASICS BEFORE DIVING IN...."  image={avat} title='How to invest in Cryptocurrency'/>
           </div>
           <div style={{marginTop: "20px"}}>
           <Onecard description="Cryptocurrency is a type of digital currency that uses cryptography to secure transactions and control the creation of new units. Bitcoin, the first and most well-known cryptocurrency, was created in 2009 as a decentralized alternative to traditional currency." image={avatar2} title='Understanding Crypto currency'/>
           </div>
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
          <Button to='/newsdetailpage'>See Full List</Button>
        </Latest>
        {/* <NewsCard img={a2} title='KFA goal keeper beats the record of best goal keeper state championship 2022!!!'/>
        <NewsCard img={pic} title='Training get more rigorous as team has got more matches to play' /> */}
        <Latest>
          <One>
            <h1 style={{color: "#263238"}}>Latest News</h1>
            <Line></Line>
          </One>
          <Two>
            <AiOutlineArrowRight/>
            <p style={{width: "90%"}}>With patience, persistence, and a long-term perspective, investing in stocks can be a rewarding experience.</p>
          </Two>
          <Two>
            <AiOutlineArrowRight/>
            <p style={{width: "90%"}}>It's also important to understand that past performance is not a guarantee of future performance</p>
          </Two>
          <Button to='/newsdetailpage'>See Full List</Button>
        </Latest>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default News;