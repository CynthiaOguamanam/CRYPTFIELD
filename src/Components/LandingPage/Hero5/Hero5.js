import React, {useEffect} from 'react'
import Styled from 'styled-components'
import PackageCard from './PackageCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero5 = () => {

  useEffect(()=>{
    AOS.init({duration:2000})
  }, []);

  return (
    <Container>
        <H1 data-aos="fade-down">Account Types</H1>
        <Wrapper data-aos='fade-down'>
            <PackageCard bg="#A27546" price='01' title="BRONZE" a="✓ Trading Instruments: 36 currency pairs, Metals, Cryptocurrencies" b="✓ Minimum deposit: 10,000 USD / 10,000 EUR" c="✓ Spread: Floating from 1.3 pips" d="✓ Maximum leverage: 24,999" e="✓ Return on Investment: 187%" f="✓ Deposit bonuses: All offers" g="✓ Loyalty bonuses: All offers"/>
            <PackageCard bg='#939393' price='02' title="SILVER" a="✓ Trading Instruments: 36 currency pairs, Metals, CFD on US stocks, CFD on Indices, CFD on Oil, Cryptocurrencies" b="✓ Minimum deposit: 25,000 USD / 25,000 EUR" c="✓ Spread: Floating from 1.3 pips" d="✓ Maximum : 49,999" e="✓ Return on Investment: 216%" f="✓ Deposit bonuses: All offers" g="✓ Loyalty bonuses: All offers"/>
            <PackageCard bg='#BD943B' price='03' title="GOLD" a="✓ Trading Instruments: 36 currency pairs, Metals, CFD on US stocks, CFD on Indices, CFD on Oil, Cryptocurrencies" b="✓ Minimum deposit: 50,000 USD / 50,000 EUR" c="✓ Spread: Floating from 0 pips" d="✓ Maximum leverage: 99,999" e="✓ Return on Investment: 246%" f="✓ Deposit bonuses: All offers" g="✓ Loyalty bonuses: All offers"/>
            <PackageCard bg="#636363" price='04' title="DIAMOND" a="✓ Trading Instruments: More than 12,000: Indices, Real stocks, CFD on stocks, Forex and ETF, CFDs on Oil, CFDs on Metals, CFDs on Brazil Stocks, Cryptocurrencies" b="✓ Minimum deposit: 150,000 USD / 150,000 EUR" c="✓ Spread: Floating from 0.01 USD" d="✓ Maximum leverage: 1,000,000" e="✓ Return on Investment: 301%" f="✓ Deposit bonuses: All offers" g="✓ Loyalty bonuses: All offers"/>
        </Wrapper>
    </Container>
  )
}

export default Hero5;

const Container = Styled.div`
width: 100%;
height: auto;
padding: 50px 0;
display: flex;
flex-direction: column;
align-items:center;
`;
const Wrapper = Styled.div`
width: 80%;
height: auto;
display: flex;
justify-content: space-between;
flex-wrap: wrap;

@media Screen and (max-width: 425px){
  width: 90%;
}
`;
const H1 = Styled.div`
color: #42385A;
font-size: 25px;
font-weight: bold;
`;