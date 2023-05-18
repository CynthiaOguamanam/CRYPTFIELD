import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 50px;
/* background-color: #16233C; */
background-color: #16233C;
display: flex;
justify-content: center;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;
export const Wrapper = styled.div`
width: 70%;
height: 90%;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: navajowhite; */

@media Screen and (max-width: 768px){
    width: 90%;
}
@media Screen and (max-width: 425px){
    width: 90%;
    /* justify-content: center; */
}
`;
export const LeftDiv = styled.div`
width: 400px;
display: flex;
justify-content: space-between;
align-items: center;
@media Screen and (max-width: 768px){
    /* flex-wrap: wrap; */
    /* width: 90%; */

}
@media Screen and (max-width: 425px){
    flex-wrap: wrap;
    width: 90%;
    text-align: center;
    text-align: center;


}
/* background-color: navajowhite; */
`;
export const RightDiv = styled.div`
width: 140px;
height: auto;
/* background-color: navajowhite; */
display: flex;
justify-content: space-between;
align-items: center;
color: silver
`;
export const Img = styled.img`
width: 80px;
height: 15px;
`;
export const Logo = styled.div`
font-size: 8px;
font-weight: 800;
font-style: italic;
color: white;
`;
export const Span = styled(Link)`
font-size: 15px;
color: silver;
cursor: pointer;
text-decoration: none;
`;
export const Dot = styled.div`
width: 3px;
height: 3px;
background-color: silver;
border-radius: 50%;
`;

export const Hold = styled.a`
text-decoration: none;
color: silver;
`;

