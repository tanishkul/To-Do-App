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
        const { text, title, items } = this.state;
        if (text.length === 0){
          return;
        }
        const newItem = {
          title: title,
          text: text,
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
        const { items } = this.state;
        const filteredItems = items.filter(function (item) {
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
    const { text, title, items } = this.state;
    return (
      <div className="todoListMain">
        <div className="header">
        <form onSubmit={this.addItem} className="formClass">
        <input 
              placeholder="Title..."
              onChange={(e) => { this.handleChange(e, 'title') }}
              value={title}
            />
            <input
              placeholder="Task to do..."
              onChange={(e) => { this.handleChange(e, 'text') }}
              value={text}
            />
            <button>Add</button>
          </form>
        </div>
        <div className="todoItemsHeader">
        <TodoItems entries={items} delete={this.deleteItem}/>
        </div>
      </div>
    );
  }
}

export default TodoList;