import React, {Component} from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from "react-router-dom";
class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };
        console.log(this.state.isModalOpen)
       this.toggleNav = this.toggleNav.bind(this);
       this.toggleModal = this.toggleModal.bind(this);
       this.handleLogin = this.handleLogin.bind(this);
    }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
    toggleNav(){
        this.setState({
            isNavOpen: true,
        });
    }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
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
                        <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                        <Modal  isOpen={this.state.isModalOpen}  >
                            <ModalHeader toggle={this.toggleModal} >Login</ModalHeader>
                            <ModalBody>
                            <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                            </ModalBody>
                        </Modal>
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