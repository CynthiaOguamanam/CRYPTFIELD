import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
/* background-color: #072847; */
background-color: #0F192C;
padding: 5rem 0;

@media Screen and (max-width: 1280px){
    padding: 1rem 0;
}

`;
export const Wrapper = styled.div`
width: 80%;
display: flex;
flex-direction: column;
height: 80%;

@media Screen and (max-width: 1024px){
    width: 90%;
    margin-right: 15px;
    flex-wrap: wrap;
}
@media Screen and (max-width: 768px){
    width: 90%;
    margin-right: 15px;
}
`;
export const TopDiv = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: #800080; */
height: 30%;

@media Screen and (max-width: 768px){
flex-direction :column;
}
`;
export const Left = styled.div`
width: 50%;
/* background-color: #d87093; */

@media Screen and (max-width: 768px){
    width: 100%;
}
`;
export const Right = styled.div`
width: 50%;

@media Screen and (max-width: 768px){
    width: 100%;
}
/* background-color: #4682b4; */
`;
export const Trade = styled.div`
width: 30%;
display: flex;
align-items: center;
justify-content: space-between;
color: white;

:hover{
    width: 32%;
    cursor: pointer;
    transition: all 2s;
}
@media Screen and (max-width: 768px){
    width: 60%;

    :hover{
        width: 62%;
    }
}
`;
export const Img = styled.img`

`;
export const H1 = styled.div`
font-size: 35px;
font-weight: bold;
color: white;
margin-bottom: 40px;
`;
export const P = styled.div`
color: white;
`;

export const BottomDiv = styled.div`
/* background-color: #a52a2a; */
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media Screen and (max-width: 768px){
flex-wrap: wrap;
flex-direction: column;
width: 100%;
/* justify-content: center; */
}

`;
