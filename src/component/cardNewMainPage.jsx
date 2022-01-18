import { Card, Row, Col, Accordion, ListGroup } from "react-bootstrap";

const CardNewsMainPAge = () => {
  const news = [
    {
      id: 1,
      text: "اخبار",
    },
    {
      id: 2,
      text: "اخبار ",
    },
    {
      id: 3,
      text: "اخبار ",
    },
    {
      id: 5,
      text: "اخبار ",
    },

    {
      id: 6,
      text: "اخبار ",
    },
    {
      id: 7,
      text: "اخبار",
    },
    {
      id: 8,
      text: "اخبار ",
    },
    {
      id: 9,
      text: "اخبار ",
    },
    {
      id: 10,
      text: "اخبار ",
    },
    {
      id: 11,
      text: "اخبار ",
    },
  ];
  return (
    <Card border="light" className="card-news">
      {/* <Card.Header>Header</Card.Header> */}
      <Card.Body>
        {/* آخرین اخبار */}
        <Card.Text>
          <i className="fa fa-volume-up" aria-hidden="true"></i> آخرین اخبار{" "}
          <ListGroup as="ul" className="p-0">
            {news.map((n) => {
              return (
                <ListGroup.Item as="li" key={n.id}>
                  <i className="fa fa-circle" style={{ fontSize: "8px" }}></i>{" "}
                  {n.text}
                  <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardNewsMainPAge;
