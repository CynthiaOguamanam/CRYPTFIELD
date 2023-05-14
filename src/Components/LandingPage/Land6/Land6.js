import React, {useEffect} from 'react';
import {
    Container, Wrapper, LeftDiv, RightDiv, Trade,
    Img, H1, P, BoxHold, Wrap, Box,NewBg, BgImg,
    NewBg2, NewBg3,
} from './Land6Style';
import {GiCash, GiHandOk} from 'react-icons/gi'
import {FaFileSignature, FaScroll} from 'react-icons/fa'
import arr from '../../../Assets/arr.png'
import arr2 from '../../../Assets/arr2.png'
import phoneillus from '../../../Assets/phone-illus.png'
import bg1 from '../../../Assets/bg.png'
import bg2 from '../../../Assets/bg5.png'
import bg3 from '../../../Assets/bg4.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Land6 = () => {

    useEffect(() =>{
        AOS.init({duration:2000})
      },[]);

  return (
    <Container>
        <Wrapper>
        <Wrap>
        <LeftDiv>
        <Trade>
            <Img src={arr} alt='arr left'/>
            <h4>AUTOMATED</h4>
            <Img src={arr2} alt='arr right'/>
        </Trade>
        <H1>100% Fully Automated Binary<br/> Trading Software.</H1>
        <P>Trade and earn with Preeminent crypt field VIP multichain decentralized exchange</P>
        <BoxHold>
            <Box data-aos="fade-down">
                <GiHandOk style={{width: 50, height: 50, color: "#0CD5F9"}}/>
                <h6>Fast & easy h6rocess</h6>
                <p>Easy to invest and trade</p>
            </Box>
            <Box data-aos="fade-down">
                <FaFileSignature style={{width: 50, height: 50, color: "#0CD5F9"}}/>
                <h6>Earn a share of trading</h6>
                <p>Put your crypto to work in liquidity polls</p>
            </Box>
        </BoxHold>
        <BoxHold>
            <Box data-aos="fade-down">
                <FaScroll style={{width: 50, height: 50, color: "#0CD5F9"}}/>
                <h6>Control over Policy</h6>
                <p>Our policy apply when trading</p>
            </Box>
            <Box data-aos="fade-down">
                <GiCash style={{width: 50, height: 50, color: "#0CD5F9"}}/>
                <h6>Earn your money</h6>
                <p>Profit are deposited to your wallet instantly</p>
            </Box>
        </BoxHold>
        </LeftDiv>
        <RightDiv>
            <BgImg data-aos="fade-up" src={phoneillus} alt='phone illustration'/>
            <NewBg src={bg1}/>
            <NewBg2 src={bg2}/>
            <NewBg3 src={bg3}/>
        </RightDiv>
        </Wrap>
        </Wrapper>
    </Container>
  )
}

export default Land6;