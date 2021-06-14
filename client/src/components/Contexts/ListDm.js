import React, { Component } from 'react';
import axios from 'axios';

export default class ListDm extends Component {
    constructor() {
        super();
        this.state = { cats: [] }
    }
    async componentDidMount() {
        await fetch('http://localhost:5000/danhmuc') 
        .then(res => res.json()) 
        .then((data) => 
            { this.setState({ cats: data }) 
        }).catch(console.log)
    }
    renderCat = () => {
        let cats = this.state.cats.map((data, index) =>
        <tr>
            <td>{data.Title}</td>
            <td>{data.Title}</td>
        </tr>
         ); 
        return cats; }

  render() {
    return (
      <div>
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h3>List Danh muc</h3>
            <div class="btn-toolbar mb-2 mb-md-0">
                
                <a href="add"><button type="button" class="btn btn-sm btn-outline-secondary">
                        Add new
                    </button></a>
            </div>
        </div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
          {this.renderCat()}
          </tbody>
        </table>
      </div>
    )
  }
}