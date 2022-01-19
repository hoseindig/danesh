import { Button, Alert, Form, Row, Col } from "react-bootstrap";

const AlertBox = ({ type, icon, text }) => {
  return (
    <Alert variant={type}>
      <i className={icon} aria-hidden="true"></i>
      {text}
    </Alert>
  );
};

export default AlertBox;
