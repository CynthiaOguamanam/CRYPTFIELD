import React from 'react'
import {
    ContainerMain,
    H1,
    MainCard,
    Button,
    PlanDiv,
    Plan1,
    Plan,
    Amount,
    Profit,
    Plans,
    Deposits1,
    StarterDiv,
    Starter,
    Plan2,
    StartDiv,
    Start,
    Amount1,
} from './StyledEarnings'

const Earnings = () => {
    return (
        <ContainerMain>
            <H1>Your deposits</H1>
            <MainCard>
                <Button>Total: $0.00</Button>
                <Plans>
                    <PlanDiv> </PlanDiv>
                    <Plan1>
                        <Plan>Plan</Plan>
                        <Amount>Amount spent($)</Amount>
                        <Profit>Profit(%)</Profit>
                    </Plan1>
                    <Deposits1>No deposits for this plan</Deposits1>
                </Plans>
                <StarterDiv>
                    <Starter>Starter</Starter>
                    <Plan2>
                        <Plan>Plan</Plan>
                        <Amount>Amount spent($)</Amount>
                        <Profit>Profit(%)</Profit>
                    </Plan2>
                    <StartDiv>
                        <Start>Starter</Start>
                        <Amount1>$3000.00 - $10000.00</Amount1>
                        <Profit>325.00</Profit>
                    </StartDiv>
                    <Deposits1>No deposits for this plan</Deposits1>
                </StarterDiv>
                <StarterDiv>
                    <Starter>Silver</Starter>
                    <Plan2>
                        <Plan>Plan</Plan>
                        <Amount>Amount spent($)</Amount>
                        <Profit>Profit(%)</Profit>
                    </Plan2>
                    <StartDiv>
                        <Start>Silver</Start>
                        <Amount1>$10000.00 - $50000.00</Amount1>
                        <Profit>330.00</Profit>
                    </StartDiv>
                    <Deposits1>No deposits for this plan</Deposits1>
                </StarterDiv>
                <StarterDiv>
                    <Starter>Gold</Starter>
                    <Plan2>
                        <Plan>Plan</Plan>
                        <Amount>Amount spent($)</Amount>
                        <Profit>Profit(%)</Profit>
                    </Plan2>
                    <StartDiv>
                        <Start>Gold</Start>
                        <Amount1>$10000.00 - $50000.00</Amount1>
                        <Profit>330.00</Profit>
                    </StartDiv>
                    <Deposits1>No deposits for this plan</Deposits1>
                </StarterDiv>
                <StarterDiv>
                    <Starter>Diamond</Starter>
                    <Plan2>
                        <Plan>Plan</Plan>
                        <Amount>Amount spent($)</Amount>
                        <Profit>Profit(%)</Profit>
                    </Plan2>
                    <StartDiv>
                        <Start>Diamond</Start>
                        <Amount1>$10000.00 - $50000.00</Amount1>
                        <Profit>330.00</Profit>
                    </StartDiv>
                    <Deposits1>No deposits for this plan</Deposits1>
                </StarterDiv>
            </MainCard>
        </ContainerMain>
    )
}

export default Earnings