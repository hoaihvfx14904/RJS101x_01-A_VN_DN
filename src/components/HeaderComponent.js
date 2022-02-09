import React, {Component} from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse} from "reactstrap";
import {NavLink} from "react-router-dom";
class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
        };
       this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: true,
        });
    }

    render(){
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                      {/* <NavbarToggler onClick={this.toggleNav} > */}
                      <NavbarBrand className="mr-auto" href="/" >
                          <img src="assets/image/logo.png" height="30" width="41" alt="Resibon" />
                      </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home" >
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus" >
                                    <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu" >
                                    <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus" >
                                    <span className="fa fa-contactus fa-lg"></span> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                        {/* </NavbarToggler> */}
                    </div>
                </Navbar>
                <div className="jumbotron">
                        <div className="container">
                            <div className="row row-header">
                                <div className="col-12 col-sm-6">
                                    <h1>Ristorante</h1>
                                    <p>Ctrl + N Tạo dự án mới bằng Wizard Ctrl + Alt + N Tạo dự án , tập tin, lớp, vv Alt + F Mở dự án, tệp, v.v. Ctrl + Shift + R Mở Resource (tệp, thư mục hoặc dự án) Alt + Enter Hiển thị và truy cập các thuộc tính tệp Ctrl + S Save tập tin hiện tại Ctrl + Shift + S Save tất cả các tập tin Ctrl + W Đóng tệp hiện tại Ctrl + Shift + W Đóng tất cả các tệp F5 Làm mới nội dung của phần tử đã chọn</p>
                                </div>
                            </div>
                        </div>
                </div>
            </>
        )
    }
}
export default Header;