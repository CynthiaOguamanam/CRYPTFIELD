import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #111D32;
display: flex;
justify-content: center;
align-items: center;

@media Screen and (max-width: 1024px){
height: auto;
padding-bottom: 10px;


}
@media Screen and (max-width: 768px){
height: auto;
padding-bottom: 10px;
};

`;
export const Wrapper = styled.div`
width: 80%;
height: 100%;
/* background-color: green; */
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 1024px){
width: 100%;
}
@media Screen and (max-width: 768px){
    flex-direction: column;
    height: auto;
    width: 90%;
    padding-bottom: 30px;
}
`;

export const Left = styled.div`
width: 50%;
height: 80%;

@media Screen and (max-width: 768px){
    width: 100%;
    margin-top: 10px;
}
`;
export const Right = styled.div`
width: 50%;
height: 80%;
/* background-color: tomato; */

p{
    color: lightgrey;
    font-family: roboto;
}

@media Screen and (max-width: 768px){
    width: 100%;
    margin-top: 50px;
}
@media Screen and (max-width: 500px){
    width: 90%;
    margin-top: 50px;
}
`;
export const Img1 = styled.img`
border-radius: 1rem;
margin-left: 75px;
width: 80%;
height: 80%;
position: relative;


@media Screen and (max-width: 768px){
    width: 100%;
    height: 400px;
    margin-left: 0;
    margin-right: 35px;
}
@media Screen and (max-width: 500px){
    width: 315px;
    height: 315px;
    margin-left: 0;
    margin-right: 35px;
}

`;


export const Exp = styled.div`
background-color: #015FC9;
width: 200px;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 25rem;
left: 15rem;
border-radius: 0.6rem;
padding:0.8rem 0.4rem;

@media Screen and (max-width: 768px){
   display: none;

}
`;

export const Holder = styled.div`
border: 2px dashed #0CD5F9;
width: 80%;
padding: 0.2rem 0.9rem;
border-radius: 0.4rem;
display: flex;
justify-content: space-around;
align-items: center;

b{
    font-size: 50px;
    color :silver;
}

p{
    font-size: 18px;
    color: silver;
}
`;
export const Button = styled.div`
background-color: #015FC9;
/* border-radius: 1rem 3rem 3rem 1rem; */
border-radius: 0.3rem;
border: none;
outline: none;
padding: 0.7rem 3.2rem;
cursor: pointer;
color: aliceblue;
font-size: 17px;

@media Screen and (max-width: 1280px){
padding: 0.3rem 2rem;
margin-bottom: 10px;
}
@media Screen and (max-width: 1024px){
padding: 0.5rem 3rem;
margin-bottom: 10px;
}

:hover{
    background-color: #BA2222;
    transition: all 1s;
    
}

`;
export const Trade = styled.div`
width: 30%;
display: flex;
align-items: center;
justify-content: space-between;
color: lightgrey;
:hover{
    width: 32%;
    cursor: pointer;
    transition: all 2s;
}

@media Screen and (max-width: 768px){
    width: 28%;
    :hover{
        width: 30%;
    }

}
@media Screen and (max-width: 500px){
    width: 70%;
    :hover{
        width: 72%;
    }

}
`;
export const Img = styled.img`

`;
export const H1 = styled.div`
font-size: 35px;
font-weight: bold;
color: #FFCC40;
margin-bottom: 40px;
`;
export const ButtonHold = styled.div`
width: 70%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 50px;

@media Screen and (max-width: 1280px){
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
}
@media Screen and (max-width: 1024px){
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
}
`;

export const ContactHold = styled.div`
/* width: 17%; */
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    display: none;
}

`;
export const CallIcon = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
border: 2px solid #015FC9;
color: #015FC9;
margin-right: 9px;
`;
export const ContDiv = styled.div`

`;
export const Nav = styled.div`
color: lightgrey;
font-size: 17px;
font-weight: 400;
font-family: sans-serif;
opacity: 90%;

:hover{
    cursor: pointer;
    transition: all 2s;
}
`;

export const P = styled.div`
color: lightgrey;
`;