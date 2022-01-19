import { Button, Alert, Form } from "react-bootstrap";
import Input from "./base/input";
// import MyEditor from "./myEditor";
// import KendoEditor from "./kendoEditor/index";3
// import Tiptap from "./kendoEditor/tiptapTextEditor";
import TextEditor from "./tinymceTextEditor/index";
import Treeview from "./treeview";
const Experience = () => {
  return (
    <div className="experience">
      <div className="header">
        <div>
          <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
          <span>ثبت تجربه</span>
        </div>

        <div>
          <Button variant="success">ثبت</Button>{" "}
          <Button variant="info">پیش نویس</Button>{" "}
        </div>
      </div>

      <hr />

      <Alert variant="info">
        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
        موارد ستاره دار اجباری میباشد
      </Alert>

      <Input label="عنوان تجربه" require={true} name={"title"} />

      <Input label="خلاصه دانش" require={true} onlyLable={true} />

      <TextEditor />
      <Input label="حوضه دانش" require={true}   onlyLable={true} />

      <Treeview />
    </div>
  );
};

export default Experience;
