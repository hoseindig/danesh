import { Card, Row, Col, Accordion, ListGroup } from "react-bootstrap";

import CardsMAinPage from "./cardsMainPage";
import CardNewsMainPAge from "./cardNewMainPage";
import SendPostMainPage from "./sendPostMainPage";

const CenterMainPage = ({cards}) => {
  return (
    <div>
      <CardsMAinPage cards={cards} />
      <Row>
        <Col md={8}>
          <div className="mt-3">
            <SendPostMainPage />
          </div>
        </Col>

        <Col md={4}>
          <div className="m-3 card-box ">
            <CardNewsMainPAge />
          </div>
        </Col>
      </Row> 
    </div>
  );
};

export default CenterMainPage;
