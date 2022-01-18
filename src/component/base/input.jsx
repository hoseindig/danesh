import { Button, Alert, Form } from "react-bootstrap";

const Input = ({ name,label, require }) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>
        {label} {require ? <span className="require">*</span> : ""}
      </Form.Label>
      <Form.Control type="email" placeholder="" name={name}/>
      <Form.Text className="text-muted">
        {/* We'll never share your email with anyone else. */}
      </Form.Text>
    </Form.Group>
  );
};

export default Input;
