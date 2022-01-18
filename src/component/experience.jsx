import { Button, Alert, Form } from "react-bootstrap";
import Input from "./base/input";
const Experience = () => {
  return (
    <div className="experience">
      <div className="header">
        <div>
          <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
          <span>ثبت تجربه</span>
        </div>

        <div>
          <Button variant="success">ثبت</Button>{" "}
          <Button variant="info">پیش نویس</Button>{" "}
        </div>
      </div>

      <hr />

      <Alert variant="info">
        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
        موارد ستاره دار اجباری میباشد
      </Alert>

      <Input label="عنوان تجربه" require={true}  name={"title"}/>
    </div>
  );
};

export default Experience;
