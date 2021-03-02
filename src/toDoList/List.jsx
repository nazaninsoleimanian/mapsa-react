import React, {useState} from 'react'
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Li = styled.li`
 padding: 5px 8px;
 width: 100%;
 border-radius: 6px;
 background-image: linear-gradient(to right, rgba(111, 174, 185, 0.6), rgba(255, 255, 255, 0.897), rgba(111, 174, 185, 0.6));
 margin: 8px 0;
 display: flex;

`
const BoxIcon = styled.div`
`
const TextBox = styled.div`
 flex: 1;
 flex-wrap: wrap;
 position: relative;
`
const CheckBox = styled.input`
cursor: pointer;
opacity: 0;
&:checked ~ label::before {
background-color: rgb(71, 161, 177);
}
`
const LabelText = styled.label`
 color: rgb(16,78,122);
 font-size: 12px;
 margin-left: 5px;


 &::before {
  content: '';
  position: absolute;
  left: -7px;
  top: 2px;
  margin: 4px;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 2px solid rgba(16,78,122,0.75); 
}
`
const EditInput = styled.input`
border: none; 
background-color: rgba(225, 225, 225, .1);
&:focus {
  outline: none;
}

`

const List = ({toDos, deleteHandler, checkedHandler}) => {

  const [isEdit, setIsEdit] = useState(false);

  const editHandler = () => {    
   setIsEdit(pre=> !pre);
 }


 return (
  <>
  <ul>
   {toDos.map( todo => 
   <Li key = {todo.id}>
      {isEdit && <TextBox>     
     <EditInput type = 'text' defaultValue = {todo.content}></EditInput>       
    </TextBox>}
      {!isEdit && <TextBox>
     <CheckBox type="checkbox" id= {todo.id} onClick = {(e)=>{checkedHandler(e, todo.id)}}></CheckBox>
     <LabelText htmlFor={todo.id} style = {todo.checked ? { textDecoration: 'line-through'} : null }>
       {todo.content}</LabelText>
    </TextBox>}

    
    <BoxIcon>
     <DeleteIcon color="primary" style = {{cursor: 'pointer'}} onClick = {()=>{deleteHandler(todo.id)}}/>
     <EditIcon color = 'secondary' style = {{cursor: 'pointer'}} onClick = {()=>{editHandler(todo.id)}}/>
    </BoxIcon>
   </Li>
   )}
   </ul> 
  </>
 )
}

export default List
