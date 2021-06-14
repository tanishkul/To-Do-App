import React, { Component } from "react";
import { Card, Modal } from "../../components";
import "./style.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: '',
            title: '',
            isModalOpen: false,
            editableItem: {},
          };
      }

      addItem = (e) => {
        e.preventDefault();
        const { text, title } = this.state;
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
        const filteredItems = items.filter((item) => {
          return (item.key !== key);
        });
        this.setState({
          items: filteredItems
        });
      }

      editItem = (key) => {
        const { items } = this.state;
        const filteredItems = items.find((item) => {
          return (item.key === key);
        });
        this.setState({
          isModalOpen: true,
          editableItem: filteredItems
        });
      }

      closeModal = () => {
        this.setState({
          isModalOpen: false,
        })
      }

      handleChange = (e, key) => {
        if (e.target.value) {
          this.setState({
            [key]: e.target.value,
          });
        }
      }

      onSubmit  = (data) => {
        const { title, text, key } = data;
        const { items } = this.state;
        const updatedItems = [...items];
        const objIndex = updatedItems.findIndex((obj => obj.key === key));
        updatedItems[objIndex].title = title;
        updatedItems[objIndex].text = text;
        this.setState({
          isModalOpen: false,
          items: updatedItems
        });
      };

  render() {
    const { text, title, items, isModalOpen, editableItem } = this.state;

    return (
      <>
        <Modal
          onClose={this.closeModal}
          show={isModalOpen}
          data={editableItem}
          onSubmit={this.onSubmit}
        />
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
            <Card entries={items} deleteItem={this.deleteItem} editItem={this.editItem}/>
          </div>
        </div>
      </>
    );
  }
}

export default TodoList;