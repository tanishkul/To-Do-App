import React from "react";
import "./TodoItems.css";

const  TodoItems = ({ entries }) => {
    return (
      <ul className="theList">
        {entries.map(item => {
          return (
          <li key={item.key}>
            <div className="card">
              <div className="btnDelete">
                <button className="btn"><i class="fa fa-edit"></i></button>
                <button className="btn"><i class="fa fa-trash"></i></button>
              </div>
              <div className="container">
                <h4><b>{item.title}</b></h4>
                <p>{item.text}</p>
              </div>
            </div>
          </li>)
        })}         
      </ul>
    );
};

export default TodoItems;