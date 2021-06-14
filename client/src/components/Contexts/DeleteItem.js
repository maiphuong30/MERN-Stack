import React, { Component } from 'react';
import axios from 'axios';

class DeleteItem extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        // Simple DELETE request with axios
        axios.delete('http://localhost:5000/product/delete/' + this.props.match.params.id)
            .then(() => this.setState({ status: 'Delete successful' }));
    }
    onSubmit(e) {
        e.preventDefault();

        axios.delete('http://localhost:5000/product/delete/' + this.props.match.params.id)
            .then(res => console.log(res.data));
        window.location = '/product';
    }
  render() {
    return (
        <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Xóa sản phẩm
                    </h1>
                    <div class="btn-toolbar mb-2 mb-md-0">

                        <a href="./"><button type="button" class="btn btn-sm btn-outline-secondary">
                            Trở về
                        </button></a>
                    </div>
                </div>
                <form onSubmit={this.onSubmit}>                    
                    <div class="form-group">
                        <input type="submit" class="btn btn-lg btn-primary" value="Xoa" />
                    </div>
                </form>
            </div>
    );
  }
}

export default DeleteItem;
