import React, { Component } from 'react';
import CourseItem from '../../CourseItem';
import { connect } from "react-redux";
import {fetchProduct} from "../../Redux/Action/product"
import Banner from '../../Component/Banner';
import ContactComponent from '../../Component/Contact';
import MapComponent from '../../Component/Map';
import Header from '../../Layouts/Header';
import FooterComponent from '../../Layouts/Footer'
class HomeScreens extends Component {
    renderProductList = () =>{
        return this.props.productList.map((item,index)=>{
            return (
                <div className="col-3">
                    <CourseItem item={item}/>            
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <h1 className="display-4 text-center">Product</h1>
                <div className="container">
                    <div className="row">
                        {this.renderProductList()}
                    </div>
                </div>
                <ContactComponent/>
                <MapComponent/>
                <FooterComponent/>
            </div>
        );
    }
    componentDidMount(){
       this.props.dispatch(fetchProduct())
    }
}
const mapStateToProps =(state) =>({
    productList : state.product.products,
})
export default connect(mapStateToProps)(HomeScreens);