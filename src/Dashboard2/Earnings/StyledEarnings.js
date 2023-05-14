import styled from "styled-components";

export const ContainerMain = styled.div`
  width :100% ;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const H1 = styled.div`
    font-size: 30px;
    color: white;
    margin-left: 60px;
`
export const MainCard = styled.div`
   width: 95%;
   height: 100%;
   border-radius: 8px;
   padding: 10px;
`
export const Button =styled.div`
    width: 200px;
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 20px 20px 20px 55px;
    font-weight: bold;
    color: #2B2D4C;
    font-size: 30px;
`
export const PlanDiv = styled.div`
 width: 90%;
 height: 40px;
 background-color: #27375f;
 border: 1px solid #394d7f;
`
export const Plan1 = styled.div`
 width: 90%;
 height: 60px;
 background-color: #ff4d4d;
 display: flex;
 color: white;

 @media Screen and (max-width: 768px){
  width: 90.4%;
 }
 @media Screen and (max-width: 425px){
  width: 91%;
 }
`
export const Plan = styled.div`
width: 60%;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
`
export const Amount = styled.div`
width: 30%;
height: 60px;
display: flex;
align-items: center;
justify-content: flex-end;
padding: 10px;
`
export const Profit = styled.div`
width: 20%;
height: 60px;
display: flex;
align-items: center;
justify-content: flex-end;
padding: 10px;
color: white;
`
export const Plans = styled.div`
width: 100%;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



`
export const Deposits1 = styled.div`
width: 88%;
height: 50px;
background-color: #27375f;
margin-top: 20px;
display: flex;
align-items: center;
padding: 10px;
color: white;
border: 1px solid #394d7f;
margin-left: 6;

/* @media Screen and (max-width: 768px){
  width: 88.05%;
 } */
 @media Screen and (max-width: 425px){
  width: 88%;
  margin-left: 1px;
 }

`
export const StarterDiv = styled.div`
width: 100%;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 20px;
`
export const Starter = styled.div`
width: 88%;
height: 50px;
background-color: #27375f;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
color: white;
border: 1px solid #394d7f; 
margin-left: 1px;

@media Screen and (max-width: 768px){
  width: 88%;
 }

 @media Screen and (max-width: 425px){
  width: 88%;
 }
`
export const Plan2 = styled.div`
 width: 90%;
 height: 60px;
 background-color: #ff4d4d;
 display: flex;
 color: white; 

 @media Screen and (max-width: 425px){
  width: 93%;
 }
 @media Screen and (max-width: 375px){
  width: 93.7%;
 }

`
export const StartDiv = styled.div`
   width: 90%;
 height: 60px;
 background-color: #27375f;
 border: 1px solid #394d7f; 
 display: flex;

 @media Screen and (max-width: 768px){
  width: 90.9%;
 }
 @media Screen and (max-width: 425px){
  width: 92.9%;
 }
`
export const Start = styled.div`
  width: 50%;
height: 60px;
display: flex;
align-items: center;
padding: 10px;
color: white;
border-right: 1px solid #394d7f;


`
export const Amount1 = styled.div`
width: 30%;
height: 60px;
display: flex;
align-items: center;
justify-content: flex-end;
padding: 10px;
border-right: 1px solid #394d7f;
color: white;
`