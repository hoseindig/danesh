// import "node_modules/react-checkbox-tree/lib/react-checkbox-tree.css";
// import "node_modules/react-checkbox-tree/src/less/react-checkbox-tree.less";
// import "node_modules/react-checkbox-tree/src/scss/react-checkbox-tree.scss";
// https://github.com/jakezatecky/react-checkbox-tree
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import "./style.scss";
import { Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import CheckboxTree from "react-checkbox-tree";
import Input from "../base/input";
class Treeview extends Component {
  state = {
    checked: [],
    expanded: [],
  };
  render() {
    const nodes = [
      {
        value: "mars",
        label: "فیلد های حوضه سلامت",
        children: [
          { value: "phobos", label: "بهداشت درمان" },
          { value: "deimos", label: "آموزش" },
        ],
      },
    ];
    return (
      <Row className="tree-view m-0">
        <Row className="header-up m-0 pt-2 pr-0">
          <Col md={3} className="text-box">
            <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
            <span>فیلد های دانش</span>
          </Col>
          <Col md={7}></Col>
          <Col md={2}>
            <Input label="فیلتر" require={true} noLabel={true} />
          </Col>
        </Row>

        <Row className="m-0 pt-2 pr-0">
          <CheckboxTree
            nodes={nodes}
            checked={this.state.checked}
            expanded={this.state.expanded}
            onCheck={(checked) => this.setState({ checked })}
            onExpand={(expanded) => this.setState({ expanded })}
          />
        </Row>
      </Row>
    );
  }
}

export default Treeview;
