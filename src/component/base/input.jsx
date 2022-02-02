import {
  Button,
  Form,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "./style.scss";
const Input = ({
  name,
  label,
  test,
  value,
  require,
  onlyLable,
  noLabel,
  button,
  type,
  onClick,
  handleChange,
  optionButton,
  optionClick
}) => {
  const cssclass = !onlyLable ? "mb-3" : "";
  const ifButtonExistColIs = button ? 10 : optionButton ? 8 : 12;
  return (
    <Row className="my-input">

      {test}
      <Col md={ifButtonExistColIs}>
        {type && type === "textarea" ? (
          <Form.Group className="mb-3 col-md-12" controlId="formBasicCheckbox">
            <Form.Label>
              {label} {require ? <span className="require">*</span> : ""}
            </Form.Label>
            <Form.Control type="textarea" name={name} value={value}
              onChange={handleChange} />
          </Form.Group>
        ) : (
          ""
        )}

        {type && type === "checkbox" ? (
          <Form.Group className="mb-3 col-md-12" controlId="formBasicCheckbox">
            <Form.Check onClick={onClick} type="checkbox" label={label} />
          </Form.Group>
        ) : (
          ""
        )}

        {onlyLable ? (
          <Form.Group className="mb-3 col-md-12" controlId="formBasicCheckbox">
            <Form.Label>
              {label} {require ? <span className="require">*</span> : ""}
            </Form.Label>
          </Form.Group>
        ) : (
          ""
        )}

        {!type && !onlyLable ? (
          <Form.Group className={cssclass} controlId="formBasicEmail">
            {noLabel ? (
              ""
            ) : (
              <Form.Label>
                {label} {require ? <span className="require">*</span> : ""}
              </Form.Label>
            )}
            {!noLabel ? (
              <Form.Control
                type="email"
                placeholder={noLabel ? label : ""}
                name={name}
                value={value}
                onChange={handleChange}
              />
            ) : (
              ""
            )}

            <Form.Text className="text-muted">
              {/* We'll never share your email with anyone else. */}
            </Form.Text>
          </Form.Group>
        ) : (
          ""
        )}
      </Col>

      <Col md={2}>
        {button ? (
          <OverlayTrigger
            placement={"top"}
            overlay={<Tooltip id={`tooltip-top`}>{button.Tooltip}</Tooltip>}
          >
            <Button variant="light" className="mb-2">
              {button.name}
            </Button>
          </OverlayTrigger>
        ) : (
          ""
        )}
      </Col>

      <Col md={2}>
        {optionButton ? (
          <Button variant="light" className="mb-2" onClick={optionClick}>
            {optionButton.name}
          </Button>
        ) : (
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
