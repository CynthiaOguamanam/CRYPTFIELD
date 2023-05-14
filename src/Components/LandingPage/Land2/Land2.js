import React from 'react';
import {
    Container, Wrapper, Card, Div, H3, H6, Div2
} from './Land2Style';
import {AiOutlineHome, AiOutlineDollarCircle, AiOutlineWallet} from 'react-icons/ai'


const Land2 = () => {
  return (
    <Container>
        <Wrapper>
            <Card>
              <Div><AiOutlineHome style={{width: 55, height: 55}}/>
              </Div>               
                <Div2>
                <H3>Regulated</H3>
                <H6>Uk based, European, American and Asian regulated crypto and securities broker platform</H6>
                <p>Uk based, European, American and Asian regulated crypto and securities broker platform</p>
                </Div2>
              </Card>
            <Card>
            <Div> <AiOutlineDollarCircle style={{width: 55, height: 55}}/>
            </Div>
            <Div2>
            <H3>Safe and secure</H3>
            <H6>Funds secured in offline wallets. Fully compliant with data, IT and money laundering security standards</H6>
            </Div2>
            </Card>
            <Card>
            <Div> <AiOutlineWallet style={{width: 55, height: 55}}/>
            </Div>
            <Div2>
            <H3>Trust</H3>
            <H6>3.5 million happy users. Excellent Trust port rating</H6>
            </Div2>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Land2;