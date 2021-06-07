import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TextareaAutosize } from '@material-ui/core';

import store from '../store';
// import { withSnackbar } from '../hoc/SnackBarHOC';

// import { userActions } from '../view/user';
// import Table from './Table';

class HomePage extends React.Component {

  handleDeleteUser(id) {
    const { deleteUser } = this.props;
    const { snackbarShowMessage } = this.props;

    const data = deleteUser(id).then((res) => {
      snackbarShowMessage('User deleted successfully!');
    }).catch((err) => {
      snackbarShowMessage('User deletion failed!', 'error');
    });
  }

  render() {
    const { user, users } = this.props;
    return (
      <div class="container">
        <h1 class="row">
                
          TODO APP 
               
        </h1>
        <br/><br/>
        <div class="row">
            <form class="form-inline col-sm-offset-3">
                <div class="input-group">
                    <span class="input-group-addon">
                      <i class="glyphicon glyphicon-pencil"></i>
                    </span>
                    <input type="text" class="form-control"
                           placeholder="todo-item" 
                           id="box" style={{ width: "30vw" }} />
                </div>
                <div class="form-group">
                    <input type="button"
                           class="btn btn-primary form-control" 
                           value="add" style={{ width: "10vw" }}
                           onclick="add_item()" />
                </div>
            </form>
        </div>
        <div class="row">
            <ul id="list_item">
            </ul>
        </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer?.user,
  users: state.userReducer?.items,
});

const mapDispatchToProps = dispatch => ({
//   getUsers: () => dispatch(userActions.getAll()),
//   deleteUser: id => dispatch(userActions.delete(id)),
});

const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export { connectedHomePage as HomePage };
