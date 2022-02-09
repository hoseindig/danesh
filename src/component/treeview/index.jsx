// import "node_modules/react-checkbox-tree/lib/react-checkbox-tree.css";
// import "node_modules/react-checkbox-tree/src/less/react-checkbox-tree.less";
// import "node_modules/react-checkbox-tree/src/scss/react-checkbox-tree.scss";
// https://github.com/jakezatecky/react-checkbox-tree

import Tree from "./antdTree";

import "react-checkbox-tree/lib/react-checkbox-tree.css";
import "./style.scss";
import { Row, Col, Button } from "react-bootstrap";
import React, { Component } from "react";
import CheckboxTree from "react-checkbox-tree";
import Input from "../base/input";
// https://www.npmjs.com/package/react-checkbox-tree
class Treeview extends Component {
  state = {
    checked: [],
    expanded: [],
  };
  handleChangeTree = (type, value) => {
    const { name, handleChange } = this.props;
    // onCheck={checked => this.setState({ checked })}
    // onExpand={expanded => this.setState({ expanded })}
    if (type === "checked") {
      this.setState({ checked: value });
      handleChange({
        currentTarget: { name: name, value: { checked: { value } } },
      });
    } else {
      this.setState({ expanded: value });
      // handleChange({ currentTarget: { name: name, value: { expanded: { value } } } })//overrite in parent
    }
  };
  render() {
    const nodes = [
      {
        key: "mars",
        title: "فیلد های حوضه سلامت",
        children: [
          {
            key: "phobos",
            title: "بهداشت ",
            children: [
              { key: "phobos0", title: "   سیاستگذاری ، برنامه ریزی ،تدوین ها" },
              { key: "phobos01", title: "مدیریت کاهش خطر و بلایا" },
              { key: "phobos02", title: "پایس نظارت و ارزشیابی" },
              { key: "phobos03", title: "شبکه ارتقا سلامت" },
              { key: "phobos04", title: "پیشگیری مباره با بیماری ها" },
              { key: "phobos05", title: "بهبود تغذیه" },
              { key: "phobos06", title: "سلامت محیط کار" },
              { key: "phobos07", title: "سلامت روانی ، اجتماعی و اعتیاد" },
              { key: "phobos08", title: "سلامت خانواده " },
            ],
          },
          { key: "phobos1", title: " درمان" },
          { key: "deimos", title: "آموزش" },
        ],
      },
    ];
    const { label, require } = this.props;
    return (
      <div>
        <Input label={label} require={require} onlyLable={true} />
        <Row className="tree-view m-0 mb-3">
          <Row className="header-up m-0 pt-2 pr-0">
            <Col md={2} className="text-box">
              <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
              <span>فیلد های دانش</span>
            </Col>
            <Col md={8} className="btn-box">
              <Button variant="warning">اعتبار سنجی</Button>
            </Col>
            <Col md={2}>
              <Input label="فیلتر" require={true} noLabel={true} />
            </Col>
          </Row>

          <Row className="m-0 pt-2 pr-0">
            {/* <CheckboxTree
              nodes={nodes}
              checked={this.state.checked}
              expanded={this.state.expanded}
              onCheck={(checked) => this.handleChangeTree("checked", checked)}
              onExpand={(expanded) => this.handleChangeTree("expanded", expanded)}
            />
             */}

            <Tree nodes={nodes} />
          </Row>
        </Row>
      </div>
    );
  }
}

export default Treeview;
