import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

// import { history } from './helpers';
// import { alertActions } from './view/alert';
import { PrivateRoute } from './components/PrivateRoute';
import { HomePage } from './components/HomePage';
// import { LoginPage } from './components/LoginPage';
// import { RegisterPage } from './components/RegisterPage';
// import Alert from './components/Alert';

class App extends React.Component {

  render() {
      console.log('1111111111111111')
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <Router>
              <Switch>
                {/* <Alert /> */}
                {/* <PrivateRoute component={HomePage} exact path="/" /> */}
                <Route component={HomePage} exact path="/" />
                {/* <Route component={LoginPage} exact path="/login" />
                <Route component={RegisterPage} path="/register" /> */}
                <Redirect from="*" to="/" />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  // clearAlerts: alertActions.clear
};

// const connectedApp = connect(mapState, actionCreators)(App);
// export { connectedApp as App };
export default App;
