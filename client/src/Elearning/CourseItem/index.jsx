import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import img from '../../Asset/img/1621823131386-8.2.png'
class ProductItem extends Component {
    render() {
        return (
            <section id="portfolio" className="portfolio mt-5">
                <div className="portfolio-container">
                    <div className=" portfolio-item filter-app">
                        <img src={`./img/${this.props.item.Image}`} className="img-fluid" alt />
                        <div className="portfolio-info">
                            <div className="row">
                                <h4 className="col-lg-10">
                                {this.props.item.Name}
                                </h4>
                                <a href={img} data-gall="portfolioGallery" className="venobox preview-link" title><i className="bi bi-plus" /></a>
                                <Link to={`/detail/${this.props.item._id}`} className="details-link" title="More Details"><i className="bi bi-link" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProductItem;