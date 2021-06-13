import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import ListItem from '../Contexts/ListItem'
import ListDm from '../Contexts/ListDm';
import './sb-admin-2.css';
function Dashboard() {
  return(
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Topbar></Topbar>
        <div class="container-fluid">
        <BrowserRouter>
		  <Switch>
			<Route path="/admin/product" exact component={ListItem}>
			</Route>
      <Route path="/admin/danhmuc" exact component={ListDm}>
			</Route>
		  </Switch>
		</BrowserRouter>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;