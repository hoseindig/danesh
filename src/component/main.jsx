import React, { Component } from "react";
import RightMenu from "./rightMenu";
import './main-box.scss'
class Main extends Component {
  state = {};
  render() {
    return (
      <div className="main-box">
        <div className="col-md-3 menu-right">
          <RightMenu />
        </div>
        <h1>main</h1>
      </div>
    );
  }
}

export default Main;
