import { Button, Alert, Form, Row, Col, Table } from "react-bootstrap";
import Input from "./base/input";
// import TextEditor from "./tinymceTextEditor/index";
// import Treeview from "./treeview";
import Header from "./header-box";
import AlertBox from "./alertBox";
import React, { Component } from "react";
import ModalDanshkar from "./base/modalDanshkar";
import Text from "./base/text";
class SpecialItemBox extends Component {
  state = {
    isSpecialKnowledge: false,
    isGroupknowledge: false,
    showModalDanshkar: false,
    data: {}
  };
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
  showDanshModal = (p) => {
    let showModalDanshkar = this.state.showModalDanshkar;
    showModalDanshkar = !showModalDanshkar;
    this.setState({ showModalDanshkar });
    console.log("showModalDanshkar", showModalDanshkar);
  };
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.hasOwnProperty('checked') ? input.checked : input.value;
    this.setState({ data });
    console.log("handleChange", input.name, input.value);
  };

  render() {
    const { isSpecialKnowledge, isGroupknowledge, showModalDanshkar, data } =
      this.state;
    return (
      <div className="experience">
        <ModalDanshkar
          show={showModalDanshkar}
          toggleModal={this.showDanshModal}
        />
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
          name={"isSpecial"}
          value={data.isSpecial}
          type="checkbox"
          onClick={() => this.specialKnowledge()}
          handleChange={this.handleChange}
        />
        {isSpecialKnowledge === true ? (
          <Input
            label="  دلایل ویژه بدون دانش خود را ذکر کنید"
            require={true}
            type="textarea"
            name={"reasons"}
            value={data.reasons}
            handleChange={this.handleChange}
          />
        ) : (
          ""
        )}

        <Input
          label="آیا دانش شما گروهی است ؟"
          require={true}
          name={"isGroup"}
          value={data.isGroup}
          type="checkbox"
          handleChange={this.handleChange}
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
                <Input
                  label=" دانشکار"
                  require={true}
                  name={"title"}
                  optionButton={{ name: "..." }}
                  optionClick={this.showDanshModal}
                />
              </Col>
              <Col md={3}>
                <Input label=" درصد مشارکت" require={true}
                  name={"percentageOfParticipation"}
                  value={data.percentageOfParticipation}
                  handleChange={this.handleChange}
                />
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
