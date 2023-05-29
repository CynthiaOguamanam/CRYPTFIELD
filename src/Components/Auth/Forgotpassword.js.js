import React, { useState } from 'react'

import{ Container, 
  Wrapper,
  Card, 
  H1, 
  Form, 
  Label, 
  Input,
 Button,
  Span, Span2
} from "./LoginStyle";
import {MdEmail} from 'react-icons/md'
import Swal from 'sweetalert2'
import { SpinnerCircular } from 'spinners-react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ error: false, msg:""});

  console.log(message);
  
  const url = "https://premium-crypt.onrender.com/api/forgotpassword"
const Data = {email}
console.log(url)
console.log(Data)

const Login = (e) => {
  e.preventDefault()
    setLoading(true)
    Axios.post(url,Data)
    .then((res)=>{
      console.log(res)
      setMessage({ error: true, msg: "successfully!" });
      Swal.fire({
        icon: 'success',
        title: 'successfully',
        text: res.data.message,
     }) 
     setLoading(false)
     setTimeout(() => {
        navigate(`/login`) 
      }, [2000]);
    })
    .catch((error)=>{
        console.log(error.response)
      /* setMessage({error: false, msg: error.response.data.message}); */
    setLoading(false)
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message,
     }) 
    /* setTimeout(() => {
        setMessage({error: false, msg:""});
      }, [5000]); */
    console.log(error)
    //  reset(),
  })
}
  return (
    <Container>
        <Wrapper>
            <Card>
                <H1 style={{textAlign: "center"}}>Forgot Password</H1>
                <Span>Don't have an account? <Span2 to='/register'>Sign up</Span2></Span>
                <Form onSubmit={(e)=> Login(e)}>
                    <Label><MdEmail style={{marginRight:"2%" }}/>Email*</Label>
                    <Input type="email" placeholder='Email Address' value={email} onChange ={(e)=>{setEmail(e.target.value)}} required/>
                    <Button>{loading ? <SpinnerCircular size={25} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /> : "Submit"}</Button>
                </Form>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default ForgotPassword;