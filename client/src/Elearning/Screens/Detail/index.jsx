
import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer';
import { fetchDetail } from '../../Redux/Action/product';
class DetailComponent extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="text-center">
                    <h3>{this.props.productDetail._id}</h3>
                    <img src={this.props.productDetail.Image} alt="" />
                    <h3>{this.props.productDetail.Name}</h3>
                </div>
                <Footer />
            </>
        );
    }
    componentDidMount() {
        this.props.dispatch(fetchDetail(this.props.match.params.courseID))
    }
}
const mapStateToProps = (state) => ({
    productDetail: state.product.productDetail || {
        _id: '',
        Name: '',
        Image: '',
    }
})
export default connect(mapStateToProps)(DetailComponent);