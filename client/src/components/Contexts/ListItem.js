import React, { Component } from 'react';
import axios from 'axios';

export default class ListItem extends Component {
    constructor() {
        super();
        this.state = { products: [] }
    }
    async componentDidMount() {
        await fetch('http://localhost:5000/admin/product') 
        .then(res => res.json()) 
        .then((data) => 
            { this.setState({ products: data }) 
        }).catch(console.log)
    }
    renderProducts = () => {
        let products = this.state.products.map((data, index) =>
        <tr>
            <td>{data.Name}</td>
            <td>{data.Name}</td>
            <td>{data.Name}</td>
        </tr>
         ); 
        return products; }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
          {this.renderProducts()}
          </tbody>
        </table>
      </div>
    )
  }
}