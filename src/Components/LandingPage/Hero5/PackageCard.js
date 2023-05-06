import React from 'react'
import styled from 'styled-components'


const PackageCard = (props) => {

    
  return (
    <Container bg={props.bg}>
        <Wrapper>
            <Price>{props.price}</Price>
            <Title>{props.title}</Title>
            <Packages>
                <A>{props.a}</A>
            </Packages>
            <Packages>
                <B>{props.b}</B>
            </Packages>
            <Packages>
                <C>{props.c}</C>
            </Packages>
            <Packages>
                <D>{props.d}</D>
            </Packages>
            <Packages>
                <E>{props.e}</E>
            </Packages>
            <Packages>
                <E>{props.f}</E>
            </Packages>
            <Packages>
                <E>{props.g}</E>
            </Packages>
            <Button>Choose Plan</Button>
        </Wrapper>
    </Container>
  )
};

export default PackageCard;


const Container = styled.div`
width: 27%;
/* background-color: #42385A; */
/* background: linear-gradient(120deg, #192441,#463A5C); */
height: auto;
display: flex;
justify-content: center;
align-items: center;
padding: 3rem 0.2rem;
border-radius: 0.3rem;
margin: 20px 0;
cursor: pointer;
transition: all 1s;
background-color: ${({bg}) => bg};
:hover{
    background: whitesmoke;
    border: 1px solid #42385A;
    cursor: pointer;
    transition: all 1s;
    transform: scale(1.02);
    color: #42385A;
}

@media Screen and (max-width: 1024px){
    width: 30%;
    padding: 2rem 0.1rem;
}
@media Screen and (max-width: 768px){
    width: 45%;
    padding: 2rem 0.1rem;
}
@media Screen and (max-width: 425px){
    width: 100%;
    padding: 2rem 0.1rem;
}
`;
const Wrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
color: whitesmoke;
:hover{
    color: #463A5C;
}

@media Screen and (max-width: 1024px){
    width: 100%;
}
`;
const Price = styled.div`
/* color: whitesmoke; */
font-size: 25px;
font-weight: bold;

`;
const Title = styled.div`
/* color: #42385A; */
/* color: whitesmoke; */
font-size: 25px;
font-weight: 500;
margin: 0.4rem 0 2rem 0;

`;
const Packages = styled.div`
display: flex;
width: 100%;
margin: 0.5rem 0;

@media Screen and (max-width: 1024px){
    width: 100%;
}
`;
const A = styled.div`
/* color: #42385A; */
/* color: whitesmoke; */

margin-left : 20px;
`;
const B = styled.div`
/* color: #42385A; */
/* color: whitesmoke; */

margin-left : 20px;

`;
const C = styled.div`
/* color: #42385A; */
margin-left : 20px;
/* color: whitesmoke; */

`;
const D = styled.div`
/* color: #42385A; */
margin-left : 20px;
/* color: whitesmoke; */

`;
const E = styled.div`
/* color: #42385A; */
margin-left : 20px;
/* color: whitesmoke; */

`;
const Button = styled.div`
background-color: #FD6A4F;
width: 70%;
padding: 1rem 0.2rem;
text-align: center;
color: white;
border-radius: 0.5rem;
font-size: 17px;
font-weight: 500;
margin-top: 2rem;
cursor: pointer;

:hover{
    background-color: #BA2222;
    transition: all 1s;
}
`;