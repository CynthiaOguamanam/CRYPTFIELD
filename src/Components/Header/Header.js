import React, { useState, useEffect } from "react";
import { A, Container, Header1, Header2, Left, Line, Login, Logo, LogoHold, Nav, NavHold, Right, SignUp, SocialHold, SocialIcon, Wrapper , Icon, Wrapper1, BurgerHold, NavDiv} from './HeaderStyle';
import {AiOutlinePhone,AiOutlineMenu, AiFillMail} from 'react-icons/ai'
import {BsInstagram, BsTwitter, BsYoutube, BsFillPersonFill} from 'react-icons/bs'
import logo from '../../Assets/mylogo.png'
import SideNav from "./SideNav";
import AOS from 'aos'
import 'aos/dist/aos.css'
import DashHeader from "./DashHeader";
// import {useNavigate} from 'react-router-dom'

const Header = () =>{

    // const navigate = useNavigate();
    const [nav, setNav] = useState(false);
    // const [navData, setNavData] = useState();
    const UserData = JSON.parse(localStorage.getItem("User"));

    const deleteUser = () =>{
        localStorage.removeItem("User");
        // navigate("/")
    };

    useEffect(() =>{
        AOS.init({duration:1000})
      },[])

    return(
        <Container>
            <Wrapper1>
            <Header1>
                    <Left>
                        <A>
                            <Icon> <AiOutlinePhone/> </Icon>
                            <Nav>phone number</Nav>
                        </A>
                        <A>
                            <Icon> <AiFillMail/> </Icon>
                            <Nav>example@gmail.com</Nav>
                        </A>
                    </Left>
                    <Right>
                        <Nav>FAQ's</Nav>
                        <Nav>Policy Privacy</Nav>
                        <SocialHold>
                            <SocialIcon><BsTwitter style={{width: "17px", height: "17px"}}/></SocialIcon>
                            <SocialIcon><BsYoutube style={{width: "17px", height: "17px"}}/></SocialIcon>
                            <SocialIcon><BsInstagram style={{width: "20px", height: "20px"}}/></SocialIcon>
                        </SocialHold>
                    </Right>
            </Header1>
            </Wrapper1>
            <Wrapper>
            <Header2>
                    <LogoHold>
                        <Logo src={logo} alt="logo"/>
                    </LogoHold>
                    
                    {UserData? <Nav onClick={() =>{
                            deleteUser();
                        }}  to='/' style={{color: "#FF4D4D", fontWeight: "bold", fontSize: "20px", display: "flex", alignItems: "center"}}> <BsFillPersonFill/> Sign Out</Nav>  : <>
                        <NavHold>
                        <Nav to='/'>Home</Nav>
                        <Nav to='/aboutus'>About Us</Nav>
                        {/* <Nav to='/investment'>Investment Plan</Nav> */}
                        <Nav to='/arbitage'>Arbitage</Nav>
                        <Nav to='/affiliate'>Affiliate program</Nav>
                        <Nav to='/support'>Support</Nav>
                        <Line></Line>
                        <Login to='/login'>login</Login>
                        <SignUp to='/register'>SignUp</SignUp>
                    </NavHold></>
                    }
            </Header2>
            <BurgerHold onClick={() =>{
          setNav(!nav)
        }}> 
          <AiOutlineMenu style={{color: "#0CE0FF", width: 20, height: 20}}/>
        </BurgerHold>
       </Wrapper>
            {UserData ? <>{nav?(<DashHeader/>):""}</> :   <>
                 {
        nav? (<NavDiv data-aos="fade-right"> 
          <SideNav setNav={setNav}/>
        </NavDiv>) : null
            }
            </>}
        </Container>
    )
};

export default Header;

   