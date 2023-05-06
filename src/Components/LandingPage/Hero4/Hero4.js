import React from 'react';
import styled from 'styled-components';

const Hero4 = () => {
  return (
    <Container>
      <H1>Live Forex Rate</H1>
        <iframe style={{width: "80%", height: "60vh", margin: "80px 0"}} title='frame' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A500%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22swiftcryptrade.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22swiftcryptrade.com%2F%3Fa%3Dhome%22%7D" ></iframe>
    </Container>
  )
}

export default Hero4;

const Container = styled.div`
width: 100%;
background: linear-gradient(120deg, #192441,#463A5C);
display: flex;
flex-direction: column;
align-items: center;
padding: 40px 0;
`;

const H1 = styled.div`
font-size: 40px;
font-weight: 500;
color: whitesmoke;
`;
// style="box-sizing: border-box; display: block; height: 500px; width: 100%;"