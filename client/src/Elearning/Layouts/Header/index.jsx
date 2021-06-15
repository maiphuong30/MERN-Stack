import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import './style.css'
import icon from '../../../Asset/img/icon.jpg'
class Header extends Component {
  render() {
    return (
      <div  className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="/">SAKURA</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item text-nowrap dropdown active">
                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                                    Danh mục
                                </a>
                                <div className="dropdown-menu bg-dark">
                                    <a className="nav-link" href="#">Danh Mục 1</a>
                                    <a className="nav-link" href="#">Danh Mục 2</a>
                                    <a className="nav-link" href="#">Danh Mục 3</a>
                                </div>
                            </li>
                            <li className="nav-item text-nowrap active"><a className="nav-link" href="#">Beauty Tips</a></li>
                            <li className="nav-item text-nowrap active"><a className="nav-link" href="#">Giới thiệu</a></li>
                        </ul>
                        <div className="nav-item dropdown text-end">
                            <a className="nav-link dropdown " href="#" id="dropdown02" data-toggle="dropdown">
                                <i className="bi bi-person-circle" />
                                Tài khoản
                            </a>
                            <div className="dropdown-menu bg-dark" aria-labelledby="dropdown02">
                                <a className="nav-link" href="/signin">Đăng nhập</a>
                                <a className="nav-link" href="/signup">Đăng kí</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <section className="search">
                    <div className="row">
                        <div className="col-md-1">
                            <img src={icon} />
                        </div>
                        <div className="col-md-2">
                            <h1>SAKURA</h1>
                            <h5>Nét đẹp Việt</h5>
                        </div>
                        <div className="col-md-9">
                            <form className="form-inline mt-2 mt-md-0" method="GET" action="/search" role="search">
                                <div className="input-group">
                                    <input className="form-control mr-sm-2" name="f" id="f" type="search" size={90} placeholder="Bạn muốn tìm gì?" />
                                    <button className="btn btn-default" type="submit">
                                        <svg width="1.6em" height="1.6em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
    );
  }
}
const mapStoreToState = (state) => {
  return {
    credentials: state.user.credentials,
  };
};
export default connect(mapStoreToState)(Header);
