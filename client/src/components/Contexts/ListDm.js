import React, { Component } from 'react';
import axios from 'axios';

export default class ListDm extends Component {
    constructor() {
        super();
        this.state = { cats: [] }
    }
    async componentDidMount() {
        await fetch('http://localhost:5000/admin/danhmuc') 
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
        <h3>List Danh muc</h3>
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