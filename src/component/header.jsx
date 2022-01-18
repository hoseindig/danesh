import React, { Component } from "react";
import logo from "../logo.png";
import SearchInput from "./search";
import HeaderIcon from "./headerIcon";
import TextSlider from "./textSlider";
// import logo from './logo.svg';

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="top-header">
        <div className="row">
          <div className="col-md-3 header-box-r">
            <img width={90} src={logo} alt="" />
            <span>وزارت بهداشت درمان و آموزش پزشکی</span>
          </div>
          <div className="col-md-9 header-box-l">
            <div className="header-box-l-top">
              <SearchInput />
              <HeaderIcon />
            </div>

            <div className="header-box-l-butttom">
              <TextSlider />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
