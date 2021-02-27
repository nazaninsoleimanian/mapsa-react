import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
width: 100%;
font-size: 16px;
font-weight: 600;
padding: 10px 20px;
cursor: pointer;
border-radius: 6px;
outline: none;
color: ${props=>props.regester ? 'rgb(227, 142, 24)' : 'rgba(6, 50, 81, 0.8)'};
border:${props=>props.regester ? '2px solid rgb(255 157 22 / 70%)' : 'none'};
margin-top: ${props=> props.login ? '40px' : '10px'};
background: ${props=> props.regester ? 'linear-gradient(to right,rgb(16 78 122 / 52%),rgb(110 190 247 / 2%),rgb(255 157 22 / 66%))' : 'linear-gradient(to right, rgba(16, 78, 122, 0.8), rgb(110, 190, 247, .8), rgb(50, 77, 103, .8))'};

&:hover {
 background-color : ${props=> props.login ? 'rgba(110, 190, 247, .8)' : 'rgb(255 157 22 / 16%)'}
}
`
const Button = ({text, regester, login}) => {
 return(
  <>
   <ButtonStyle type = 'button' regester = {regester} login = {login}>{text}</ButtonStyle>
  </>
 )
}

export default Button;