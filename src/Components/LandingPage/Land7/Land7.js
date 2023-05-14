import React, { useEffect } from 'react'
import {
    Container, Wrapper, Wrap, Left, Right, Youtube,
    Trade, Img, H1
} from './Land7Style';
import arr from '../../../Assets/arr.png'
import arr2 from '../../../Assets/arr2.png'
import utube from '../../../Assets/utube.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Land7 = () =>{

    useEffect(() =>{
        AOS.init({duration:2000})
      },[]);
    return(
        <Container>
            <Wrapper>
                <Wrap>
                    <Left data-aos='fade-right'></Left>
                    <Right>
            <Trade>
                <Img src={arr} alt='arr left'/>
                <h4>Who we are</h4>
                <Img src={arr2} alt='arr right'/>
            </Trade>
                    <H1>Get to know more about <br/> bitcoin!</H1>
                    <p>Bitcoin is the most popular cryptocurrency, both in term of mainstream<br/> awareness as well as buy and sell. It is base on an open source<br/> technology and operate with no central authority</p>
                        <Youtube src={utube} alt='youtube image illustration'/>
                    </Right>
                </Wrap>
            </Wrapper>
        </Container>
    )
}

export default Land7;
