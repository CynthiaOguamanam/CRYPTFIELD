import React, { useState } from 'react'
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

  const {verifyid} = useParams()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ error: false, msg:""});
  console.log(message)
  const [otpinput, setOtpinput] = useState("");
  const [errorotp, setErrorotp] = useState(false);
  // const [otpinput3, setOtpinput3] = useState("");
  // const [otpinput4, setOtpinput4] = useState("");
  // const [otpinput5, setOtpinput5] = useState("");



  
  // const input1Ref = useRef();
  // const input2Ref = useRef();
  // const input3Ref = useRef();
  // const input4Ref = useRef();
  // const input5Ref = useRef();
  // const input6Ref = useRef();
  // const [inputValues, setInputValues] = useState([
  //    {
  //     input1: '',
  //     input2: '',
  //     input3: '',
  //     input4: '',
  //     input5: '',
  //     input6: '',
      
  //    }
  // ]);

  // const otp = 
  //   `
  //   ${inputValues.input1}
  //   ${inputValues.input2}
  //   ${inputValues.input3}
  //   ${inputValues.input4}
  //   ${inputValues.input5}
  //   ${inputValues.input6}
  //   `;
  //   console.log(otp);
  const otp1 = otpinput;
  console.log(otp1);

  const navigate = useNavigate();
  const url = `https://premium-crypt.onrender.com/api/verifyotp/${verifyid}`

    console.log(verifyid);

    const Verified = (e) => {
        e.preventDefault()
        setLoading(true)
        // console.log(Data); 
        Axios.post(url, {otp: otp1})
        .then((res) => {
        localStorage.setItem("User", JSON.stringify(res.data));
        setMessage({ error: true, msg: res.data.data.message});
        // console.log(res.data.message)
        const getId = JSON.parse(localStorage.getItem("User"))
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: "Registration Successful",
          })
        //  console.log("this is the data", getId.data._id)
          setTimeout(() => {
            navigate(`/dashboard/${getId.data._id}`)
            // console.log(getId._id);
          window.location.reload()
          }, [2000]);
        })
        .catch((err)=>{
        // setMessage({ error: true, msg: "err.data.data.message"});
        // console.log(err.data.data.message)
          setLoading(false)
          setErrorotp(true)
        })

  //     Axios.post(url, { otp: otp1 })
  // .then((res) => {
  //   localStorage.setItem("User", JSON.stringify(res.data));
  //   let message = res.data.data.message;
  //   console.log(res);
  //   const getId = JSON.parse(localStorage.getItem("User"));
  //   if (res.status === 201) {
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Success',
  //       text: message,
  //     });
  //     console.log("this is the data", getId.data._id);
  //     setTimeout(() => {
  //       navigate(`/dashboard/${getId.data._id}`);
  //       console.log(getId.data._id);
  //     }, 2000);
  //   } else if (res.status === 404) {
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Success',
  //       text: message,
  //     });
  //   }
  // })
  // .catch((error) => {
  //   // setMessage({ error: false, msg: "Wrong Verification Code" });
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Error',
  //     text: "error otp",
  //   });
  //   setLoading(false);
  //   console.log(error.response.data.message);
  // });
    
};



  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setInputValues((prevInputValues) => ({
  //     ...prevInputValues,
  //     [name]: value,
  //   }));
  // };

  // const handleInput = (event, nextInputRef) => {
  //   const input = event.target;
  //   if (input.value.length === input.maxLength) {
  //     nextInputRef && nextInputRef.current.focus();
  //   }
  // };
  // const handleKeyDown = (event, previousInputRef) => {
  //   const input = event.target;
  //   if (event.key === 'Backspace' && input.value === '') {
  //     previousInputRef && previousInputRef.current.focus();
  //   }
  // };
  return (
    <Wrapper>
      <Hold>
      <B>We sent you a code to verify your account</B>
      <P>Enter Your code here</P>
      <InputDiv>
        <Input
        value={otpinput}
        onChange={(e) => {setOtpinput(e.target.value)}}
          // name="input1"
          // type='password'
          // maxLength={1}
          // ref={input1Ref}
          // onInput={(event) => handleInput(event, input2Ref)}
          // onKeyDown={(event) => handleKeyDown(event, null)}
          // onChange={handleInputChange}
        />
      </InputDiv>
      <Button onClick={(e)=> Verified(e)}> {loading ? <SpinnerCircular size={25} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /> : "Verify"}</Button>
     <div style={{color: "red"}}>{errorotp? "Wrong verification code" : null}</div>
      <P>I didn't receieve any code</P>
      <R>Resend code</R>
      </Hold>
    </Wrapper>
  )
}

export default OTP