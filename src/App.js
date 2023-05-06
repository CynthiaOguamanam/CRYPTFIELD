import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import Footer from './Components/Footer/Footer';
import Aboutus from './Components/AboutUs/Aboutus';
import Arbitage from './Components/Arbitage/Arbitage';
import Affiliate from './Components/Affiliate/Affiliate';
import Support from './Components/Support/Support';
import Faq from './Components/Support/Faq';
import Howreg from './Components/Support/Howreg';
import Sendrequest from './Components/Support/Sendrequest';
import Dashboard from './Components/Dashboard/Dashboard';
import SignUp from './Components/Auth/SignUp';
import Login from './Components/Auth/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about_us' element={<Aboutus/>}/>
        <Route path='/arbitage' element={<Arbitage/>}/>
        <Route path='/affiliate_program' element={<Affiliate/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/faqdet' element={<Faq/>}/>
        <Route path='/howreg' element={<Howreg/>}/>
        <Route path='/send_request' element={<Sendrequest/>}/>
        <Route path='/user/dashboard/:id' element={<Dashboard/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;