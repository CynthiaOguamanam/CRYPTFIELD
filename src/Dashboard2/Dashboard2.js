import React from 'react'
// import DashHeader from './DashHeader/DashHeader'
import styled from 'styled-components'
import { FaLaptopCode } from 'react-icons/fa'
import { GiShakingHands } from 'react-icons/gi'
import { BsBagCheck } from 'react-icons/bs'
import {HiOutlineCurrencyDollar} from 'react-icons/hi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { VscAccount } from 'react-icons/vsc'
import NewDashboard from './Newdashboard/Newdashboard'
// import Settings from './Setting/Setting'
// import History from './History/Wallet'
// import Withdraw from './Withdraw/Withdraw'
// import DepositHistory from './DepositHistory/Deposithistory'
// import Orders from './Orders' 
// import Modal from './Order/Modal'
// import Orders2 from './Order/Orders2'
// import Qrcodeset from './Setting/Qrcodeset'

const Dashboard2 = () => {
  return (
    <Container>
        <Wrapper>
        <SideNav>
        <Hold>
        <FaLaptopCode style={{width: 30, height: 30, color: "silver"}}/>
        <Title>Dashboard</Title>
      </Hold>
      <Hold>
        <VscAccount style={{width: 30, height: 30, color: "silver"}}/>
        <Title>Update Account</Title>
      </Hold>
      <Hold>
        <HiOutlineCurrencyDollar style={{width: 30, height: 30, color: "silver"}}/>
        <Title>Make Deposit</Title>
      </Hold>
      <Hold>
        <AiOutlineFundProjectionScreen style={{width: 30, height: 30, color: "silver"}}/>
        <Title>Withdraw</Title>
      </Hold>
      <Hold>
        <BsBagCheck style={{width: 30, height: 30, color: "silver"}}/>
        <Title>Orders</Title>
      </Hold>
      <Hold>
        <GiShakingHands style={{width: 30, height: 30, color: "silver"}}/>
        <Title>Affiliate Program</Title>
      </Hold>
        </SideNav>
        <NewDashboard/>
        {/* <Settings/> */}
        {/* <History/>  */}
        {/* <Withdraw/> */}
        {/* <Orders/> */}
        {/* <Orders2/> */}
        {/* <Modal/> */}
        {/* <Qrcodeset/> */}
        {/* <DepositHistory/> */}
        </Wrapper>
    </Container>
  )
}

export default Dashboard2;

const Container = styled.div`
width:  100%;
height: auto;
background-color: #16233C;
display: flex;
justify-content: center;
align-items: center;
`;

const Wrapper = styled.div`
width: 100%;
height: 100%;
display :flex;
justify-content: flex-start;
/* background-color: red; */

@media Screen and (max-width: 768px){
  /* background-color: green; */

}

`;

const SideNav = styled.div`
width: 15%;
height: 100%;
background-color: #16233C;
border-top: 1px solid #4A525E;

@media Screen and (max-width: 768px){
  display: none;
}
`;
const Hold = styled.button`
width: 100%;
padding: 20px 0 20px 30px;
display: flex;
justify-content: flex-start;
align-items: center;
margin: 5px 0;
background: transparent;
border: none;
outline: none;


:hover{
  background-color: #0D182A;
  border-left: 2px solid #FFBE4D;
  width: 100%;
  cursor: pointer;
}
`;
const Title = styled.div`
margin-left: 5px;
font-size: 15px;
font-weight: 500;
color: silver;
`;