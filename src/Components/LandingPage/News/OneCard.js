import React from 'react';
import styled from 'styled-components';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const OneCard = ({title, image, description}) => {
    return(
        <CardDiv>
          <Bottom>
            <H1>{title}</H1>
            <H5 > {description}</H5>
            <Down to='/newsdetailpage'>
                <AiOutlineArrowRight/>
                <H5>View</H5> 
            </Down>
          </Bottom>
             <Top src={image}/>
        </CardDiv>
    )
};

export default OneCard;

const CardDiv = styled.div`
width: 90%;
height: 350px;
background-color: #0F192C;
border-top: 3px solid #1441A3;
box-shadow:   rgb(0 0 0 / 30%) 0px 1px 3px 0px, rgb(27 31 35 / 15%) 0px 0px 0px 1px;
border-radius: 4px;
:hover{
cursor: text;
}
transition: all 500ms;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    width: 85vw;
    flex-direction: column-reverse;
    align-items: center;
    height: 500px;
}
`;

const Top = styled.img`
width: 50%;
height: 100%;

@media Screen and (max-width: 768px){
    width: 100%;
    height: 50%;
    margin-bottom: 10px;
}
`;

const Bottom = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
padding: 0 20px;


@media Screen and (max-width: 768px){
    width: 90%;
    height: 50%;
    margin-bottom :10px;
}
`;

const Down = styled(Link)`
width: 12%;
height: 40px;
color: #EAAB3F;
display: flex;
justify-content: space-between;
align-items: center;
text-decoration: none;
:hover{
    width:14%;
    cursor: pointer;
    text-decoration: 1px underline #EAAB3F;
}
transition: ease-in-out 2s;
margin: 20px 0;

@media Screen and (max-width: 768px){
    width: 16%;

    :hover{
        width: 17%
    }
}

@media Screen and (max-width: 425px){
width: 28%;
}
@media Screen and (max-width: 375px){
width: 30%;
}
@media Screen and (max-width: 320px){
width: 35%;
}
`;

const H1 = styled.h1`
color: #fff;
font-family: Cam;
font-style: oblique;

@media Screen and (max-width: 768px){
    font-size: 25px;
}
@media Screen and (max-width: 425px){
    font-size: 20px;
    margin-top: 20px;
}
`;

const H5 = styled.div`
color: #fff;
font-weight: 500;
text-transform: lowercase;

@media Screen and (max-width: 425px){
    font-size: 14px;
}
`;
