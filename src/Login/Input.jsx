import React from  'react';
import styled from 'styled-components';

const InputStyle = styled.input`
width: 100%;
padding: 10px 20px;
border-radius: 6px;
border: 2px solid rgba(16, 78, 122, 0.75);
color: rgb(16, 78, 122);
font-size: 16px;
&::placeholder {
 color: rgba(16, 78, 122, 0.75);
}

&:focus {
 outline: none;
 border-color: rgb(255 157 22 / 70%); 
}
`

const LabelStyle = styled.label`
font-size: 16px;
font-weight: 600;
color: rgb(16, 78, 122);
padding: 15px 0 5px;
align-self: flex-start;
`

const Input = ({id, forLabel, name, placeholder, label}) => {

 return (
 <>
  <LabelStyle for = {forLabel} >{label}</LabelStyle>
  <InputStyle id = {id} name = {name} placeholder = {placeholder}></InputStyle>
 </>
 )
}

export default Input;