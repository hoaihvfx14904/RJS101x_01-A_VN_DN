import React, {Component} from "react";
import { Navbar, NavbarBrand} from 'reactstrap';
class Header extends Component{

    render(){
        return (
            <>
                <Navbar dark>
                    <div className='container'>
                      <NavbarBrand href='/'>Ristorante on Confusion</NavbarBrand>
                    </div>
                </Navbar>
                <div className='jumbotron'>
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