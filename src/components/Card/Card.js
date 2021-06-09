import React from "react";
import "./style.css";

const Card = ({ entries, deleteItem, editItem }) => {
    return (
      <ul className="theList">
        {entries.map(item => {
          return (
          <li key={item.key}>
            <div className="card">
              <div className="btnDelete">
                <button className="btn" onClick={() => editItem(item.key)}><i className="fa fa-edit"></i></button>
                <button className="btn" onClick={() => deleteItem(item.key)}><i className="fa fa-trash"></i></button>
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

export default Card;