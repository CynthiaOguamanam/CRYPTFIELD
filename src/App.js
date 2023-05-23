import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Landing from './Components/LandingPage/Landing';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import VerificationPage from './Components/Auth/OTP';
// import Footer from './Components/Footer/Footer';
import Affiliate from './Components/Affiliate/Affiliate';
import AboutUs from './Components/AboutUs/Aboutus';
import Arbitage from './Components/Arbitage/Arbitage';
import Support from './Components/Support/Support';
import Faq from './Components/Support/Faq';
import Howreg from './Components/Support/Howreg';
import Sendreq from './Components/Support/Sendrequest';
import Investment from './Components/LandingPage/Land5/Land5';
import NewsDetailPage from './Components/LandingPage/News/NewsDetailPage';
// import Dashboard from './Components/Dashboard/Dashboard';
import Dashboard2 from './Dashboard2/Dashboard2';
import Setting from './Dashboard2/Setting/Setting'
import WalletPage from './Dashboard2/History/Wallet'
import WalletId from './Dashboard2/Withdraw/WalletId'
import BnB from './Dashboard2/Withdraw/bnbdetail'
import Ethereum from './Dashboard2/Withdraw/Ethereumdetail'
import Ripple from './Dashboard2/Withdraw/rippledetail'
import Dogecoin from './Dashboard2/Withdraw/dogecoindetail'
import Tether from './Dashboard2/Withdraw/Tetherdetail'
import Private from "./Components/Private"
import Qrcodeset from "./Dashboard2/Setting/Qrcodeset"
import Withdraw from "./Dashboard2/Order/Orders2"
import Updateuser from "./Dashboard2/Updateuser/Updateuser"
import FooterNew from './Components/FooterNew/Footer'
import Stock from './Components/FooterNew/Stock'
import Forex from './Components/FooterNew/Forex'
import Farm from './Components/FooterNew/Farm'
import Multiassets from './Components/FooterNew/Multiassets'
// import Crypto from './Components/FooterNew/Stock'
import BankTransfer from './Dashboard2/Withdraw/bankdetail';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path="/affiliate" element={<Affiliate/>}/>
        <Route path="/stock" element={<Stock/>}/>
        <Route path="/forex" element={<Forex/>}/>
        <Route path="/farm" element={<Farm/>}/>
        <Route path="/multiassets" element={<Multiassets/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/arbitage" element={<Arbitage/>}/>
        <Route path="/newsdetailpage" element={<NewsDetailPage/>}/>
        <Route path="/verify/:verifyid" element={<VerificationPage/>}/>
        <Route path="/investment" element={<Investment/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/faqdet" element={<Faq/>}/>
        <Route path="/sendrequest" element={<Sendreq/>}/>
        <Route path="/Howreg" element={<Howreg/>}/>
        <Route path="/newsdetail" element={<NewsDetailPage/>}/>
        <Route element={<Private />}>
        <Route path="/dashboard/:userid" element={<Dashboard2/>}/>
        <Route path="/walletpage" element={<WalletPage/>}/>
        <Route path="/walletid" element={<WalletId/>}/>
        <Route path="/settings" element={<Setting/>}/>
        <Route path="/settings" element={<Setting/>}/>
        <Route path="/withdraw" element={<Withdraw/>}/>
        <Route path="/deposit" element={<WalletId/>}/>
        <Route path="/qrcodeset" element={<Qrcodeset/>}/>
        <Route path="/bnb" element={<BnB/>}/>
        <Route path="/tether" element={<Tether/>}/>
        <Route path="/ethereum" element={<Ethereum/>}/>
        <Route path="/bank" element={<BankTransfer/>}/>
        <Route path="/ripple" element={<Ripple/>}/>
        <Route path="/dogecoin" element={<Dogecoin/>}/>
        <Route path="/updateuser" element={<Updateuser/>}/>
        </Route>
      </Routes>
      <FooterNew/> 
      {/* <Footer/>  */}
       </BrowserRouter>
  ) 
};

export default App;



