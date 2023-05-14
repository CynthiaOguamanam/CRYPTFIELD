import React from 'react'
import {
  Container, Wrapper, TopDiv, BottomDiv,Left, Right, Trade, Img, H1
} from "./Land3Style";
import arr from '../../../Assets/arr.png'
import arr2 from '../../../Assets/arr2.png'
const Land3 = () => {
  return (
    <Container>
      <Wrapper>
        <TopDiv>
          <Left>
            <Trade>
              <Img src={arr} alt='arr left'/>
              <h4>TRADING SPOT</h4>
              <Img src={arr2} alt='arr right'/>
            </Trade>
            <H1>Markets closed? Not anymore</H1>
          </Left>
          <Right>Invest whenever you want, even when the traditional stock <br/> market is closed.</Right>
        </TopDiv>
        <BottomDiv>
        <iframe style={{width: "100%", height: "600px", margin: "80px 0"}} title='frame' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A500%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22swiftcryptrade.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22swiftcryptrade.com%2F%3Fa%3Dhome%22%7D" ></iframe>
        </BottomDiv>
      </Wrapper>
    </Container>
  )
};

export default Land3;