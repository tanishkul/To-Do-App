import React, { Component } from "react";
import "./TodoItems.css";

class TodoItems extends Component {
  createTasks = (item) => {
    return <li key={item.key}>
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
          </li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
        {listItems}         
      </ul>
    );
  }
};

export default TodoItems;