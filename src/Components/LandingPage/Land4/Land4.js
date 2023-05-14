import React from 'react';
import {Container, Left, Right, Wrapper, Trade, Img, H1, Img1, Button, ButtonHold, ContactHold, ContDiv, CallIcon, P, Nav,} from './Land4Style'
import arr from '../../../Assets/arr.png'
import arr2 from '../../../Assets/arr2.png'
import bg1 from '../../../Assets/bkbg.jpg'
import {AiFillPhone} from 'react-icons/ai'



const Land4 = () => {

  return (
    <Container>
        <Wrapper>
        <Left>
            <Img1 src={bg1}/>
        </Left>
        <Right>
            <Trade>
                <Img src={arr} alt='arr left'/>
                <h4>Who we are</h4>
                <Img src={arr2} alt='arr right'/>
            </Trade>
            <H1>Reliability, productive, Opportunities</H1>
            <p>At premium-cryptasset, we see investing differently. Today's financial system is complex, exclusive and expensive - making it hard for the typical person to start investing.</p>
            <p>So, we're building a platform without digital walls and complex barriers. A platform that empowers you to see new possibilities for your money -  and helps make them a reality.</p>
            <p>premium-cryptasset is backed by a team of world-class experts and the best technology talent. To stay at the forefront of innovation, we're always working on strengthening our position as Europe's leading digital asset platform.</p>
            <ButtonHold>
                <Button>Discover More</Button>
                <ContactHold>
                        <CallIcon><AiFillPhone style={{width: "30px", height: "35px"}}/></CallIcon>
                        <ContDiv>
                            <P>0000000000</P>
                            <Nav>Call to Our Experts</Nav>
                        </ContDiv>
                    </ContactHold>
            </ButtonHold>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Land4