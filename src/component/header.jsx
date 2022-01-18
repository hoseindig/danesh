import React, { Component } from "react";
import logo from "../logo.png";
// import logo from './logo.svg';

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="top-header">
        <div className="row">
          <div className="col-md-3 header-box-r">
            <img width={70} src={logo} alt="" />
            <span>وزارت بهداشت درمان و آموزش پزشکی</span>
          </div>
          <div className="col-md-9 header-box-l">
            <div className="header-box-l-top">++++++</div>
            <div className="header-box-l-butttom">++++++</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
