import React, {useState} from 'react';
import styled from 'styled-components';

const FormBox = styled.form`
width: 320px;
padding: 20px 30px;
background-color: rgba(225, 225, 225, .75);
border-radius: 3px;
margin: 27px auto;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0 0 6px 1px #243a52;
`
const RememberBox = styled.div`
display: flex;
align-self: flex-start;
margin-top: 15px;
position: relative;
`
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

const data = [
 {id: 1, fname: 'nazi', pass: '1370'},
 {id: 2, fname: 'reza', pass: '7013'} ];

export const FormLog = () =>{
 const [message, setMessage] = useState('');
 const [result, setResult] = useState (false);

 const submitData = (e) => {
  e.preventDefault();
  for(let item of data){
    if(item.fname === e.target.elements.user.value && item.pass && item.pass === e.target.elements.pass.value){
     setResult(true);
     setMessage('you are successfuly loged in!')
    }
  }  
 }

 return (
  <>
  <FormBox onSubmit= {submitData}>
   <LabelStyle >username</LabelStyle>
   <InputStyle id = 'user' type = 'text' placeholder = 'username'></InputStyle>

   <LabelStyle>password</LabelStyle>
   <InputStyle id = 'pass' type = 'password' placeholder = 'password'></InputStyle>

   <br/>
   <div>{message}</div>

<ButtonStyle type = 'submit' text = 'Login' login>submit</ButtonStyle>
  </FormBox>
  </>
 )

}