import React, { Component } from 'react';
import axios from 'axios';

export default class ListDm extends Component {

  render() {
    return (
      <div>
        <h3>List Danh muc</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    )
  }
}