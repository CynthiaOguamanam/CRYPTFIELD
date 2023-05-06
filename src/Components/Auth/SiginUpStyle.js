import styled from "styled-components";
import bg from "../asset/background-decor.png"

export const Container = styled.div`
    width: 100%;
    height: 200vh;
    background: url(${bg}), linear-gradient(rgb(32, 38, 66),rgb(35, 43, 79));
`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const Card = styled.div`
    background: #413759;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    width: 500px;
    max-width: 100%;
    position: relative;
    margin: 0 auto;
    border-radius: 10px;
    padding: 30px 60px 50px 60px;
`

export const H1 = styled.div`
  font-size: 30px;
  font-weight: 700;
  line-height: 37px;
  color: rgb(255, 255, 255);
  font-family: sans-serif, monospace;
  text-align: center 
`

export const Form = styled.form`
    margin-top: 10%;
    display: flex;
    flex-direction: column;
`
export const Label = styled.label`
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-family: sans-serif, monospace;
    font-weight: 400;
    line-height: 14px;
    margin-bottom: 1%;
    display: flex;
    align-items: center;

`
export const Input = styled.input`
    border: 1px solid #9CABDD;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 15px;
    background: transparent;
    width: 100%;
    color: #fff;
    outline-width: 0.2px;
    margin-bottom: 5%;
`

export const PassWordText = styled.div`
    min-height: 50px;
    color: white;
    font-family: sans-serif, monospace;
    font-weight: 400;
    border-bottom: 1px solid white;
    line-height: 20px; 
    margin-bottom: 5%;
    padding-bottom: 3%;
`

export const PassWordError = styled.div`
    display: flex;
    color: rgb(235, 87, 87);
    align-items: center;
    font-size: 15px;
    font-family: 400;
    line-height: 24.5px;
    width: 90%;
    margin-bottom: 7%;
`

export const CheckContainer = styled.div`
    display: flex;
`

export const CheckBox = styled.input`
    width: 30px;
    height: 30px;
    border-radius: 5px;
`

export const Tetx = styled.span`
    margin-left: 10%;
    color: white;
`

export const Button = styled.button`
    border: 0px;
    display: inline-block;
    background: #FF4D4D;
    box-shadow: 0px 0px 5px #FF4D4D;
    border-radius: 5px;
    padding: 10px 20px;
    color: #fff;
    font-size: 14px;
    margin-top: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    cursor: pointer;

`