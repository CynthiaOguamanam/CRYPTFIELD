import React from 'react';
// import ScrollToTop from "react-scroll-to-top";
import {
    Container, H1, Line3, Col1, 
    Col2, Col3,
    //  Line4, P, Input, Button, H2
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
        <H1>premium-cryptassets.org</H1>
        <Line3>
            <Col1>
                <span style={{fontWeight: "bold", fontSize: "20px", marginBottom: "10px", color: "#E5AC44"}}>Market</span>
                <a href="https://premium-cryptassets.netlify.app/stock">Stocks</a>
                <a href="https://premium-cryptassets.netlify.app/forex">Forex</a>
                {/* <a href="https://premium-cryptassets.com/register">Crypto currency</a> */}
                <a href="https://premium-cryptassets.netlify.app/farm">Non-farm payroll</a>
                <a href="https://premium-cryptassets.netlify.app/multiassets">Multi Assets</a>
            </Col1>
            <Col1>
            <span style={{fontWeight: "bold", fontSize: "20px", marginBottom: "10px", color: "#E5AC44"}}>Useful Links</span>
                <a href="https://premium-cryptassets.netlify.app/">Home</a> 
                <a href="https://premium-cryptassets.netlify.app/aboutus">About Us</a>
                <a href="https://premium-cryptassets.netlify.app/arbitage">Arbitage</a>
                <a href="https://premium-cryptassets.netlify.app/affiliate">Affiliate Program</a>
                <a href="https://premium-cryptassets.netlify.app/faqdet">Privacy Policy</a>
                <a href="https://premium-cryptassets.netlify.app/register">Register</a>
                <a href="https://premium-cryptassets.netlify.app/login">Login</a>
            </Col1>
            <Col2>
            <span style={{fontWeight: "bold", fontSize: "20px", marginBottom: "10px", color: "#E5AC44"}}>Help Center</span>
                <a href="https://premium-cryptassets.netlify.app/support">Help Center</a>
                <a href="https://premium-cryptassets.netlify.app/sendrequest">Reports</a>
            </Col2>
            <Col3>
            <span style={{fontWeight: "bold", fontSize: "20px", marginBottom: "10px", color: "#E5AC44"}}>Contact Information</span>
                <a href="https://premium-cryptassets.netlify.app/support">FAQ's</a>
                <div>premiumcryptassets<br/>@gmail.com</div>
                <br/>
                <a href="https://premium-cryptassets.netlify.app/support">premium-cryptassets.org</a>
                <a href="https://premium-cryptassets.netlify.app/faqdet">Reports</a>
            </Col3>
        </Line3>
        <Footer2/>
       
        {/* <ScrollToTop style={{
                    width: 150, height: 50, border: "1px solid grey", backgroundColor: "#D50000", opacity: "80%", color: "#fff"
                }} smooth/>  */}
        {/* <Line4>
                <H2>Subscribe To Our Newsletter</H2>
                <P>Subscribe to our news letter to get latest updates and news from us</P>
                <Input type='email' placeholder='your email address'/>
                <Button>Subscribe</Button>
        </Line4> */}
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

