import { Button, Alert, Form, Row, Col } from "react-bootstrap";
import Input from "./base/input";
// import MyEditor from "./myEditor";
// import KendoEditor from "./kendoEditor/index";3
// import Tiptap from "./kendoEditor/tiptapTextEditor";
import TextEditor from "./tinymceTextEditor/index";
import Treeview from "./treeview";
import Hedaer from "./header-box";
const Experience = () => {
  return (
    <div className="experience">
      <Hedaer title={"ثبت تجربه"} icon="fa fa-lightbulb-o" />
      <hr />

      <Alert variant="info">
        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
        موارد ستاره دار اجباری میباشد
      </Alert>

      <Input label="عنوان تجربه" require={true} name={"title"} />

      <TextEditor label="خلاصه دانش" require={true} />

      <Treeview label="حوضه دانش" require={true} />

      <Input label="کلمات کلیدی" require={true} />

      <TextEditor
        button={{ name: "راهنمای پر کردن", Tooltip: "راهنمای پر کردن" }}
        label=" رویداد یا مشکل منجر به کسب تجربه"
        require={true}
      />

      <TextEditor
        button={{ name: "راهنمای پر کردن", Tooltip: "راهنمای پر کردن" }}
        label=" شرح تجربه (نحوه حل مشکل)"
        require={true}
      />

      <Row>
        <Col md={2}>
          <Button className="attachFile">
            <i className="fa fa-file-text" aria-hidden="true"></i> پیوست فایل
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Experience;
