import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './realogo.png';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { AiOutlineMenu } from 'react-icons/ai';
import SideNav from './Sidenav';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const options = [
  'En','Ru', 'Esp', 'fr', 'Ar', 'chn'
];

const defaultOption = options[0];

const Header = () => {

  const [nav, setNav] = useState(false)
  return (
<>
<Container>
        <Wrapper>
            <Logo to='/'>
              <img src={logo} alt='logo'/>
              <div>CRYPTFIELD</div>
            </Logo>
            <Nav to='/'>Home</Nav>
            <Nav to='/about_us'>About us</Nav>
            <Nav to='/arbitage'>Arbitage</Nav>
            <Nav to='/affiliate_program'>Affiliate program</Nav>
            <Nav to='/support'>Support</Nav>
            <Dropdown style={{backgroundColor: "#2F395D"}} options={options}  value={defaultOption} placeholder="Lang" />
            <Login to='/login'>Login</Login>
            <Signup to='/register'>Sign up</Signup>
            <MenuHold  onClick={() =>{
                    setNav(true);
                }}> 
                <Menu2 />
                </MenuHold>  
        </Wrapper>
    </Container>
    { nav? (<NavDiv> <SideNav setNav={setNav} /> </NavDiv>): null}
    </>
  )
};

export default Header;

const NavDiv = styled.div`
    position: fixed;
    min-height: 49px;
    left: 0;
    z-index: 980;
    overflow-x: hidden;
    top: 0;
    height: auto;
    width: 90%;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* bottom: 100px; */
    /* top: 500px; */
    display: block;
    
    @media Screen and (max-width: 1280px){
       
    }
`;

const MenuHold = styled.button`
border: none;
outline: none;
cursor: pointer;
background: none;

@media Screen and (max-width: 768px){
float: right;
/* margin-bottom: 80px; */
margin-right: 90px;
}
@media Screen and (max-width: 425px){
/* margin-bottom: 80px; */
margin-right: 10px;
}


`;
const Menu2 = styled(AiOutlineMenu)`
    width: 30px;
    height: 30px;
    display: none;

    @media Screen and (max-width: 768px){
    display: block;
    color: white;
    /* position: absolute; */
    /* background-color: red; */
    :hover{
        cursor: pointer;
        transition: all 350ms;
    }
}
`;

const Container = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
/* background-color: #463A5C; */
background: linear-gradient(120deg, #192441,#463A5C);
/* background-color: #37436C; */
font-family: monospace;
position: fixed;
z-index: 999;
/* overflow: hidden; */
top: 0;
border-bottom: 1px solid silver;
`;
const Wrapper = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;

`;
const Logo = styled(Link)`
color: silver;
font-size: 14px;
display: flex;
flex-direction: column;
align-items: center;
text-decoration: none;
img{
  width: 50px;
height: 50px
}
`;
const Nav = styled(Link)`
color: #f0f8ffce;
font-size: 14px;
text-decoration: none;
:hover{
    color: #FF4D4D;
    text-decoration: 1px underline #FF4D4D;
    transition: all 400ms;
    cursor: pointer;
}

@media Screen and (max-width: 768px){
  display: none;
}
`;
const Login = styled(Link)`
color: white;
/* background-color: red; */
border: 1px solid #FF4D4D;
border-radius: 5px;
cursor: pointer;
padding: 0.5rem 2rem;
text-align: center;
text-decoration: none;
/* box-shadow: #FF4D4D 0px 3px 6px, rgba(0, 0, 0, 0.197) 0px 3px 6px; */
:hover{
    transition: all 400ms;
    cursor: pointer;
}

@media Screen and (max-width: 768px){
  display: none;
}
`;
const Signup = styled(Link)`
color: #FF4D4D;
font-size: 14px;
font-weight: 500;
text-decoration: none;

:hover{
    color: crimson;
    text-decoration: 1px underline #FF4D4D;
    transition: all 400ms;
    cursor: pointer;
}
@media Screen and (max-width: 768px){
  display: none;
}
`;