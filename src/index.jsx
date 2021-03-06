import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Counter from './counter/Counter';
// import LoginApp from './Login/LoginApp';
// import {FormLog} from './form/Form';
import ToDoListApp from './toDoList/ToDoListApp';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Counter maxNum = '20' step= '2'/> */}
    {/* <LoginApp /> */}
    {/* <FormLog /> */}
    <ToDoListApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
