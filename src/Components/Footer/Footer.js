import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import bitcoin from './blo.png'
import { 
    Container, Wrapper, LeftDiv, RightDiv, Img, Logo, Hold
} from './FooterStyle';


const Footer = () => {



  return (
    <Container>
        <Wrapper>
            <LeftDiv>
                <Logo>PREMIUM-CRYPTASSETS @2023</Logo>
                {/* <Dot></Dot>
                <Span to='/news'>News</Span>
                <Dot></Dot>
                <Span to='/terms'>Terms & Condition</Span>
                <Dot></Dot>
                <Span to='/FAQ'>FAQ</Span>
                <Dot></Dot>
                <Span to='/contact'>Contact</Span> */}
            </LeftDiv>
            <RightDiv>
                <Hold href='https://www.facebook.com'><AiFillFacebook  style={{cursor: "pointer", width: "25px", height: "25px", borderRadius:"20px"}}/>
                </Hold>
                <Hold href='https://twitter.com'>
                <AiFillTwitterSquare  style={{width: "25px", height: "25px", cursor: "pointer", borderRadius:"20px"}}/>
                </Hold>
                <Img src={bitcoin} alt="bitcoin"/>
            </RightDiv>
            {/* <ScrollToTop style={{
                    width: 150, height: 50, border: "1px solid grey", backgroundColor: "grey", opacity: "80%"
                }} smooth/>  */}
        </Wrapper>
    </Container>
  )
}

export default Footer;