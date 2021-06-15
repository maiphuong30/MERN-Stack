import React, { Component } from 'react';
import './style.css'
class Banner extends Component {
    render() {
        return (
            <div>
                <section id="hero">
                <div className="hero-container">
                    <h3>Welcome to <strong>Sakura</strong></h3>
                    <h2>Trang Web review mỹ phẩm</h2>
                    <a href="/gioithieu" className="btn-get-started scrollto">Thông tin về chúng tôi</a>
                </div>
            </section>
            </div>
        );
    }
}

export default Banner;
