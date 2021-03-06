import { Button, Alert, Form, Row, Col, Table } from "react-bootstrap";
import Input from "./base/input";
// import TextEditor from "./tinymceTextEditor/index";
// import Treeview from "./treeview";
import Header from "./header-box";
import AlertBox from "./alertBox";
import React, { Component } from "react";
import ModalDanshkar from "./base/modalDanshkar";
import NewDaneshKar from "./newDanshKar";
import Text from "./base/text";
class SpecialItemBox extends Component {
  state = {
    isSpecialKnowledge: false,
    isGroupknowledge: false,
    showModalDanshkar: false,
    data: {},
    newDaneshkar: {
      rows: [
        { id: 1, lastName: 'ادمین  ', firstName: 'سیستم', organization: "وزارت بهداشت", percentageOfParticipation: 100 },
      ]
    }
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
    const { name, handleFormChangeData } = this.props
    data[input.name] = input.hasOwnProperty('checked') ? input.checked : input.value;
    this.setState({ data });
    handleFormChangeData({ SpecialItemBox: data })
    console.log("handleChange", input.name, input.value);
  };

  handleAddUserSelected = () => {
    let { data } = this.state
    // daneshkar
    data.daneshkar = data.userListSelected[0].firstName + " " + data.userListSelected[0].lastName
    // log
    this.setState({ showModalDanshkar: false, data: { ...data, daneshkar: data.daneshkar } });
  }

  handleAddNewRowDaneshkar = () => {
    let { newDaneshkar, data } = this.state

    let index = newDaneshkar.rows.find(i => i.id === data.userListSelected[0].id)
    if (index)
      return
    let row = {
      id: data.userListSelected[0].id,
      firstName: data.userListSelected[0].firstName,
      lastName: data.userListSelected[0].lastName,
      percentageOfParticipation: data.percentageOfParticipation,
      organization: data.userListSelected[0].firstName + " " + data.userListSelected[0].lastName
    }
    newDaneshkar.rows = [...newDaneshkar.rows, row]//.push(row)
    debugger

    this.setState({ newDaneshkar })
    // newDaneshkar.rows
  }
  render() {
    const { isSpecialKnowledge, isGroupknowledge, showModalDanshkar, data, newDaneshkar } =
      this.state;
    const { handleSaveForm } = this.props
    return (
      <div className="experience">
        <ModalDanshkar
          show={showModalDanshkar}
          toggleModal={this.showDanshModal}
          handleChange={this.handleChange}
          name={'userListSelected'}
          handleAddUserSelected={this.handleAddUserSelected}
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
                  name={"daneshkar"}
                  optionButton={{ name: "..." }}
                  optionClick={this.showDanshModal}
                  onClick={this.showDanshModal}
                  value={data.daneshkar}
                // handleChange={this.handleChange}
                />
              </Col>
              <Col md={3}>
                <Input label=" درصد مشارکت" require={true}
                  name={"percentageOfParticipation"}
                  value={data.percentageOfParticipation}
                  handleChange={this.handleChange}
                  type='number'
                  pattern="^\d*(\.\d{0,2})?$"
                />
              </Col>
              <Col md={3}>
                <Button onClick={this.handleAddNewRowDaneshkar}>اضافه به لیست</Button>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <NewDaneshKar rows={newDaneshkar.rows} />
                {/* <Table striped bordered hover>
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
                </Table> */}
              </Col>
            </Row>
          </div>
        ) : (
          ""
        )}

        <Row className="footer-box py-10">
          <Col md={9}></Col>
          <Col md={3}>
            <Button variant="primary" onClick={handleSaveForm}>ثبت</Button>
            <Button variant="success" >پیش نویس</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SpecialItemBox;
