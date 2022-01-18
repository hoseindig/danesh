import { Card, Row, Col, Accordion, ListGroup } from "react-bootstrap";


const SendPostMainPage = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey={0} key={0}>
        <Accordion.Header>
          <i className="fa fa-paper-plane" aria-hidden="true"></i> ارسال پست
        </Accordion.Header>
        <Accordion.Body>Lorem ipsum dolor sit amet,</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default SendPostMainPage;
