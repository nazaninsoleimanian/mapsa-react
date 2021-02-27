import React from 'react';
import Input from './Input';
import Button from './Button';
import styled from 'styled-components';

// import Icon from '@material-ui/core/Icon';

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
const CheckBox = styled.input`
cursor: pointer;
opacity: 0;
&:checked ~ label::before {
background-color: rgb(255 157 22 / 60%);
}
`
const Label = styled.label`
 color: rgb(16,78,122);
 font-size: 12px;
 margin-left: 5px;

 &::before {
  content: '';
  position: absolute;
  left: -5px;
  top: -4px;
  margin: 4px;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 2px solid rgba(16,78,122,0.75); 
}
`

const Forgot = styled.a`
  font-size: 12px;
  color: rgb(216 135 23);
  margin-top: 20px;
  text-decoration: none;
  transition: all .4s;
  &:hover {
    color: rgb(16, 78, 122);
  }
`
const LoginApp = () => {
  return (
  <>
  <FormBox>
    <Input id = 'user' for ='user' name='username' placeholder = 'username' label = 'Your Username: '/> 
    <Input id = 'pass' forLabel ='pass' name='password' placeholder = 'password' label = 'Your Password: '/> 

    <RememberBox>
      <CheckBox type="checkbox" id= 'checkbox'></CheckBox>
      <Label for='checkbox'> remember me!</Label>
     </RememberBox>

     <Button text = 'Login' login/>
     <Button text = 'regester' regester/>

     <Forgot href='#'>Forgot your password?</Forgot>

  </FormBox>
  </>
  )
}

export default LoginApp;
