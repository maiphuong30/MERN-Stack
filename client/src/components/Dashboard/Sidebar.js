import { Component } from "react";
import { FaTachometerAlt,FaLaughWink,FaThList,FaBoxes } from 'react-icons/fa';

class Sidebar extends Component {
    render() {
        return (
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <FaLaughWink size={40}/>
                </div>
                <div class="sidebar-brand-text mx-3">Admin</div>
            </a>
            <hr class="sidebar-divider my-0"/>
            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <FaTachometerAlt />
                    <span> Dashboard</span></a>
            </li>
            <hr class="sidebar-divider"/>

            <li class="nav-item">
                <a class="nav-link" href="/product/"
                    aria-expanded="true">
                    <FaBoxes />
                    <span> Sản phẩm</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="/danhmuc/"
                    aria-expanded="true">
                    <FaThList />
                    <span> Danh mục</span>
                </a>
            </li>

        </ul>
        );
    }
}
export default Sidebar;