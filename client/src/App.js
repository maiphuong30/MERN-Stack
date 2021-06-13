import './App.css';
import React, { useState } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
//import Landing from './components/Landing';
//import Auth from './views/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import useToken from './components/Login/useToken';

function App() {
	const { token, setToken } = useToken();

	if(!token) {
		return <Login setToken={setToken} />
	}
	if(!token) {
		return <Login setToken={setToken} />
	  }
	return (
	  <div className="wrapper">
		<BrowserRouter>
		  <Switch>
			<Route path="/admin">
			  <Dashboard />
			</Route>
		  </Switch>
		</BrowserRouter>
	  </div>
	);
  }
  
  export default App;
