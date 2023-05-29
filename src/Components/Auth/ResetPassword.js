import React, { useState } from 'react'
import {MdEmail} from 'react-icons/md'
import {BsFillLockFill} from 'react-icons/bs'
import Swal from 'sweetalert2'
import { SpinnerCircular } from 'spinners-react';
import Axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import{ Container, 
    Wrapper,
    Card, 
    H1, 
    Form, 
    Label, 
    Input,
    PassWordText, Button,
    Span, Span2
  } from "./LoginStyle";

const RestPassword = () => {
  const { userid, tokenid } = useParams();
  const navigate = useNavigate()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ error: false, msg:""});

  console.log(message);
  
  const url = `https://premium-crypt.onrender.com/api/restLink/${userid}/${tokenid}`
const Data = {password}
console.log(url)
console.log(Data)

const Login = (e) => {
  e.preventDefault()
  setLoading(true)
  if(userName !== password){
      setLoading(false)
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Password does not match",
       }) 
  }else{
      Axios.post(url,Data)
      .then((res)=>{
        setMessage({ error: true, msg: "successfully!" }); 
        console.log("this is rest",res)
        Swal.fire({
          icon: 'success',
          title: 'successfully',
          text: "you have successfully change your password",
       }) 
        setTimeout(() => {
          navigate(`/login`) 
        }, [2000]);
      })
      .catch((error)=>{
        setMessage({error: false, msg: error.response.data.message});
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
       })
      setLoading(false)
      console.log(error)
      //  reset(),
    })
  }
}


return (
  <Container>
      <Wrapper>
          <Card>
              <H1 style={{textAlign: "center"}}>Reset Password</H1>
              <Span>Don't have an account? <Span2 to='/register'>Sign up</Span2></Span>
              <Form onSubmit={(e)=> Login(e)}>
                  <Label><MdEmail style={{marginRight:"2%" }}/>Enter New Password*</Label>
                  <Input type="password" placeholder='New Password' value={password} onChange ={(e)=>{setPassword(e.target.value)}} required/>

                  <Label><BsFillLockFill style={{marginRight:"2%" }}/>Confirm New Password*</Label>
                  <Input type="password" placeholder='Confirm Password' value={userName} onChange ={(e)=>{setUserName(e.target.value)}} required/>
                  <Button>{loading ? <SpinnerCircular size={25} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /> : "Log in"}</Button>
                  <PassWordText><span style={{color: "#FF4D4D", cursor: "pointer", textDecoration: "underline"}}>Forgot your password?</span></PassWordText>
              </Form>
          </Card>
      </Wrapper>
  </Container>
)
}

export default RestPassword;