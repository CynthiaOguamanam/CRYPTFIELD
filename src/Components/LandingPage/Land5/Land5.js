import React, {useEffect} from 'react';
import {Container, Wrapper, TopDiv, BottomDiv,
    Left, Right, Trade, Img, H1, P
} from './Land5Style';
import arr from '../../../Assets/arr.png'
import arr2 from '../../../Assets/arr2.png'
import PackageCard from './PackageCard';
import AOS from 'aos'
import 'aos/dist/aos.css';
import Slides from '../EthScroll'


const Land5 = () =>{

    useEffect(() =>{
        AOS.init({duration:1000})
      },[]);

    return(
        <Container>
            <Wrapper>
            <Slides/>
                <TopDiv>
                    <Left>
                    <Trade data-aos="fade-down">
                     <Img src={arr} alt='arr left'/>
                     <h4>OUR PACKAGE</h4>
                     <Img src={arr2} alt='arr right'/>
                    </Trade>
                     <H1 data-aos="fade-down">Investing.Now<br/> Available to everyone.</H1>
                    </Left>
                    <Right>
                        <P data-aos="fade-down">Select any of our packages to start your journey of investment and <br/>enjoy huge benefit of trading while you sleep</P>
                    </Right>
                </TopDiv>
                <BottomDiv data-aos="fade-down">
                    <PackageCard pr="#16243D" coll="#16243D" price='$1,000 - $4,999.99' title='Starter Plan' a=' Trading Instruments: 36 currency pairs, Metals, Cryptocurrencies' b='  Minimum deposit: 1,000 USD / 10,000 EUR' c='Spread: Floating from 1.3 pips' d='Maximum leverage: 49,999' e=' Return on Investment: 187%' f="Deposit bonuses: All offers" g="Loyalty bonuses: All offers"/>
                    <PackageCard pr="#985F25" coll="#985F25" price='$10,000 - $24,999.99' title='Bronze Plan' a=' Trading Instruments: 36 currency pairs, Metals, Cryptocurrencies' b='  Minimum deposit: 10,000 USD / 10,000 EUR' c='Spread: Floating from 1.3 pips' d='Maximum leverage: 24,999' e=' Return on Investment: 187%' f="Deposit bonuses: All offers" g="Loyalty bonuses: All offers"/>
                    <PackageCard pr="grey" coll="grey"  price='$25,000 - $49,999.99' title='Silver Plan' a='Trading Instruments: 36 currency pairs, Metals, CFD on US stocks, CFD on Indices, CFD on Oil, Cryptocurrencies' b='Minimum deposit: 25,000 USD / 25,000 EUR' c='Spread: Floating from 1.3 pips' d='Maximum : 49,999' e=' Return on Investment: 216%' f="Deposit bonuses: All offers" g="Loyalty bonuses: All offers"/>
                    <PackageCard pr="#A87419" coll="#A87419"  price='$50,000 - $99,999.99' title='Gold Plan' a='rading Instruments: 36 currency pairs, Metals, CFD on US stocks, CFD on Indices, CFD on Oil, Cryptocurrencies' b='Minimum deposit: 50,000 USD / 50,000 EUR' c='Spread: Floating from 1.3 pips' d=' Maximum leverage: 99,999' e='Return on Investment: 246%' f="Deposit bonuses: All offers" g="Loyalty bonuses: All offers"/>
                    <PackageCard pr="#43443F" coll="#43443F" price='$150,000 - $1,000,000' title='Diamond Plan' a='2rading Instruments: More than 12,000: Indices, Real stocks, CFD on stocks, Forex and ETF, CFDs on Oil, CFDs on Metals, CFDs on Brazil Stocks, Cryptocurrencies' b='Minimum deposit: 150,000 USD / 150,000 EUR' c=' Spread: Floating from 0.01 USD' d='Maximum leverage: 1,000,000' e='Return on Investment: 301%' f='Deposit bonuses: All offers' g="Loyalty bonuses: All offers"/>
                </BottomDiv>
            </Wrapper>
        </Container>
    )
};

export default Land5;