import React from 'react'
import { Withdra, H1, Card, P1, P2, Content, Button, Button1, Buttons, P3,P, CardContainer } from './StyledWithdraw'
const Withdraw = () => {
  return (
    <Withdra>
      <H1>Balance</H1>
         <CardContainer>
         <Card>
        <Content>
          <P1>Bitcoin</P1>
          <P>
            <P2>Balance</P2>
            <P3>$0000</P3>
          </P>
        </Content>
        <Buttons>
          <Button>Update</Button>
          <Button1>Withdraw</Button1>
        </Buttons>
      </Card>
         </CardContainer>
    </Withdra>
  )
}

export default Withdraw