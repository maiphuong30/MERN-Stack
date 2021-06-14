import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import ListItem from '../Contexts/ListItem'
import ListDm from '../Contexts/ListDm';
import AddItem from '../Contexts/AddItem';
import EditItem from '../Contexts/EditItem';
import DeleteItem from '../Contexts/DeleteItem';
import Search from '../Contexts/Search';
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
			<Route path="/product" exact component={ListItem}>
			</Route>
      <Route path="/product/add" exact component={AddItem}>
			</Route>
      <Route path="/product/edit/:id" exact component={EditItem}>
			</Route>
      <Route path="/product/delete/:id" exact component={DeleteItem}>
			</Route>
      <Route path="/product/search/:search" exact component={Search}>
			</Route>
      <Route path="/danhmuc" exact component={ListDm}>
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