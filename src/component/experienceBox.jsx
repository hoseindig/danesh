import { Button, Alert, Form, Row, Col } from "react-bootstrap";
import Input from "./base/input";
import TextEditor from "./tinymceTextEditor/index";
import Treeview from "./treeview";
import Header from "./header-box";
import AlertBox from "./alertBox";
import React, { Component } from 'react';


class ExperienceBox extends Component {
  state = { data: {} }
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    const { name, handleFormChangeData } = this.props

    data[input.name] = input.hasOwnProperty('checked') ? input.checked : input.value;
    this.setState({ data });
    handleFormChangeData({ ExperienceBox: data })

    console.log("handleChange", input.name, input.value);
  };
  render() {
    const { data } = this.state
    const { handleSaveForm }=this.props
    return (<div className="experience">

      <Row className="header-box py-10">
        <Col md={9}>
          <Header title={"ثبت تجربه"} icon="fa fa-lightbulb-o" />
        </Col>
        <Col md={3}>
          <Button variant="primary" onClick={handleSaveForm}>ثبت</Button>
          <Button variant="success" >پیش نویس</Button>
        </Col>
      </Row>
      <hr />

      <AlertBox
        type="info"
        text="موارد ستاره دار اجباری میباشد"
        icon="fa fa-exclamation-triangle"
      />

      <Input label="عنوان تجربه" require={true} name={"title"}
        value={data.title}
        handleChange={this.handleChange}
      />

      <TextEditor label="خلاصه دانش" require={true} name='summaryOfKnowledge'
        value={data.summaryOfKnowledge}
        handleChange={this.handleChange} />

      <Treeview label="حوضه دانش" require={true}
        handleChange={this.handleChange}
        value={data.knowledgeBasin} name='knowledgeBasin'
      />

      <Input label="کلمات کلیدی" require={true} value={data.keyword} name='keyword'
        handleChange={this.handleChange} />

      <TextEditor
        button={{ name: "راهنمای پر کردن", Tooltip: "راهنمای پر کردن" }}
        label=" رویداد یا مشکل منجر به کسب تجربه"
        require={true}
        name='eventOrProblemLeadingToPxperience'
        value={data.eventOrProblemLeadingToPxperience}
        handleChange={this.handleChange}
      />

      <TextEditor
        button={{ name: "راهنمای پر کردن", Tooltip: "راهنمای پر کردن" }}
        label=" شرح تجربه (نحوه حل مشکل)"
        require={true}
        name='DescriptionOfTheExperience'
        value={data.DescriptionOfTheExperience}
        handleChange={this.handleChange}
      />

      <Row>
        <Col md={2}>
          <Button className="attachFile">
            <i className="fa fa-file-text" aria-hidden="true"></i> پیوست فایل
          </Button>
        </Col>
      </Row>
    </div>);
  }
}

export default ExperienceBox;
