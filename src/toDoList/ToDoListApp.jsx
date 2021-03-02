import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import List from './List';

const Section = styled.section`
 width: 450px;
 padding: 10px;
 background-color: rgba(225, 225, 225, .75);
 box-shadow: 0 0 6px 1px #243a52;
 border-radius: 3px;

`
const FormStyle = styled.form`
 margin-bottom: 15px;
 text-align: center;
`
const InputStyle = styled.input`
 padding: 5px 8px;
 width: 80%;
 border: none;
 border-radius: 6px 0 0 6px;
 &:focus {
  outline: none;
 }
`
const SubmitBtn = styled.button`
 width: 18%;
 padding: 5px 8px;
 border: none;
 border-radius: 0 6px 6px 0;
 background-image: linear-gradient(to right, #03477e, #2289dd);
 color: #fff;
 outline: none;
 cursor: pointer;
 &:hover {
 background-image: linear-gradient(to right, #2289dd, #03477e);
 }
`
const ToDoListApp = () => {

 const [toDoMsg, setToDoMsg] = useState('');
 const [toDos, setToDos] = useState([]);

 const toDoMsgHandler = (e) => {
  e.preventDefault();
  setToDoMsg(e.target.value);
 }

 
 const AddHandler = (e) => {
  e.preventDefault();
  if(toDoMsg.trim()){
  setToDos([...toDos, {id: uuidv4(),content: toDoMsg,checked: false}])
  setToDoMsg('')
  }
 } 

 const checkedHandler = (e, id) => {
  let checked = e.target.checked;
  setToDos(toDos.map((todo) => {
   if(todo.id === id){
    return {...todo, checked: checked};
   }
   return todo
  }))
 }

 const deleteHandler = (id) => {
  setToDos(toDos.filter(toDo=>id !== toDo.id))
  // setToDos([...toDos].filter(toDo=>id !== toDo.id)) ??????????????
 }

 return (
  <main>
   <Section>
    <header>
   <FormStyle onSubmit = {AddHandler}>
    <InputStyle type = "text" value = {toDoMsg} placeholder = 'Enter your text' onChange = {toDoMsgHandler} ></InputStyle>
    <SubmitBtn type = 'submit' disabled = {toDoMsg === '' ? true : false}>Add</SubmitBtn>
   </FormStyle>
   </header>   
    <List toDos = {toDos} deleteHandler = {deleteHandler} checkedHandler = {checkedHandler} />
   </Section>
  </main> 
 )
}

export default ToDoListApp
