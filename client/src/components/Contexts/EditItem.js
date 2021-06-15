import React, { Component } from 'react';
import axios from 'axios';

export default class EditItem extends Component {
    constructor(props) {
        super(props);

        this.onChangeTensp = this.onChangeTensp.bind(this);
        this.onChangeDanhmuc = this.onChangeDanhmuc.bind(this);
        this.onChangeGia = this.onChangeGia.bind(this);
        this.onChangeMota = this.onChangeMota.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            tensp: '',
            danhmuc: '',
            txtgia: '',
            txtmota:'',
            cats: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/product/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    tensp: response.data.Name,
                    danhmuc: response.data.Category_id,
                    txtgia: response.data.Cost,
                    txtmota: response.data.Mota
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        fetch('http://localhost:5000/danhmuc/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ cats: data })
            }).catch(console.log)
    }
    renderCat = () => {
        let cats = this.state.cats.map((data, index) =>
            <option value={data._id}>{data.Title}</option>
        );
        return cats;
    }
    //send data to server

    onChangeTensp(e) {
        this.setState({
            tensp: e.target.value
        })
    }
    onChangeDanhmuc(e) {
        this.setState({
            danhmuc: e.target.value
        })
    }
    onChangeGia(e) {
        this.setState({
            txtgia: e.target.value
        })
      }
    onChangeMota(e) {
        this.setState({
            txtmota: e.target.value
        })
      }
    onSubmit(e) {
        e.preventDefault();

        const product = {
            tensp: this.state.tensp,
            danhmuc: this.state.danhmuc,
            txtgia: this.state.txtgia,
            txtmota: this.state.txtmota
          }

        console.log(product);

        axios.post('http://localhost:5000/product/edit/' + this.props.match.params.id, product)
            .then(res => console.log(res.data));
        window.location = '/product/';
    }
    render() {
        return (
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Chỉnh sửa thông tin sản phẩm
                    </h1>
                    <div class="btn-toolbar mb-2 mb-md-0">

                        <a href="./"><button type="button" class="btn btn-sm btn-outline-secondary">
                            Trở về
                        </button></a>
                    </div>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                        <label for="tensp">Tên sản phẩm</label>
                        <input type="text" class="form-control" name="tensp" placeholder="Tên sản phẩm" required
                            value={this.state.tensp}
                            onChange={this.onChangeTensp}
                        />
                    </div>
                    <div class="form-group">
                        <label for="danhmuc">Danh mục sản phẩm</label>
                        <select class="custom-select d-block w-100" id="danhmuc" name="danhmuc"
                            value={this.state.danhmuc}
                            onChange={this.onChangeDanhmuc}>
                            <option value="">Choose...</option>
                            {this.renderCat()}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="gia">Giá</label>
                        <input type="text" class="form-control" name="txtgia" id="txtgia" placeholder="100000" 
                        value={this.state.txtgia}
                        onChange={this.onChangeGia}
                        />
                    </div>
                    <div class="form-group">
                        <label for="mota">Mô tả</label>
                        <textarea name="txtmota" id="txtmota" class="form-control" id="textarea"
                        value={this.state.txtmota}
                        onChange={this.onChangeMota}
                        ></textarea>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-lg btn-primary" value="Edit" />
                    </div>
                </form>
            </div>
        )
    }
}