import logo from './logo.svg';
import './App.css';
import HomeScreens from './Elearning/Screens/Home';
import DetailComponent from './Elearning/Screens/Detail';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { connect } from "react-redux";
import { Component } from 'react';
import { FETCH_CREDENTIAL } from './Elearning/Redux/Action/type';
import { createAction } from './Elearning/Redux/Action';
import SignIn from './Elearning/Screens/SignIn';
import SignUp from './Elearning/Screens/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/detail/:courseID" component={DetailComponent} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/home" component={HomeScreens} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
  _getCredentialFromLocal = () => {
    const credentialsStr = localStorage.getItem("creadential");
    if (credentialsStr) {
      this.props.dispatch(createAction(FETCH_CREDENTIAL, JSON.parse(credentialsStr)))
    }
  }
  componentDidMount() {
    this._getCredentialFromLocal()
  }
}

export default connect()(App);
