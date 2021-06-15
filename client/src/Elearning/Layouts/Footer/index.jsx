import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className="row mt-3">
                    <div className="col-md-2">
                        <h4>Trang review mỹ phẩm Sakura</h4>
                    </div>
                    <div className="col-md-4">
                        <h5>Danh sách sinh viên</h5>
                        <ul className="list-unstyled text-small">
                            <li>Tên: Thái Đoàn Mai Phương</li>
                            <li>MSSV: 18086291</li>
                            <li>Email: mphuong2042@gmail.com</li>
                            <hr />
                            <li>Tên: Võ Kim Hằng</li>
                            <li>MSSV: 18086311</li>
                            <li>Email: vokimhang170300@gmail.com</li>
                            <li>
                                <hr />
                            </li><li>Tên: Chu Thanh Son</li>
                            <li>MSSV: 18028221</li>
                            <li>Email: thanhson3133@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <br />
                        <ul className="list-unstyled text-small">
                            <li>Tên: Lê Thị Cẩm Hằng</li>
                            <li>MSSV: 18035391</li>
                            <li>Email: @gmail.com</li>
                            <hr />
                            <li>Tên: Nguyễn Thị Phương</li>
                            <li>MSSV: 18045321</li>
                            <li>Email: @gmail.com</li>
                            <li>
                            </li></ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Liên kết</h5>
                        <ul className="list-unstyled text-small">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Zalo</li>
                        </ul>
                    </div>
                    <div className="col-md-1">
                        <ul className="list-unstyled text-small">
                            <p className="float-right">
                                <a href="#">Back to top</a>
                            </p>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
