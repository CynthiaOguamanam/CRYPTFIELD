import React from 'react'
import Card from './Card'
import {
    Container, Wrapper, Trade, H1, Img, CardHold
} from './Land9Style';
import arr from '../../../Assets/arr.png'
import arr2 from '../../../Assets/arr2.png'
import avatar from './ceo.jpg'
import avatar4 from './ceo2.jpg'
import avatar2 from './cto.jpg'
import avatar3 from './coo.jpg'


const Land7 = () => {
  return (
    <Container>
        <Wrapper>
        <Trade>
        <Img src={arr} alt='arr left'/>
        <h4>TESTIMONIALS</h4>
        <Img src={arr2} alt='arr right'/>
      </Trade>
        <H1>What our customers are <br/>
              talking about</H1>
            <CardHold>
               <Card avatar={avatar} name="Kevin Martin" review="I invested in Crypto and Stocks with this company and my portfolio has grown exponentially"/>
               <Card avatar={avatar2} review="This platform is amazing, really wish I have a lot more money I would invest more. The customer support response is fast. would recommend this platform to anybody." name="Adam Smith"/>
            </CardHold>
            <CardHold>
               <Card avatar={avatar3} name="Thomas Green" review="I've been extremely satisfied with my returns and the transparency of the company's practices."/>
               <Card avatar={avatar4} review="I never thought I'd be a stock market investor, but this company has made it easy and profitable for me." name="Maria Rodriguez"/>
            </CardHold>
        </Wrapper>
    </Container>
  )
};

export default Land7;




