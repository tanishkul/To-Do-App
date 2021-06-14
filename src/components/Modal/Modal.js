import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./style.css";

const Modal = ({ onClose, onSubmit, show, data }) => {
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [key, setKey] = useState();
  const [hasError, setError] = useState(false);

  useEffect(() => {
    const { title, text, key } = data;
    setText(text);
    setTitle(title);
    setKey(key);
  }, [data]);

  if(!hasError && text === "") {
    setError(true);
  }

  if(hasError && text !== "") {
    setError(false);
  }

  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Edit Task...</h4>
          </div>
            <div className="modal-group">
              <label htmlFor="title">Title</label>
              <input
                className="modal-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="modal-group">
              <label htmlFor="text">Task</label>
              <input
                className="modal-control"
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            {hasError &&
              <div className="modal-group-warning">
                <p className="warning-text">Task is required!</p>
              </div>
            }
          <div className="modal-footer">
            <button onClick={onClose} className="button">
              Close
            </button>
            <button className="button-primary" onClick={() => onSubmit({title, text, key})}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
