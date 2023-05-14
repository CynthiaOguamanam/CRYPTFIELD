import React from 'react';
import styled from 'styled-components';

const NewsCard = ({title, img}) => {
    return(
        <CardDiv>
             <Top src={img} alt='image'/>
            <H3>{title}</H3>
        </CardDiv>
    )
};

export default NewsCard;

const CardDiv = styled.div`
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

const Top = styled.img`

width: 100%;
height: 83%;
object-fit: scale-down;

`;


const H3 = styled.h5`
color: red;
text-align: center;
padding: 0 6px;
`;

