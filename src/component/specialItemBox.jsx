import { Button, Alert, Form, Row, Col, Table } from "react-bootstrap";
import Input from "./base/input";
// import TextEditor from "./tinymceTextEditor/index";
// import Treeview from "./treeview";
import Header from "./header-box";
import AlertBox from "./alertBox";

import React, { Component } from "react";
class SpecialItemBox extends Component {
  state = { isSpecialKnowledge: false, isGroupknowledge: false };
  // let isSpecialKnowledge = false;
  specialKnowledge = (p) => {
    let isSpecialKnowledge = this.state.isSpecialKnowledge;
    isSpecialKnowledge = !isSpecialKnowledge;
    this.setState({ isSpecialKnowledge });
  };
  groupKnowledge = (p) => {
    let isGroupknowledge = this.state.isGroupknowledge;
    isGroupknowledge = !isGroupknowledge;
    this.setState({ isGroupknowledge });
  };

  render() {
    const { isSpecialKnowledge, isGroupknowledge } = this.state;
    return (
      <div className="experience">
        <Header title={"موارد خاص"} icon="fa fa-file-text-o" />
        <hr />

        <AlertBox
          type="info"
          text="دانش ویژه به دانشی اطلاق میشود که ارزش افزوده  بالغ بر 50 میلیون تومان برای سازمان داشته باشد"
          icon="fa fa-exclamation-triangle"
        />

        <Input
          label="آیا دانش شما ویژه است ؟"
          require={true}
          name={"title"}
          type="checkbox"
          onClick={() => this.specialKnowledge()}
        />
        {isSpecialKnowledge === true ? (
          <Input
            label="  دلایل ویژه بدون دانش خود را ذکر کنید"
            require={true}
            name={"title"}
            type="textarea"
          />
        ) : (
          ""
        )}

        <Input
          label="آیا دانش شما گروهی است ؟"
          require={true}
          name={"title"}
          type="checkbox"
          onClick={() => this.groupKnowledge()}
        />

        {isGroupknowledge ? (
          <div>
            <Row>
              <Col md={12}>
                <AlertBox type="info" text=" ثبت دانشگار جدید" />
              </Col>
            </Row>
            <Row className="new-nowledge">
              <Col md={3}>
                <Input label=" دانشکار" require={true} name={"title"} />
              </Col>
              <Col md={3}>
                <Input label=" درصد مشارکت" require={true} name={"title"} />
              </Col>
              <Col md={3}>
                <Button>اضافه به لیست</Button>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>نام</th>
                      <th>نام خانوادگی</th>
                      <th>سازمان</th>
                      <th>درصد مشارکت</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ادمین</td>
                      <td>سیستم</td>
                      <td>وزارت بهداشت</td>
                      <td>1000</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        ) : (
          ""
        )}

        <Row className="footer-box py-10">
          <Col md={9}></Col>
          <Col md={3}>
            <Button variant="primary">ثبت</Button>
            <Button variant="success">پیش نویس</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SpecialItemBox;
