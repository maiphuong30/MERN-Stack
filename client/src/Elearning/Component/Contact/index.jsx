import React, { Component } from 'react'
import './style.css'
import member1 from '../../../Asset/img/gt1.jpg'
import member2 from '../../../Asset/img/gt2.jpg'
import member3 from '../../../Asset/img/gt3.jpg'
import member4 from '../../../Asset/img/gt4.jpg'
import member5 from '../../../Asset/img/gt5.jpg'
export default class ContactComponent extends Component {
    render() {
        return (
            <section id="team" className="team">
                <div className="container-fluid">
                    <div className="section-title">
                        <h2>Team</h2>
                        <h3>Our Hardworking <span>Team</span></h3>
                        <p>Hope everyone will pass the course</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-1 col-md-6 d-flex align-items-stretch">
                        </div>
                        <div className="col-lg-2 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={member5} className="img-fluid" alt />
                                    <div className="social">
                                        <a href><i className="bi bi-twitter" /></a>
                                        <a href><i className="bi bi-facebook" /></a>
                                        <a href><i className="bi bi-instagram" /></a>
                                        <a href><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Chu Thanh Sơn</h4>
                                    <span>18028221</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={member1} className="img-fluid" alt />
                                    <div className="social">
                                        <a href><i className="bi bi-twitter" /></a>
                                        <a href><i className="bi bi-facebook" /></a>
                                        <a href><i className="bi bi-instagram" /></a>
                                        <a href><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Thái Đoàn Mai Phương</h4>
                                    <span>18086291</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={member2} className="img-fluid" alt />
                                    <div className="social">
                                        <a href><i className="bi bi-twitter" /></a>
                                        <a href><i className="bi bi-facebook" /></a>
                                        <a href><i className="bi bi-instagram" /></a>
                                        <a href><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Võ Kim Hằng</h4>
                                    <span>18086311</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={member3} className="img-fluid" alt />
                                    <div className="social">
                                        <a href><i className="bi bi-twitter" /></a>
                                        <a href><i className="bi bi-facebook" /></a>
                                        <a href><i className="bi bi-instagram" /></a>
                                        <a href><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Lê Thị Cẩm Hằng</h4>
                                    <span>18035391</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={member4} className="img-fluid" alt />
                                    <div className="social">
                                        <a href><i className="bi bi-twitter" /></a>
                                        <a href><i className="bi bi-facebook" /></a>
                                        <a href><i className="bi bi-instagram" /></a>
                                        <a href><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Nguyễn Thị Phương</h4>
                                    <span>18045321</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-6 d-flex align-items-stretch">
                        </div>
                    </div>
                </div>
            </section>


        )
    }
}
