import { Component } from "react";
import {FaSearch } from 'react-icons/fa';
import axios from 'axios';
class Topbar extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          search: ''
        }
      }
      onChangeSearch(e) {
        this.setState({
            search: e.target.value
        })
      }
      onSubmit(e) {
        e.preventDefault();

        const search= this.state.search;

        console.log(search);

        axios.post('http://localhost:5000/product/search/' + search)
            .then(res => console.log(res.data));
        window.location = '/product/search/'+search;
    }
    render() {
        return (
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <form
                class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
                onSubmit={this.onSubmit}
                >
                <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                        aria-label="Search" aria-describedby="basic-addon2"
                        name="search"
                        value={this.state.search}
                        onChange={this.onChangeSearch}
                        />
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">
                            <FaSearch></FaSearch>
                        </button>
                    </div>
                </div>
            </form>

            <ul class="navbar-nav ml-auto">

                <div class="topbar-divider d-none d-sm-block"></div>

                <li class="nav-item no-arrow">
                    <a class="nav-link" href="/home">
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small"><button class="btn btn-sm btn-outline-secondary" type="submit" name="nut" id="submit">Đến trang home</button></span>
                    </a>
                </li>

            </ul>

        </nav> 
        );
    }
}
export default Topbar;