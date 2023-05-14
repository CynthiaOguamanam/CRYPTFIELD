import styled from "styled-components";

export const MainContainer =styled.div`
   width : 100%;
   border-left: 1px solid grey;
   background-color: #111B2B;
   height :100%;
`;
export const H1 =styled.div`
    font-size: 30px;
    color: whitesmoke;
    margin-left: 60px;
    /* margin-top: 30px; */
    font-weight: bold;

    @media Screen and (max-width: 768px){
      margin-left: 60px;
    }
`;
export const DivContainer =styled.div`
    width: 90%;
    height: auto;
    /* background-color: #19244190; */
    border-radius: 5px;
    margin-top: 30px;
    padding: 30px 20px;
    margin-left: 30px;

    @media Screen and (max-width: 768px){
    }
    @media Screen and (max-width: 425px){
   margin-left: 0px;
    }
    @media Screen and (max-width: 375px){
      width: 88%;
    }
    @media Screen and (max-width: 320px){
      width: 87%;
    }
`;
export const Name =styled.div`
   width : 100% ;
   height: 50px;
   display: flex;
   align-items: center;
   /* background-color: yellow; */
   padding: 10px;
   color :whitesmoke ;

   @media Screen and (max-width: 768px){
      justify-content: center;
      /* margin-left: 20px; */
   }
   @media Screen and (max-width: 425px){
      justify-content: center;
      margin-left: 0px;
   }

`
export const P =styled.div`
   width : 40% ;
   font-size: 18px;
   font-weight: bold;
`
export const P1 =styled.div`
   width : 60% ;
   font-size: 18px;
   font-weight: bold;
`
export const Date2 =styled.div`
   width : 100% ;
   height: 50px;
   display: flex;
   align-items: center;
   /* padding: 10px; */
   color :whitesmoke;

   /* background-color: #235324; */
   margin-top: 20px;

   @media Screen and (max-width: 768px){
      margin-bottom: 70px;
      padding: 0px;
   }

   @media Screen and (max-width: 425px){
      margin-left: 0px;
   }
`
export const Date =styled.div`
   width : 100% ;
   height: 50px;
   display: flex;
   flex-direction: column;
   /* align-items: center; */
   padding: 10px;
   color :whitesmoke;

   /* background-color: #233053; */
   margin-top: 20px;

   @media Screen and (max-width: 768px){
      flex-direction: column;
      margin-bottom: 70px;
      padding: 0px;
      margin-left: 10px;
      width: 90%;
   }
`
export const P2 =styled.div`
  width : 40% ;
  height: 50px;
  /* background-color: #233053; */
  display: flex;
   align-items: center;
   padding: 10px;
   font-size: 18px;
   font-weight: bold;
`
export const P3 =styled.div`
   width : 60% ;
   height: 50px;
   /* background-color: #233053; */
   display: flex;
   align-items: center;
   font-size: 18px;
   font-weight: bold;
`
export const Input =styled.input`
    width: 98%;
    height: 40px;
    border: 1px solid white;
    border-radius: 8px;
    background-color: transparent;
    padding: 10px;
   outline: none;
   color: whitesmoke;

    ::placeholder{
      color: whitesmoke;
    }

    @media Screen and (max-width: 768px){
      width: 100%;
      padding: 20px 0;
      /* margin-bottom: 20px; */
   }
`
export const Label =styled.label`
   color :whitesmoke ;
   width: 20%;
   font-size: 15px;
   font-weight: bold;
   /* text-align: center; */
   margin-bottom: 8px;
`
export const InputDiv =styled.div`
   width :100% ;
   display: flex;
   flex-direction: column;
   height: 80px;
   padding: 10px;
   margin-top: 20px;
   background-color: #101C30;
   border-radius: 0%.3rem;


   @media Screen and (max-width: 768px){
      flex-direction: column;
      margin-bottom: 70px;
      width: 90%;
      height: auto;

      input{
         padding: 10px 0;
      }
   }
`
export const ButtonDiv =styled.div`
   width :100% ;
   /* background-color: #233053; */
   height: 60px;
   display: flex;
   align-items :center ;
   justify-content: center;

   @media Screen and (max-width: 768px){
      width: 100%;
   }
   @media Screen and (max-width: 320px){
      width: 100%;
      margin-left: 10px;
   }

`

export const Button =styled.div`
   width :250px ;
   height: 50px;
   background-color: #ff4d4d;
   display: flex;
   align-items: center;
   justify-content: center;
   color :whitesmoke ;
   margin-top: 50px;
   border-radius: 0.3rem;
   cursor: pointer;
`

