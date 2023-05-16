import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: auto;
/* margin-top: 180px; */
background-color: #16233C;
`;
export const H1 = styled.h1`
color: #fff;
font-family: Cam;
font-style: oblique;
font-size: 45px;

@media Screen and (max-width: 768px){
    font-size: 25px;
}
@media Screen and (max-width: 425px){
    font-size: 20px;
    margin-top: 20px;
}
`;
export const Wrapper = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
height: auto;
@media SCreen and (max-width: 768px){
    flex-wrap: wrap;
}
`;

export const Left = styled.div`
width: 80%;
display: flex;
flex-direction: column;
height: auto;
`;
export const Right = styled.div`
flex-wrap: wrap;
display: flex;
flex-direction: column;
align-items: center;

@media Screen and (max-width: 768px){
    justify-content: space-around;
    width: 90%;
    flex-direction: row;
}
`;

export const Latest = styled.div`
width: 221px;
height: 401px;
background-color: white;
border-top: 3px solid #1441A3;
box-shadow:   rgb(0 0 0 / 30%) 0px 1px 3px 0px, rgb(27 31 35 / 15%) 0px 0px 0px 1px;
border-radius: 4px;
:hover{
transform: scale(1.01);
cursor:  pointer;
}
transition: all 500ms;
margin: 20px 0;
padding-bottom: 15px;
`;
export const One = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 15px;
line-height: 20px;
margin-bottom: 15px;
`;
export const Two = styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;
margin-left: 15px;
width: 90%;
color: red;
font-weight: 500;
font-style: oblique;
`;

export const Line = styled.div`
width: 90%;
height: 3px;
opacity: 35%;
background-color: #263238;
`;

export const Button = styled(Link)`
width: 77%;
background-color: #0F192C;
margin-left: 15px;
padding: 5px 54px;
border-radius: 2px;
color: white;
text-align: center;
font-weight: 500;
font-size: 16px;
text-decoration: none;
`;


