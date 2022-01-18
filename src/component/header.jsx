import React, { Component } from "react";
import logo from "../logo.png";
import SearchInput from "./search";
import HeaderIcon from "./headerIcon";
import TextSlider from "./textSlider";

import { Row, Col } from "react-bootstrap";
// import logo from './logo.svg';

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="top-header">
        <Row>
          <Col md={3}>
            <div className="header-box-r">
              <img width={90} src={logo} alt="" />
              <span>وزارت بهداشت درمان و آموزش پزشکی</span>
            </div>
          </Col>
          <Col md={9}>
            <div className="  header-box-l">
              <div className="header-box-l-top">
                <SearchInput />
                <HeaderIcon />
              </div>

              <div className="header-box-l-butttom">
                {/* <TextSlider /> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
