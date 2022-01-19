import { Button, Form, Row, Col, OverlayTrigger ,Tooltip} from "react-bootstrap";
import "./style.scss";
const Input = ({ name, label, require, onlyLable, noLabel, button }) => {
  const cssclass = !onlyLable ? "mb-3" : "";
  const ifButtonExistColIs = button ? 10 : 12;
  return (
    <Row className="my-input">
      <Col md={ifButtonExistColIs}>
        <Form.Group className={cssclass} controlId="formBasicEmail">
          {noLabel ? (
            ""
          ) : (
            <Form.Label>
              {label} {require ? <span className="require">*</span> : ""}
            </Form.Label>
          )}
          {!onlyLable ? (
            <Form.Control
              type="email"
              placeholder={noLabel ? label : ""}
              name={name}
            />
          ) : (
            ""
          )}
          <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>
      </Col>

      <Col md={2}>
        {button ? 
        <OverlayTrigger
          placement={"top"}
          overlay={
            <Tooltip id={`tooltip-top`}>
              {button.Tooltip}
            </Tooltip>
          }
        >
          <Button variant="light" className="mb-2">{button.name}</Button>
        </OverlayTrigger>
: (
  ""
)}


        {/* {button ? (
          <Button variant="light" className="mb-2">
            {button.name}
          </Button>
        ) : (
          ""
        )} */}
      </Col>
    </Row>
  );
};

export default Input;
