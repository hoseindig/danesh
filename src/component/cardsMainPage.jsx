import { Card, Row, Col } from "react-bootstrap";

const CardsMAinPage = ({ cards }) => {
  return (
    <Row>
      {cards.map((card) => {
        return (
          <Col md={3} key={card.id}>
            <div className={"card-box " + card.cssClass}>
              <Card border="light">
                {/* <Card.Header>Header</Card.Header> */}
                <Card.Body>
                  {/* <Card.Title>{card.text}</Card.Title> */}
                  <Card.Text>
                    {card.text} {card.number}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default CardsMAinPage;
