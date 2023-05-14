import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header'
import Landing from './Components/LandingPage/Landing';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
// import VerificationPage from './Components/Auth/VerificationPage';
// import Footer from './Components/Footer/Footer';
import Affiliate from './Components/Affiliate/Affiliate';
import AboutUs from './Components/AboutUs/Aboutus';
import Arbitage from './Components/Arbitage/Arbitage';
import Support from './Components/Support/Support';
import Faq from './Components/Support/Faq';
import Howreg from './Components/Support/Howreg';
import Sendreq from './Components/Support/Sendrequest';
import Investment from './Components/LandingPage/Land5/Land5';
// import Dashboard from './Components/Dashboard/Dashboard';
import Dashboard2 from './Dashboard2/Dashboard2';
import Setting from './Dashboard2/Setting/Setting'
import WalletPage from './Dashboard2/History/Wallet'
import WalletId from './Dashboard2/Withdraw/WalletId'
import Private from "./Components/Private"
import Qrcodeset from "./Dashboard2/Setting/Qrcodeset"
import Withdraw from "./Dashboard2/Order/Orders2"
import FooterNew from './Components/FooterNew/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path="/affiliate" element={<Affiliate/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/arbitage" element={<Arbitage/>}/>
        {/* <Route path="/verify" element={<VerificationPage/>}/> */}
        <Route path="/investment" element={<Investment/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/faqdet" element={<Faq/>}/>
        <Route path="/sendrequest" element={<Sendreq/>}/>
        <Route path="/Howreg" element={<Howreg/>}/>
        <Route element={<Private />}>
        <Route path="/dashboard/:userid" element={<Dashboard2/>}/>
        <Route path="/walletpage" element={<WalletPage/>}/>
        <Route path="/walletid" element={<WalletId/>}/>
        <Route path="/settings" element={<Setting/>}/>
        <Route path="/settings" element={<Setting/>}/>
        <Route path="/withdraw" element={<Withdraw/>}/>
        <Route path="/deposit" element={<WalletId/>}/>
        <Route path="/qrcodeset" element={<Qrcodeset/>}/>
        </Route>
      </Routes>
      <FooterNew/> 
      {/* <Footer/>  */}
       </BrowserRouter>
  ) 
};

export default App;



