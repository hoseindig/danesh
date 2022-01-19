import { Button, Alert, Form, Row } from "react-bootstrap";

const Input = ({ name, label, require, onlyLable, noLabel }) => {
  const cssclass = !onlyLable ? "mb-3" : "";
  return (
    <Row>
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
    </Row>
  );
};

export default Input;
