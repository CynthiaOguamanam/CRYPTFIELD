import React, { useRef, useState } from 'react'
import {
  Wrapper,
  Input,
  P,
  InputDiv,
  Button,
  B,
  R,
  Hold
}
  from './OtpStyle'
  import Axios from 'axios'
  import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { SpinnerCircular } from 'spinners-react';





const OTP = () => {

  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ error: false, msg:""});
  
  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  const input5Ref = useRef();
  const input6Ref = useRef();
  const [inputValues, setInputValues] = useState([
     {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      
     }
  ]);

  const otp = 
    `
    ${inputValues.input1}
    ${inputValues.input2}
    ${inputValues.input3}
    ${inputValues.input4}
    ${inputValues.input5}
    ${inputValues.input6}
    `;
    console.log(otp);


  const navigate = useNavigate();
  const url = `https://calm-erin-coral-wrap.cyclic.app/api/verifyotp/${id}`

    // console.log(url)

    const Verified = (e) => {
        e.preventDefault()
        setLoading(true)
        // console.log(Data); 

        Axios.post(url,otp)
        .then((res) => {
        localStorage.setItem("User", JSON.stringify(res.data));
        setMessage({ error: true, msg: res.data.message});

        const getId = JSON.parse(localStorage.getItem("User"))
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: message,
       }) 
        console.log("this is the data", getId.data._id)
          setTimeout(() => {
            navigate(`/dashboard/${getId.data._id}`)
            console.log(getId._id);
          }, [2000]);
        }
        )
        .catch((error)=>{
          console.log(error)
          setMessage({error: false, msg: "Wrong otp" });
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: message,
         }) 
      })

    };




  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleInput = (event, nextInputRef) => {
    const input = event.target;
    if (input.value.length === input.maxLength) {
      nextInputRef && nextInputRef.current.focus();
    }
  };
  const handleKeyDown = (event, previousInputRef) => {
    const input = event.target;
    if (event.key === 'Backspace' && input.value === '') {
      previousInputRef && previousInputRef.current.focus();
    }
  };

  return (
    <Wrapper>
      <Hold>
      <B>We sent you a code to verify your Account</B>
      <P>Enter Your code here</P>
      <InputDiv>
        <Input
          name="input1"
          type='password'
          maxLength={1}
          ref={input1Ref}
          onInput={(event) => handleInput(event, input2Ref)}
          onKeyDown={(event) => handleKeyDown(event, null)}
          onChange={handleInputChange}
        />
        <Input
          name="input2"
          maxLength={1}
          ref={input2Ref}
          onInput={(event) => handleInput(event, input3Ref)}
          onKeyDown={(event) => handleKeyDown(event, input1Ref)}
          onChange={handleInputChange}
        />
        <Input
          name="input3"
          maxLength={1}
          ref={input3Ref}
          onInput={(event) => handleInput(event, input4Ref)}
          onKeyDown={(event) => handleKeyDown(event, input2Ref)}
          onChange={handleInputChange}
        />
        <Input
          name="input4"
          maxLength={1}
          ref={input4Ref}
          onInput={(event) => handleInput(event, input5Ref)}
          onKeyDown={(event) => handleKeyDown(event, input3Ref)}
          onChange={handleInputChange}
        />
        <Input
          name="input5"
          maxLength={1}
          ref={input5Ref}
          onInput={(event) => handleInput(event, input6Ref)}
          onKeyDown={(event) => handleKeyDown(event, input4Ref)}
          onChange={handleInputChange}
        />
        <Input
          name="input6"
          maxLength={1}
          ref={input6Ref}
          onInput={(event) => handleInput(event, null)}
          onKeyDown={(event) => handleKeyDown(event, input5Ref)}
          onChange={handleInputChange}
        />
      </InputDiv>
      <Button onClick={(e)=> Verified(e)}> {loading ? <SpinnerCircular size={25} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /> : "Verify"}</Button>
      <P>I didn't receieve any code</P>
      <R>Resend code</R>
      </Hold>
    </Wrapper>
  )
}

export default OTP