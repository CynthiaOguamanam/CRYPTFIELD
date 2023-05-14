import React from 'react';
// import ScrollToTop from "react-scroll-to-top";
import {
    Container, H1, Line3, Col1, 
    Col2, Col3, Line4, P, Input, Button, H2
} from './FooterStyle';
import Footer2 from "../Footer/Footer"

const Footer = () => {

    // useEffect(()=>{
    //     window.scroll({
    //         top: 0,
    //         left: 100,
    //         behavior: "smooth"
    //     })
    // }, [])

  return (
    <Container>
        <H1>premium-cryptassets.com</H1>
        <Line3>
            <Col1>
                <span style={{fontWeight: "bold", fontSize: "20px", marginBottom: "10px", color: "#E5AC44"}}>Market</span>
                <span>Stocks</span>
                <span>Forex</span>
                <span>Crypto currency</span>
                <span>Non-farm payroll</span>
                <span>Multi Assets</span>
            </Col1>
            <Col1>
            <span style={{fontWeight: "bold", fontSize: "20px", marginBottom: "10px", color: "#E5AC44"}}>Useful Links</span>
                <span>Home</span>
                <span>About Us</span>
                <span>Arbitage</span>
                <span>Affiliate Program</span>
                <span>Privacy Policy</span>
                <span>Register</span>
                <span>Login</span>
            </Col1>
            <Col2>
            <span style={{fontWeight: "bold", fontSize: "20px", marginBottom: "10px", color: "#E5AC44"}}>Help Center</span>
                <span>Legal Docs</span>
                <span>Help Center</span>
                <span>Reports</span>
                <span>Get Trading license</span>
            </Col2>
            <Col3>
            <span style={{fontWeight: "bold", fontSize: "20px", marginBottom: "10px", color: "#E5AC44"}}>Contact Information</span>
                <span>FAQ's</span>
                <span>support@premium-cryptassets.com</span>
                <span>info@premium-cryptassets.com</span>
                <span>Reports</span>
            </Col3>
        </Line3>
        <Footer2/>
       
        {/* <ScrollToTop style={{
                    width: 150, height: 50, border: "1px solid grey", backgroundColor: "#D50000", opacity: "80%", color: "#fff"
                }} smooth/>  */}
        <Line4>
                <H2>Subscribe To Our Newsletter</H2>
                <P>Subscribe to our news letter to get latest updates and news from us</P>
                <Input type='email' placeholder='your email address'/>
                <Button>Subscribe</Button>
        </Line4>
        {/* <Social>
            <Img> <AiOutlineFacebook style={{width: "50px", height: "50px"}}/> </Img>
            <Img> <AiOutlineTwitter style={{width: "50px", height: "50px"}}/> </Img>
            <Img> <AiOutlineInstagram style={{width: "50px", height: "50px"}}/> </Img>
            <Img> <AiOutlineYoutube style={{width: "50px", height: "50px"}}/> </Img>
        </Social> */}
    </Container>
  )
};

export default Footer;

