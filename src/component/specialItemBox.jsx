import { Button, Alert, Form, Row, Col } from "react-bootstrap";
import Input from "./base/input";
import TextEditor from "./tinymceTextEditor/index";
import Treeview from "./treeview";
import Header from "./header-box";
import AlertBox from "./alertBox";

const SpecialItemBox = () => {
  return (
    <div className="experience">
      <Header title={"موارد خاص"} icon="fa fa-file-text-o" />
      <hr />

      <AlertBox
        type="info"
        text="دانش ویژه به دانشی اطلاق میشود که ارزش افزوده  بالغ بر 50 میلیون تومان برای سازمان داشته باشد"
        icon="fa fa-exclamation-triangle"
      />

      <Input label="آیا دانش شما ویژه است ؟" require={true} name={"title"} type="checkbox"/>
      <Input label="آیا دانش شما گروهی است ؟" require={true} name={"title"} type="checkbox"/>

      
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

export default SpecialItemBox;
