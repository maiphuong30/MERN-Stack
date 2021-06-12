import './App.css';
import './dangnhap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Auth from './views/Auth'
function App() {
  return (
    <Router>
    <Switch>
			<Route exact path='/' component={Landing} />
      			<Route
							exact
							path='/login'
							render={props => <Auth {...props} authRoute='login' />}
						/>
     		 	<Route
							exact
							path='/register'
							render={props => <Auth {...props} authRoute='register' />}
						/>
		</Switch>
  </Router>
  );
}

export default App;
