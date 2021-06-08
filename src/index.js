import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './helper';
  
// var destination = document.querySelector("#container");
  
// ReactDOM.render(
//     <div>
//         <TodoList/>
//     </div>,
//     destination
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);