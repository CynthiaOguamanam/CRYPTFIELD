import styled from "styled-components";
import mainslider from './mailslide.jpg';

export const Hold = styled.div`
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
width: 40%;
height: max-content;
padding: 20px 10px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 20px;
background-color: #16233C;
opacity: 80%;
border-radius :5px;
margin-bottom: 150px;

@media Screen and (max-width: 768px){
   width: 90%;
}
`;


export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background:linear-gradient(45deg,  #030e21cf, #031128a9),url(${mainslider});
    padding: 80px 0;
    background-repeat: no-repeat;
    background-size :cover;
    background-position: center;
    z-index: 99999999;
    position: fixed;
    /* background: red; */
    top: 0;


`
export const Input = styled.input.attrs((props)=>({
    type: 'alphanumeric',
    maxLength: 6, 
    minLength: 1,
}))
`
   width :130px;
   height: 40px;
   border: none;
   // border-radius: 100%;
   border-bottom: 1px solid grey;
   outline: none;
   text-align: center;
   background: transparent;
   color: #ffffff;
   font-size: 25px;
   @media screen and (max-width: 426px){
    width: 60%;
    height: 30px;
    font-size: 20px;
    font-weight: 100;
   }
   @media screen and (max-width: 320px){
    width: 80%;
    height: 80%;
   }
`
export const P = styled.p`
color: whitesmoke;
font-size: 18px;
`
export const InputDiv = styled.div`
   display: flex;
   gap: 20px;
   justify-content: center;
   align-items: center;

`
export const Button = styled.div`
   width : 200px;
   height: 40px;
   background-color: #015FC9;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   cursor: pointer;
`
export const B = styled.div`
color: whitesmoke;
font-size: 22px;
   @media screen and (max-width: 426px){
     text-align: center;
     font-size: 17px;
   } 
`
export const R = styled.div`
   font-size: 22px;
    margin-top: -20px;
    color: #4489dd;
    cursor: pointer;
`