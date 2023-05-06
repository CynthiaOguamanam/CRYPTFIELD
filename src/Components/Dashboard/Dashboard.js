import React, {useState} from 'react'
import styled from 'styled-components';
import {FaLaptopCode} from 'react-icons/fa'
import {VscAccount} from 'react-icons/vsc'
import {HiOutlineCurrencyDollar} from 'react-icons/hi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BsBagCheck} from 'react-icons/bs'
// import DashHome from './DashHome.js'
// import Setin from './Setting.jsx'
// import Withdraw from './Withdraw.jsx';
import History from './History.jsx';
// import Earnings from './Earnings.jsx';



const Dashboard = () => {

  const [state, setState] = useState(false);
  const [account, setAccount] = useState(false);
  console.log(state);

  console.log(account);

  const Handle = () => {
    setState(true);
    setAccount(true);
  }

  return (
    <Container>
      <Wrapper>
        <SideBarHold>
          <SideBarfix>
          <Hold onClick={() =>{
        Handle();
      }}>
        <FaLaptopCode style={{width: 30, height: 30, color: "silver"}}/>
        <Title>Dashboard</Title>
      </Hold>
      <Hold onClick={() =>{
        Handle();
      }}>
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
            {/* <DashSideNav/> */}
          </SideBarfix>
        </SideBarHold>
        <MainComponent>
          <CompHold>
            {/* {
              state? (<CompHold2><DashHome setState={setState}/></CompHold2>) : null
            } */}

            {/* {
              account? (<CompHold2><Earnings setAccount={setAccount}/></CompHold2>) : null
            }  */}
            {/* {
              account? (<CompHold2><Setin setAccount={setAccount}/></CompHold2>) : null
            }  */}
            {/* {
              account? (<CompHold2><Withdraw setAccount={setAccount}/></CompHold2>) : null
            }  */}
            {
              account? (<CompHold2><History setAccount={setAccount}/></CompHold2>) : null
            } 
          </CompHold>
        </MainComponent>
      </Wrapper>
    </Container>
  )
}

export default Dashboard;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(120deg, #192441,#463A5C);

`;
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: auto;
padding: 20px 0;
/* background-color: yellow */

@media Screen and (max-width: 768px){
  flex-direction: column;
}
`;
const SideBarHold = styled.div`
width: 20%;
height: 90%;
/* background-color: green; */
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;

@media Screen and (max-width: 768px){
  width: 90%;
}

`;
const SideBarfix = styled.div`
width: 100%;
height: 90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

const MainComponent = styled.div`
width: 80%;
height: 100%;
border-left: 1px solid silver;

@media Screen and (max-width: 768px){
  width: 100%;

}

`;
const CompHold = styled.div`
width: 100%;
/* background-color: yellow; */
margin-top: 100px;
height: 90%;


`;
const CompHold2 = styled.div`
width: 100%;
/* background-color: red; */
margin-top: 50px;
height: 100%;


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
  background-color: #192441;
  border-left: 2px solid tomato;
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
