import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 320px;
padding: 20px 30px;
background-color: rgba(225, 225, 225, .75);
border-radius: 3px;
margin: 27px auto;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0 0 6px 1px #243a52;
`;

const H1 = styled.h1`
color: rgba(6, 50, 81, 0.8);
`
const Button = styled.button`
width: 100%;
font-size: 16px;
font-weight: 600;
padding: 10px 20px;
cursor: pointer;
border-radius: 6px;
outline: none;
color: rgba(6, 50, 81, 0.8);
border: 2px solid rgb(255 157 22 / 70%);
margin-top: 10px;
background: linear-gradient(to right,rgb(16 78 122 / 52%),rgb(110 190 247 / 2%),rgb(255 157 22 / 66%));

&:hover {
 background-color : rgb(255 157 22 / 16%);
}
`
class Counter extends Component{
 state = {
  counter: 0,
 }

 increment(){
  if (this.state.counter < this.props.maxNum){
  this.setState(prev => (
    {...prev, counter: this.state.counter + parseInt(this.props.step)}));
   } 
   return;
 }
 decrement(){
  this.setState({counter: this.state.counter - 1})
 }
 reset(){
  this.setState({counter: 0})
 }

 render(){
  return(
   <>
   <Container>
    <H1>{this.state.counter}</H1>
    <Button onClick = {this.increment.bind(this)}>increment</Button>
    <Button onClick = {this.decrement.bind(this)}>decrement</Button>
    <Button onClick = {this.reset.bind(this)}>reset</Button>
   </Container>
   </>
  )
 }
}

/***********************************************************/

// const Counter = () => {

// const [count, setCount] = useState(0);

// const increment = () => setCount(count + 1);

// const decrement = () => setCount(count - 1);

// const reset = () => setCount(0);

// return(
//    <>
//    <h1>{count}</h1>
//    <Button onClick = {increment}>increment</Button>
//    <Button onClick = {decrement}>decrement</Button>
//    <Button onClick = {reset}>reset</Button>
//    </>
//   )
// } 

export default Counter;
