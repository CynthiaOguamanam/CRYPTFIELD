import styled from 'styled-components';


export const Container = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
background-color: #0F192C;
@media Screen and (max-width: 768px){
    height: auto;
    /* padding-bottom: 20px; */
}
`;
export const Wrapper = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-bottom: 20px;

/* background-color: red; */

@media Screen and (max-width: 768px){
    width: 90%;
    padding-bottom: 20px;
}

`;
export const TopDiv = styled.div`
width: 90%;
/* background-color: azure; */
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 40px;

@media Screen and (max-width: 1024px){
    width: 95%;
    flex-direction: column;
    align-items: flex-start;
}
@media Screen and (max-width: 768px){
    flex-direction: column;
    text-align: center;
}
@media Screen and (max-width: 500px){
    flex-direction: column;
    text-align: center;
}
`;
export const BottomDiv = styled.div`
/* background-color: #BF1E24; */
width: 100%;
height: 750px;
border: 1px solid silver;

@media Screen and (max-width: 768px){
    height: auto;
    width: 100%;
}
`;

export const Left = styled.div`
/* background-color: indigo; */

@media Screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%
}
@media Screen and (max-width: 500px){
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%
}
`;
export const Right = styled.div`
font-size: 20px;
font-weight: 400;
color: white;

@media Screen and (max-width: 768px){
    width: 100%;
}
`;
export const Trade = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
color: white;

:hover{
    width: 52%;
    cursor: pointer;
    transition: all 2s;
};

@media Screen and (max-width: 1024px){
    width: 53%;

    :hover{
        width: 55%
    }
}

@media Screen and (max-width: 768px){
    width: 100%;
}
`;
export const Img = styled.img`
:hover{
    margin-left: 5px;
    transition: all 1s;
}
`;
export const H1 = styled.div`
font-size: 45px;
font-weight: bold;
color: white;

@media Screen and  (max-width: 768px){
    font-size: 40px
} 
`;