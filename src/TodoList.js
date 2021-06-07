import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: '',
            title: ''
          };
      }
       
      addItem = (e) => {
        e.preventDefault();
        if (this.state.text.length === 0){
          return;
        }
        const newItem = {
          title: this.state.title,
          text: this.state.text,
          key: Date.now()
        }
        this.setState((prevState) => {
          return {
          items: [newItem, ...prevState.items]
        }});
        this.setState({
          text: '',
          title: ''
        });
      }

      deleteItem = (key) => {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }

      handleChange = (e, key) => {
        if (e.target.value) {
          this.setState({
            [key]: e.target.value,
          });
        }
      }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
        <form onSubmit={this.addItem} className="formClass">
        <input 
              placeholder="Title..."
              onChange={(e) => { this.handleChange(e, 'title') }}
              value={this.state.title}
            />
            <input
              placeholder="Task to do..."
              onChange={(e) => { this.handleChange(e, 'text') }}
              value={this.state.text}
            />
            <button>Add</button>
          </form>
        </div>
        <div className="todoItemsHeader">
        <TodoItems entries={this.state.items} delete={this.deleteItem}/>
        </div>
      </div>
    );
  }
}

export default TodoList;