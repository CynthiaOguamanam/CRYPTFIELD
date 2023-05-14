import styled from "styled-components";


export const ContainerMain = styled.div`
   width: 100% ;
   height: 100%;
   background-color:#233053 ;
   padding: 10px;
   display: flex;
   justify-content: center;
   flex-direction: column;

   @media Screen and (max-width: 1024px){
    width:  97%;
   }
   @media Screen and (max-width: 768px){
    width:  97%;
   }
   @media Screen and (max-width: 425px){
    width:  95%;
   }
`
export const H1 = styled.div`
  font-size: 30px;
  color: white;
  margin-left: 30px;
`
export const P1 = styled.div`
  color: white;
`
export const Numbers = styled.div`
  width: 250px;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 25px;
  margin-top: 20px;
`
export const Fisrt = styled.div`
   display: flex;
   flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SecondContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100px;
  width: 100%;
  margin-top: 30px;
  margin-left: 30px;

  @media Screen and (max-width: 425px){
    flex-direction: column;
    width: 88%;
  }
`
export const Second = styled.div`
    display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ThirdContainer = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 30px;
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;

  @media Screen and (max-width: 425px){
    height: auto;
  }


`
export const FirstThird = styled.div`
   width: 95%;
   height: 200px;
   background-color: #1d2948;
   display: flex;
align-items: center;
justify-content: center;

@media Screen and (max-width: 425px){
    /* background-color: red; */
    flex-direction: column;
    height: auto;
    margin-top: 130px;
  }
`
export const SecondThird = styled.div`
width: 95%;
height: 120px;
background-color: #1d2948;

    
`
export const One = styled.div`
width: 280px ;
height: 150px;
display: flex;
justify-content: center;
flex-direction: column;
gap: 10px;
padding: 5px;
border: 1px solid grey;
    
`
export const Two = styled.div`
display: flex;
margin-left: 60px;
`
export const Three = styled.div`
width: 100px;
height: 150px;
border: 1px solid grey;
border-left: none;
 display   :flex ;
 align-items: center;
 justify-content: center;
`
export const Select = styled.select`
width: 220px;
height: 50px;
border-radius: 5px;
background-color: transparent;
color: white;
padding: 10px;
`
export const Select2 = styled.select`
width:100px;
height: 50px;
background-color: transparent;
color: white;
border-radius: 5px;
margin-top: 10px;
margin-left: 10px; 
`
export const F = styled.div`
  margin-top: 20px;
  color: white;
`
export const Option = styled.option`
color: #202845
`
export const Go = styled.div`
    color: white;
    width: 60px;
    height: 50px;
    background-color: #ff4d4d;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.2rem;
`
export const Divs = styled.div`
width: 450px;
height: 150px;
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid grey;
border-left: none;
`
export const Duration = styled.div`
    width: 100%;
    height: 60px;
    background-color: #ff4d4d;
    display: flex;
    justify-content: space-between;
    color: white;
`
export const Transaction = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    color: white;
`
export const Type = styled.div`
width: 30%;
     display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
`
export const Amount = styled.div`
width: 40%;
     display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
`
export const Date = styled.div`
width: 30%;
     display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
`