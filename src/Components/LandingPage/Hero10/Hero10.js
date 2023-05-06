import React from 'react'
import styled from 'styled-components';
import Marquee from "react-fast-marquee";


const Hero10 = () => {
  return (
    <Container>
        <Wrapper>
          <H1>What people are saying</H1>
          <H4>At Kryptbase Assets we have built our reputation over the years and here is what our clients has to<br/> say about us</H4>
          <Marquee speed={50} pauseOnHover={true} gradientColor="white">
            <Card>
              <Description>
              I invested in Crypto and Stocks with <br/> this company and my portfolio has<br/> grown exponentially
              </Description>
              <Bio>
                <Name>John Daniel</Name>
                <Comp>C.E.O AT ZYX INC</Comp>
              </Bio>
            </Card>
            <Card>
            <Description>
            The level of support and guidance<br/> I've received has been unparalleled.<br/> I'm now a proud shareholder of<br/> multiple successful companies.
              </Description>
              <Bio>
                <Name>Stella Gizmo</Name>
                <Comp>MANAGING DIRECTOR AT SAPPHIRE ENTERPRISE</Comp>
              </Bio>
            </Card>
            <Card>
            <Description>
            The extension makes collecting feedback<br/> so much easier! Shipright then really <br/>helps us make decisions based on the data<br/> we collected.
              </Description>
              <Bio>
                <Name>Marcel Wundrich</Name>
                <Comp>PUBLIC RELATIONS AT SEMAPHORE</Comp>
              </Bio>
            </Card>
            <Card>
            <Description>
            I highly recommend this investment<br/> company to anyone looking to diversify<br/> their portfolio.
              </Description>
              <Bio>
                <Name>Sarah Johnson</Name>
                <Comp>C.F.O AT Skylo Corp</Comp>
              </Bio>
            </Card>
          </Marquee>
        </Wrapper>
    </Container>
  )
}

export default Hero10;
const Container = styled.div`
width: 100%;
height: 60vh;
display: flex;
justify-content: center;
align-items: center;
background-color: whitesmoke;
border-top: 1px solid silver;
padding: 10px 0
`;

const Wrapper = styled.div`
width: 80%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`;
const H1 = styled.div`
font-size: 30px;
font-weight: bold;
color: #463A5C;
`;
const H4 = styled.div`
font-size: 20px;
color: #463A5C;
text-align: center;
`;
const Card = styled.div`
/* box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px; */
box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px;
height: 120px;
width: auto;
padding: 40px;
border-top: 1px solid silver;
border-bottom: 1px solid silver;
/* background-color: aliceblue; */
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 0 10px;
`;
const Bio = styled.div`
height: auto;
width: auto;
display: flex;
flex-direction: column;
align-items: center;
`;
const Name = styled.div`
font-weight: bold;
`;
const Comp = styled.div`
`;
const Description = styled.div`
text-align: center;
margin-bottom: 10px;
`;